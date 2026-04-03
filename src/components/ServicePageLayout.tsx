import Link from 'next/link';

export interface PricingTier {
  label: string;
  price: string;
  note: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface ServicePageData {
  label: string;
  title: string;
  heroSubtitle: string;
  heroBg: string;
  intro: string;
  steps: ProcessStep[];
  included: string[];
  practical: { label: string; value: string }[];
  pricing: PricingTier[];
  pricingNote?: string;
  ctaService: string;
}

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', minHeight: '100vh', paddingTop: '72px' }}>

      {/* ── Back button ── */}
      <div className="service-back">
        <Link href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: 'var(--font-sans)', fontSize: '0.65rem',
          letterSpacing: '0.15em', textTransform: 'uppercase',
          fontWeight: 500, color: 'var(--accent-2)', textDecoration: 'none',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Terug
        </Link>
      </div>

      {/* ── Hero ── */}
      <div className="service-hero" style={{
        background: data.heroBg,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />
        <div style={{ position: 'relative', maxWidth: '720px' }}>
          <p className='eyebrow' style={{ color: 'var(--accent-3)', marginBottom: '1rem' }}>{data.label}</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
            fontWeight: 300, lineHeight: 1.15,
            color: 'var(--bg)', margin: '0 0 1.25rem',
            letterSpacing: '-0.02em',
          }}>
            {data.title}
          </h1>
          <p style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: '1.25rem', fontWeight: 300,
            color: 'rgba(246,216,204,0.75)', margin: 0, lineHeight: 1.5,
          }}>
            {data.heroSubtitle}
          </p>
        </div>
      </div>

      {/* ── Wat is het ── */}
      <section style={{
        borderBottom: '1px solid rgba(82,69,27,0.1)',
      }} className="about-grid section-pad">
        <div>
          <p className='eyebrow' style={{ marginBottom: '1rem' }}>Wat is het</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
            fontWeight: 300, lineHeight: 1.25,
            margin: '0 0 1.5rem', letterSpacing: '-0.01em',
          }}>
            {data.processTitle}
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '0.9375rem', lineHeight: 1.85,
            color: 'var(--accent-2)',
          }}>
            {data.intro}
          </p>
        </div>

        {/* Decorative placeholder */}
        <div style={{
          borderRadius: '10px', overflow: 'hidden',
          aspectRatio: '4/3',
          background: `
            radial-gradient(ellipse at 70% 30%, rgba(232,180,100,0.5) 0%, transparent 50%),
            radial-gradient(ellipse at 25% 75%, rgba(172,85,58,0.4) 0%, transparent 55%),
            linear-gradient(155deg, #c4985a 0%, #8a5c38 50%, #3d2410 100%)
          `,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(20,10,5,0.4) 100%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '1.5rem', left: '1.5rem',
            fontFamily: 'var(--font-script)', fontSize: '1rem',
            color: 'rgba(247,239,210,0.6)',
          }}>
            {data.label.toLowerCase()}
          </div>
        </div>
      </section>

      {/* ── Proces ── */}
      <section style={{
        borderBottom: '1px solid rgba(82,69,27,0.1)',
      }} className="section-pad">
        <p className='eyebrow' style={{ marginBottom: '0.75rem' }}>Het proces</p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
          fontWeight: 300, lineHeight: 1.25,
          margin: '0 0 3rem', letterSpacing: '-0.01em',
        }}>
          {data.processTitle}
        </h2>
        <div className="service-inner">
          {data.steps.map((step, i) => (
            <div key={step.number} style={{
              padding: '1.75rem',
              background: i % 2 === 0 ? 'rgba(82,69,27,0.04)' : 'rgba(246,216,204,0.3)',
              borderRadius: '8px',
              border: '1px solid rgba(82,69,27,0.08)',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '2rem',
                fontWeight: 500, color: 'var(--accent-4)',
                lineHeight: 1, marginBottom: '0.75rem',
              }}>
                {step.number}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.125rem',
                fontWeight: 500, color: 'var(--accent-1)',
                margin: '0 0 0.6rem',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.85rem',
                fontWeight: 300, lineHeight: 1.75,
                color: 'var(--accent-2)', margin: 0,
              }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Inbegrepen + Praktisch ── */}
      <section style={{
        borderBottom: '1px solid rgba(82,69,27,0.1)',
      }} className="about-grid section-pad">
        <div>
          <p className='eyebrow' style={{ marginBottom: '1rem' }}>Wat is inbegrepen</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {data.included.map(item => (
              <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent-4)', flexShrink: 0, marginTop: '2px', fontWeight: 500 }}>—</span>
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
                  fontWeight: 300, color: 'var(--ink)', lineHeight: 1.6,
                }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className='eyebrow' style={{ marginBottom: '1rem' }}>Praktisch</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {data.practical.map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
                  fontWeight: 500, color: 'var(--accent-2)',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  minWidth: '100px', paddingTop: '1px',
                }}>{item.label}</span>
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
                  fontWeight: 300, color: 'var(--ink)', lineHeight: 1.6,
                }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investering ── */}
      <section style={{ borderBottom: '1px solid rgba(82,69,27,0.1)' }} className="section-pad">
        <p className='eyebrow' style={{ marginBottom: '0.75rem' }}>Investering</p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
          fontWeight: 300, lineHeight: 1.25,
          margin: '0 0 2.5rem', letterSpacing: '-0.01em',
        }}>
          Transparante prijzen, geen verrassingen.
        </h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: data.pricingNote ? '1.5rem' : 0 }}>
          {data.pricing.map(tier => (
            <div key={tier.label} style={{
              background: 'var(--accent-1)', borderRadius: '8px',
              padding: '1.5rem 2rem', minWidth: '180px',
            }}>
              <p className='eyebrow' style={{ color: 'var(--accent-3)', marginBottom: '0.5rem' }}>{tier.label}</p>
              <p style={{
                fontFamily: 'var(--font-display)', fontSize: '2rem',
                fontWeight: 500, color: 'var(--bg)',
                margin: '0 0 0.2rem', lineHeight: 1,
              }}>{tier.price}</p>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.7rem',
                fontWeight: 300, color: 'rgba(246,216,204,0.65)', margin: 0,
              }}>{tier.note}</p>
            </div>
          ))}
        </div>
        {data.pricingNote && (
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.85rem',
            fontWeight: 300, color: 'var(--accent-5)', fontStyle: 'italic',
          }}>{data.pricingNote}</p>
        )}
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'var(--accent-4)',
        position: 'relative', overflow: 'hidden',
      }} className="cta-band">
        <div style={{ position: 'relative' }}>
          <p className='eyebrow' style={{ color: 'var(--accent-3)', marginBottom: '0.75rem' }}>
            Interesse?
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
            fontWeight: 300, color: 'var(--bg)',
            margin: 0, lineHeight: 1.2, letterSpacing: '-0.01em',
          }}>
            Het eerste gesprek is altijd vrijblijvend.
          </h2>
        </div>
        <Link
          href={`/?service=${encodeURIComponent(data.ctaService)}#contact`}
          className="btn-ghost-light"
          style={{
            flexShrink: 0,
            display: 'inline-flex', alignItems: 'center', gap: '0.65rem',
            background: 'none', border: '1px solid rgba(247,239,210,0.45)',
            color: 'var(--bg)', fontFamily: 'var(--font-sans)',
            fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '0.9rem 2rem', whiteSpace: 'nowrap', textDecoration: 'none',
          }}
        >
          Neem contact op
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </section>

    </div>
  );
}
