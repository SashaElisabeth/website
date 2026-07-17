import Link from 'next/link';
import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout';

// Page temporarily disabled while the content is finalized.
const COMING_SOON: boolean = true;

const data: ServicePageData = {
  label: 'Vrouwen op de Werkvloer',
  title: 'Jouw kracht zichtbaar maken.',
  heroSubtitle: 'Veel vrouwen bewegen zich op de werkvloer tussen wat er van hen verwacht wordt en wat zij zelf nodig hebben. Dit kan invloed hebben op hoe zij hun positie innemen, communiceren en grenzen aangeven. Binnen dit aanbod is er ruimte om stil te staan bij wat er speelt, zichtbaar en voelbaar, en te werken aan stevigheid, inzicht en beweging.',
  heroBg: 'var(--accent-1)',
  aanbodIntro: 'Dit aanbod is volledig op maat. Afhankelijk van de vraag en context kan dit de vorm aannemen van een eenmalige training, meerdere sessies of een verdiepend traject.',
  offerings: [
    {
      title: '',
      body: "De invulling wordt afgestemd op de organisatie en de groep, met aandacht voor thema's zoals positie, communicatie, grenzen en onderliggende patronen.",
    },
  ],
  processTitleWerkwijze: 'Van kennismaking tot maatwerk.',
  steps: [
    {
      number: '01',
      title: 'Kennismakingsgesprek',
      body: 'We starten met een kennismakingsgesprek waarin we de wensen, doelen en context bespreken. Op basis daarvan bepalen we samen de richting.',
    },
    {
      number: '02',
      title: 'Passend programma op maat',
      body: 'Vanuit het gesprek ontwikkel ik een passende invulling, afgestemd op de organisatie en de groep — als eenmalige training, sessiereeks of verdiepend traject.',
    },
    {
      number: '03',
      title: 'De sessie(s)',
      body: 'Tijdens de sessie(s) werk ik met coaching en beeldende werkvormen, waardoor zichtbaar wordt wat er speelt en waar beweging mogelijk is. Door te werken in kleine groepen is er ruimte voor persoonlijke aandacht en diepgang.',
    },
    {
      number: '04',
      title: 'Afsluiting & terugkoppeling',
      body: 'We sluiten bewust af en blikken vooruit. Indien gewenst verzorg ik een korte terugkoppeling.',
    },
  ],
  praktischIntro: 'Alles wat je nodig hebt voor persoonlijke groei en succes op de werkvloer.',
  practical: [
    { label: 'Vorm',          value: 'Workshop, sessiereeks of traject (op maat)' },
    { label: 'Locatie',       value: 'Op locatie bij de organisatie' },
    { label: 'Groepsgrootte', value: 'Kleinschalig (± 6–10 deelnemers)' },
    { label: 'Reiskosten', value: '€ 0,30 / km' },
  ],
  investeringIntro: 'Omdat elk aanbod op maat wordt samengesteld, wordt de investering afgestemd op de vraag, duur en groepsgrootte.',
  pricing: [
    { label: 'Per dagdeel', price: 'Vanaf € 950,-', note: 'excl. btw' },
  ],
  included: [
    'Kennismakingsgesprek (1 uur)',
    'Ontwikkeling van een passend programma',
    'Begeleiding van de sessie(s)',
    'Gebruik van beeldende werkvormen en materialen',
    'Korte terugkoppeling indien gewenst',
  ],
  pricingNote: 'Benieuwd wat dit voor jullie organisatie kan betekenen? Vul het contactformulier in.',
  ctaService: 'Vrouwen op de Werkvloer',
  image: '/paint 3.jpeg',
};

export default function VrouwenOpDeWerkvloerPage() {
  if (COMING_SOON) {
    return (
      <div style={{ background: 'var(--bg)', color: 'var(--ink)', minHeight: '100vh', paddingTop: '72px', display: 'flex', flexDirection: 'column' }}>
        <div className="service-back">
          <Link href="/#aanbod" style={{
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
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 1.5rem 6rem' }}>
          <div style={{ maxWidth: '540px' }}>
            <p className="eyebrow" style={{ color: 'var(--accent-2)', marginBottom: '1rem' }}>{data.label}</p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.02em',
              color: 'var(--accent-1)', margin: '0 0 1rem',
            }}>
              Binnenkort beschikbaar
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300,
              fontSize: '1rem', lineHeight: 1.8,
              color: 'var(--accent-2)', margin: '0 0 2rem',
            }}>
              Wil je nu al meer weten? Neem gerust contact op.
            </p>
            <Link href="/#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.65rem',
              background: 'var(--accent-4)', color: 'var(--bg)',
              fontFamily: 'var(--font-sans)', fontSize: '0.6rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
            }}>
              Neem contact op
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <ServicePageLayout data={data} />;
}
