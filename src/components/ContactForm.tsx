'use client';

import { useState } from 'react';

export default function ContactForm({ prefilledService = '' }: { prefilledService?: string }) {
  const [form, setForm] = useState({ name: '', email: '', service: prefilledService, message: '' });
  const [sent, setSent] = useState(false);

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [key]: e.target.value })),
  });

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(82,69,27,0.04)',
    border: '1px solid rgba(82,69,27,0.18)',
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
      <div style={{
        padding: '3rem 2rem', textAlign: 'center',
        background: 'rgba(246,216,204,0.3)',
        borderRadius: '10px', border: '1px solid rgba(121,48,31,0.15)',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontSize: '1.5rem', color: 'var(--accent-2)', margin: '0 0 0.5rem',
        }}>
          Bedankt voor je bericht.
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)', fontWeight: 300,
          fontSize: '0.875rem', color: 'var(--accent-2)',
        }}>
          Ik neem zo snel mogelijk contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={e => { e.preventDefault(); setSent(true); }}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
    >
      <div className="form-row">
        <div>
          <label className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Naam
          </label>
          <input type="text" required placeholder="Jouw naam" style={inputStyle} {...field('name')} />
        </div>
        <div>
          <label className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>
            E-mailadres
          </label>
          <input type="email" required placeholder="jij@voorbeeld.nl" style={inputStyle} {...field('email')} />
        </div>
      </div>
      <div>
        <label className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Waarvoor wil je contact opnemen?
        </label>
        <select
          required
          value={form.service}
          onChange={e => setForm(prev => ({ ...prev, service: e.target.value }))}
          style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2379301f' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem', color: form.service ? 'var(--ink)' : 'rgba(82,69,27,0.4)' }}
        >
          <option value="" disabled hidden>Maak een keuze…</option>
          <option value="Teambuilding">Teambuilding</option>
          <option value="Individuele Coaching">Individuele Coaching</option>
          <option value="Vrouwen op de Werkvloer">Vrouwen op de Werkvloer</option>
        </select>
      </div>

      <div>
        <label className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Bericht
        </label>
        <textarea
          required
          rows={6}
          placeholder="Waar kan ik je mee helpen?"
          style={{ ...inputStyle, resize: 'vertical' }}
          {...field('message')}
        />
      </div>
      <button type="submit" style={{
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
        cursor: 'pointer',
        borderRadius: '2px',
      }}>
        Verstuur bericht
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  );
}
