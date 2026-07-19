import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL_CHARS_RE = /[\r\n\t\0]/;

// Mirrors the client-side maxLength values in ContactForm.tsx — this is the source of truth.
const MAX_LENGTHS = {
  name: 100,
  email: 254,
  reason: 150,
  message: 2000,
};

const ALLOWED_SERVICES = ['Teambuilding', 'Individuele Coaching', 'Vrouwen op de Werkvloer', 'Overig'];

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_SUBMIT_TIME_MS = 2000;

const ERRORS = {
  nl: {
    tooLarge: 'Bericht is te groot.',
    rateLimited: 'Te veel aanvragen. Probeer het later opnieuw.',
    invalidJson: 'Ongeldige aanvraag.',
    invalidFields: 'Vul alle velden correct in.',
    notConfigured: 'E-mail is momenteel niet beschikbaar.',
    sendFailed: 'Verzenden is mislukt. Probeer het later opnieuw.',
  },
  en: {
    tooLarge: 'Message is too large.',
    rateLimited: 'Too many requests. Please try again later.',
    invalidJson: 'Invalid request.',
    invalidFields: 'Please fill in all fields correctly.',
    notConfigured: 'Email is currently unavailable.',
    sendFailed: 'Sending failed. Please try again later.',
  },
};

function errorsFor(locale: unknown) {
  return locale === 'en' ? ERRORS.en : ERRORS.nl;
}

// Best-effort in-memory rate limiter. Resets on cold start and isn't shared across
// concurrent serverless instances, but still filters basic abuse cheaply with no external service.
const requestLog = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = requestLog.get(ip);
  if (!entry || now > entry.resetAt) {
    requestLog.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

function isValidSingleLine(value: unknown, maxLength: number): value is string {
  return typeof value === 'string' && !!value.trim() && value.length <= maxLength && !CONTROL_CHARS_RE.test(value);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: ERRORS.nl.tooLarge }, { status: 413 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim()
    || request.headers.get('x-nf-client-connection-ip')
    || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: ERRORS.nl.rateLimited }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: ERRORS.nl.invalidJson }, { status: 400 });
  }

  const { name, email, service, reason, message, honeypot, renderedAt, locale } = body as Record<string, unknown>;
  const errors = errorsFor(locale);

  if (
    !isValidSingleLine(name, MAX_LENGTHS.name) ||
    !isValidSingleLine(email, MAX_LENGTHS.email) || !EMAIL_RE.test(email as string) ||
    typeof service !== 'string' || !ALLOWED_SERVICES.includes(service) ||
    typeof message !== 'string' || !message.trim() || message.length > MAX_LENGTHS.message ||
    (service === 'Overig' && !isValidSingleLine(reason, MAX_LENGTHS.reason)) ||
    (reason !== undefined && reason !== '' && !isValidSingleLine(reason, MAX_LENGTHS.reason))
  ) {
    return NextResponse.json({ ok: false, error: errors.invalidFields }, { status: 400 });
  }

  // Spam heuristics: honeypot filled in, or submitted implausibly fast after the form loaded.
  // Respond as if it succeeded so bots get no signal about what tripped the check.
  const submittedTooFast = typeof renderedAt === 'number' && Date.now() - renderedAt < MIN_SUBMIT_TIME_MS;
  if ((typeof honeypot === 'string' && honeypot.trim()) || submittedTooFast) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json({ ok: false, error: errors.notConfigured }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const to = process.env.RESEND_TO_EMAIL || 'sasha_elisabeth@outlook.com';
  const from = process.env.RESEND_FROM_EMAIL || 'Sasha Elisabeth <noreply@sashaelisabeth.com>';
  const reasonText = typeof reason === 'string' ? reason.trim() : '';
  const subjectService = service === 'Overig' && reasonText ? `Overig — ${reasonText}` : service;

  // Internal notification email always stays in Dutch, regardless of the visitor's chosen
  // site language — this lands in the practice owner's own inbox.
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email as string,
    subject: `Nieuw contactformulier — ${subjectService}`,
    text: `Nieuw bericht via het contactformulier\n\nNaam: ${name}\nE-mail: ${email}\nWaarvoor: ${service}${reasonText ? `\nToelichting: ${reasonText}` : ''}\n\nBericht:\n${message}`,
    html: renderEmailHtml({ name: name as string, email: email as string, service, reason: reasonText, message }),
  });

  if (error) {
    console.error('Resend send failed:', error);
    return NextResponse.json({ ok: false, error: errors.sendFailed }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderEmailHtml({ name, email, service, reason, message }: {
  name: string; email: string; service: string; reason: string; message: string;
}) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding: 6px 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #9d5233; white-space: nowrap; vertical-align: top;">
        ${label}
      </td>
      <td style="padding: 6px 0 6px 16px; font-family: Georgia, 'Times New Roman', serif; font-size: 15px; color: #40382b;">
        ${value}
      </td>
    </tr>
  `;

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf7f0; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
            <tr>
              <td style="background-color: #6d4c3a; padding: 24px 32px;">
                <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #f6d8cc;">
                  Nieuw contactformulier
                </p>
                <p style="margin: 6px 0 0; font-family: Georgia, 'Times New Roman', serif; font-size: 20px; color: #faf7f0;">
                  Sasha Elisabeth — Vaktherapie &amp; Coaching
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row('Naam', escapeHtml(name))}
                  ${row('E-mail', `<a href="mailto:${escapeHtml(email)}" style="color: #9d5233; text-decoration: none;">${escapeHtml(email)}</a>`)}
                  ${row('Waarvoor', escapeHtml(service))}
                  ${reason ? row('Toelichting', escapeHtml(reason)) : ''}
                </table>
                <p style="margin: 24px 0 8px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #9d5233;">
                  Bericht
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf7f0; border-left: 3px solid #f6d8cc; border-radius: 4px;">
                  <tr>
                    <td style="padding: 16px 20px; font-family: Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.6; color: #40382b;">
                      ${escapeHtml(message).replace(/\n/g, '<br />')}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 32px; border-top: 1px solid #f0ebe0;">
                <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 11px; color: #6f6a5c;">
                  Verzonden via het contactformulier op sashaelisabeth.nl
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}
