import { Link } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout';

// Page temporarily disabled while the content is finalized.
const COMING_SOON: boolean = true;

const dataNl: ServicePageData = {
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

const dataEn: ServicePageData = {
  label: 'Women in the Workplace',
  title: 'Making your strength visible.',
  heroSubtitle: "Many women navigate the workplace between what's expected of them and what they themselves need. This can affect how they take up their position, communicate and set boundaries. Within this offer there's room to pause on what's going on, visibly and tangibly, and to work on stability, insight and movement.",
  heroBg: 'var(--accent-1)',
  aanbodIntro: 'This offer is entirely tailored. Depending on the question and context, this can take the form of a one-off training, several sessions, or a deeper trajectory.',
  offerings: [
    {
      title: '',
      body: 'The programme is tailored to the organisation and the group, with attention to themes such as position, communication, boundaries and underlying patterns.',
    },
  ],
  processTitleWerkwijze: 'From introduction to tailored programme.',
  steps: [
    {
      number: '01',
      title: 'Introductory conversation',
      body: "We start with an introductory conversation where we discuss wishes, goals and context. Based on that, we determine the direction together.",
    },
    {
      number: '02',
      title: 'A tailored programme',
      body: 'From the conversation I develop a fitting programme, tailored to the organisation and the group — as a one-off training, a series of sessions, or a deeper trajectory.',
    },
    {
      number: '03',
      title: 'The session(s)',
      body: "During the session(s) I use coaching and creative methods, making visible what's going on and where movement is possible. Working in small groups leaves room for personal attention and depth.",
    },
    {
      number: '04',
      title: 'Closing & feedback',
      body: 'We close deliberately and look ahead. A short written summary can be provided if desired.',
    },
  ],
  praktischIntro: 'Everything you need for personal growth and success in the workplace.',
  practical: [
    { label: 'Format',        value: 'Workshop, series of sessions, or trajectory (tailored)' },
    { label: 'Location',      value: "At the organisation's location" },
    { label: 'Group size',    value: 'Small-scale (± 6–10 participants)' },
    { label: 'Travel costs',  value: '€ 0.30 / km' },
  ],
  investeringIntro: "Because every offer is put together on a tailored basis, the investment is matched to the question, duration and group size.",
  pricing: [
    { label: 'Per half-day', price: 'From € 950,-', note: 'excl. VAT' },
  ],
  included: [
    'Introductory conversation (1 hour)',
    'Development of a tailored programme',
    'Guidance during the session(s)',
    'Use of creative methods and materials',
    'Short feedback summary if desired',
  ],
  pricingNote: 'Curious what this could mean for your organisation? Fill in the contact form.',
  ctaService: 'Vrouwen op de Werkvloer',
  image: '/paint 3.jpeg',
};

export default async function VrouwenOpDeWerkvloerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const data = locale === 'en' ? dataEn : dataNl;

  if (COMING_SOON) {
    const t = await getTranslations('ServicePage');
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
            {t('back')}
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
              {t('comingSoonTitle')}
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300,
              fontSize: '1rem', lineHeight: 1.8,
              color: 'var(--accent-2)', margin: '0 0 2rem',
            }}>
              {t('comingSoonBody')}
            </p>
            <Link href="/#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.65rem',
              background: 'var(--accent-4)', color: 'var(--bg)',
              fontFamily: 'var(--font-sans)', fontSize: '0.6rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
            }}>
              {t('ctaButton')}
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
