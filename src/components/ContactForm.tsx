'use client';

import { useState, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  reason: 150,
  message: 2000,
};

export default function ContactForm({ prefilledService = '' }: { prefilledService?: string }) {
  const t = useTranslations('ContactForm');
  const locale = useLocale();
  const [form, setForm] = useState({ name: '', email: '', service: prefilledService, reason: '', message: '', honeypot: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const formLoadedAt = useRef(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, renderedAt: formLoadedAt.current, locale }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || t('errorGeneric'));
      }
      setSent(true);
    } catch {
      setError(t('errorGeneric'));
    } finally {
      setSubmitting(false);
    }
  };

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [key]: e.target.value })),
  });

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'rgba(109,76,58,0.04)',
    border: '1px solid rgba(109,76,58,0.18)',
    borderRadius: '3px',
    padding: '0.85rem 1rem',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    fontWeight: 300,
    color: 'var(--ink)',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  if (sent) {
    return (
      <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{
          width: '40px', height: '40px', margin: '0 auto 1.25rem',
          borderRadius: '50%', border: '1.5px solid var(--accent-4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 9.5l3.2 3.2L14 5.5" stroke="var(--accent-4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem', fontWeight: 400, color: 'var(--accent-1)', margin: '0 0 0.5rem',
        }}>
          {t('sentTitle')}
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)', fontWeight: 300,
          fontSize: '0.875rem', color: 'var(--muted)',
        }}>
          {t('sentSubtitle')}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
    >
      {/* Honeypot — hidden from real users, bots tend to fill every field */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="website">{t('honeypotLabel')}</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...field('honeypot')}
        />
      </div>

      <div className="form-row">
        <div>
          <label className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>
            {t('nameLabel')}
          </label>
          <input
            type="text" required placeholder={t('namePlaceholder')} style={inputStyle}
            maxLength={MAX_LENGTHS.name}
            {...field('name')}
          />
        </div>
        <div>
          <label className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>
            {t('emailLabel')}
          </label>
          <input
            type="email" required placeholder={t('emailPlaceholder')} style={inputStyle}
            maxLength={MAX_LENGTHS.email}
            {...field('email')}
          />
        </div>
      </div>
      <div>
        <label className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>
          {t('serviceLabel')}
        </label>
        <select
          required
          value={form.service}
          onChange={e => setForm(prev => ({ ...prev, service: e.target.value }))}
          style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239d5233' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem', color: form.service ? 'var(--ink)' : 'rgba(109,76,58,0.4)' }}
        >
          <option value="" disabled hidden>{t('servicePlaceholder')}</option>
          <option value="Teambuilding">{t('serviceTeambuilding')}</option>
          <option value="Individuele Coaching">{t('serviceCoaching')}</option>
          <option value="Vrouwen op de Werkvloer">{t('serviceVrouwen')}</option>
          <option value="Overig">{t('serviceOther')}</option>
        </select>
      </div>

      {form.service === 'Overig' && (
        <div>
          <label className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>
            {t('reasonLabel')}
          </label>
          <input
            type="text" required placeholder={t('reasonPlaceholder')}
            style={inputStyle}
            maxLength={MAX_LENGTHS.reason}
            {...field('reason')}
          />
        </div>
      )}

      <div>
        <label className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>
          {t('messageLabel')}
        </label>
        <textarea
          required
          rows={6}
          placeholder={t('messagePlaceholder')}
          style={{ ...inputStyle, resize: 'vertical' }}
          maxLength={MAX_LENGTHS.message}
          {...field('message')}
        />
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 300,
          color: 'var(--muted)', margin: '0.35rem 0 0', textAlign: 'right',
        }}>
          {form.message.length}/{MAX_LENGTHS.message}
        </p>
      </div>
      {error && (
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 300,
          color: 'var(--accent-2)', margin: 0,
        }}>
          {error}
        </p>
      )}
      <button type="submit" disabled={submitting} style={{
        alignSelf: 'flex-start',
        display: 'inline-flex', alignItems: 'center', gap: '0.65rem',
        background: 'var(--accent-4)',
        border: 'none',
        color: 'var(--bg)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.6rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        padding: '0.85rem 1.75rem',
        cursor: submitting ? 'default' : 'pointer',
        opacity: submitting ? 0.6 : 1,
        borderRadius: '2px',
      }}>
        {submitting ? t('submitting') : t('submit')}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  );
}
