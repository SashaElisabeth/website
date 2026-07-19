import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

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

export interface Offering {
  title: string;
  body: string;
  quote?: string;
}

export interface ServicePageData {
  label: string;
  title: string;
  heroSubtitle: string;
  heroBg: string;
  aanbodIntro?: string;
  offerings: Offering[];
  aanbodFooter?: string;
  processTitleWerkwijze: string;
  werkwijzeIntro?: string[];
  steps: ProcessStep[];
  praktischIntro?: string;
  included: string[];
  includedUnderPraktisch?: boolean;
  practical: { label: string; value: string }[];
  investeringIntro?: string;
  pricing: PricingTier[];
  pricingNote?: string;
  ctaService: string;
  image: string;
}

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  const t = useTranslations('ServicePage');
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
          {t('back')}
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
          <p className='eyebrow' style={{ color: 'var(--accent-3)', marginBottom: '0.75rem' }}>{data.label}</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
            fontWeight: 300, lineHeight: 1.15,
            color: 'var(--bg)', margin: '0 0 0.85rem',
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

      {/* ── Aanbod ── */}
      <section style={{
        borderBottom: '1px solid rgba(109,76,58,0.1)',
      }} className="service-about-grid service-section-pad">
        <div>
          <p className='eyebrow' style={{ marginBottom: '1.5rem' }}>{t('aanbod')}</p>
          {data.aanbodIntro && (
            <p style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300,
              fontSize: '0.9375rem', lineHeight: 1.85,
              color: 'var(--accent-2)', margin: '0 0 1.5rem',
            }}>
              {data.aanbodIntro}
            </p>
          )}
          {data.offerings.map((offering, i) => (
            <div key={offering.title || i} style={{
              marginBottom: i < data.offerings.length - 1 ? '1.5rem' : '1.25rem',
            }}>
              {offering.title && (
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2vw, 1.75rem)',
                  fontWeight: 300, lineHeight: 1.25,
                  margin: '0 0 0.65rem', letterSpacing: '-0.01em',
                }}>
                  {offering.title}
                </h2>
              )}
              {offering.quote && (
                <div style={{
                  marginBottom: '0.85rem',
                  borderLeft: "2px solid var(--accent-3)", paddingLeft: "1.25rem",
                }}>
                  <p style={{
                    fontFamily: "var(--font-display)", fontStyle: "italic",
                    fontSize: "1rem", color: "var(--accent-2)",
                    lineHeight: 1.65, margin: 0,
                  }}>
                    {offering.quote}
                  </p>
                </div>
              )}
              <p style={{
                fontFamily: 'var(--font-sans)', fontWeight: 300,
                fontSize: '0.9375rem', lineHeight: 1.85,
                color: 'var(--accent-2)', margin: 0,
              }}>
                {offering.body}
              </p>
            </div>
          ))}
          {data.aanbodFooter && (
            <p style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300, fontStyle: 'italic',
              fontSize: '0.875rem', lineHeight: 1.8,
              color: 'var(--muted)', margin: 0,
            }}>
              {data.aanbodFooter}
            </p>
          )}
        </div>

        {/* Photo */}
        <div style={{ borderRadius: '10px', overflow: 'hidden', aspectRatio: '4/3' }}>
          <img
            src={data.image}
            alt={data.label}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* ── Werkwijze ── */}
      <section style={{
        borderBottom: '1px solid rgba(109,76,58,0.1)',
      }} className="service-section-pad">
        <p className='eyebrow' style={{ marginBottom: '0.75rem' }}>{t('werkwijze')}</p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
          fontWeight: 300, lineHeight: 1.25,
          margin: data.werkwijzeIntro?.length ? '0 0 1rem' : '0 0 2rem', letterSpacing: '-0.01em',
        }}>
          {data.processTitleWerkwijze}
        </h2>
        {data.werkwijzeIntro && data.werkwijzeIntro.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {data.werkwijzeIntro.map(paragraph => (
              <p key={paragraph} style={{
                fontFamily: 'var(--font-sans)', fontWeight: 300,
                fontSize: '0.9375rem', lineHeight: 1.85,
                color: 'var(--accent-2)', margin: 0, maxWidth: '700px',
              }}>
                {paragraph}
              </p>
            ))}
          </div>
        )}
        <div className={`service-inner${data.steps.length === 4 ? ' service-inner-4' : ''}`}>
          {data.steps.map((step, i) => (
            <div key={step.number} style={{
              padding: '1.25rem',
              background: i % 2 === 0 ? 'rgba(109,76,58,0.04)' : 'rgba(246,216,204,0.3)',
              borderRadius: '8px',
              border: '1px solid rgba(109,76,58,0.08)',
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

      {/* ── Praktisch ── */}
      <section style={{
        borderBottom: '1px solid rgba(109,76,58,0.1)',
      }} className="service-section-pad">
        <p className='eyebrow' style={{ marginBottom: '1rem' }}>{t('praktisch')}</p>
        {data.praktischIntro && (
          <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '0.9375rem', lineHeight: 1.85,
            color: 'var(--accent-2)', margin: '0 0 1.5rem', maxWidth: '520px',
          }}>
            {data.praktischIntro}
          </p>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '520px' }}>
          {data.practical.map(item => (
            <div key={item.label} style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
                fontWeight: 500, color: 'var(--accent-2)',
                textTransform: 'uppercase', letterSpacing: '0.1em',
                minWidth: '110px', paddingTop: '1px',
              }}>{item.label}</span>
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
                fontWeight: 300, color: 'var(--ink)', lineHeight: 1.6,
              }}>{item.value}</span>
            </div>
          ))}
        </div>
        {data.includedUnderPraktisch && data.included.length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <p className='eyebrow' style={{ marginBottom: '0.75rem' }}>{t('inbegrepen')}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '520px' }}>
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
        )}
      </section>

      {/* ── Investering ── */}
      <section style={{ borderBottom: '1px solid rgba(109,76,58,0.1)' }} className="service-section-pad">
        <p className='eyebrow' style={{ marginBottom: '0.75rem' }}>{t('investering')}</p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
          fontWeight: 300, lineHeight: 1.25,
          margin: '0 0 1.5rem', letterSpacing: '-0.01em',
        }}>
          {t('investeringTitle')}
        </h2>
        {data.investeringIntro && (
          <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '0.9375rem', lineHeight: 1.85,
            color: 'var(--accent-2)', margin: '0 0 1.5rem', maxWidth: '640px',
          }}>
            {data.investeringIntro}
          </p>
        )}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {data.pricing.map(tier => (
            <div key={tier.label} style={{
              background: 'var(--accent-1)', borderRadius: '8px',
              padding: '1.25rem 1.5rem', minWidth: '180px',
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
        {!data.includedUnderPraktisch && data.included.length > 0 && (
          <div style={{ marginBottom: data.pricingNote ? '1.25rem' : 0 }}>
            <p className='eyebrow' style={{ marginBottom: '0.75rem' }}>{t('inbegrepen')}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
        )}
        {data.pricingNote && (
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.85rem',
            fontWeight: 300, color: 'var(--muted)', fontStyle: 'italic', margin: 0,
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
            {t('interesse')}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
            fontWeight: 300, color: 'var(--bg)',
            margin: 0, lineHeight: 1.2, letterSpacing: '-0.01em',
          }}>
            {t('ctaTitle')}
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
          {t('ctaButton')}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </section>

    </div>
  );
}
