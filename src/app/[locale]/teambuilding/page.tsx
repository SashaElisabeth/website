import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout';
import { buildAlternates, SITE_URL } from '@/lib/seo';

const dataNl: ServicePageData = {
  label: 'Teambuilding',
  title: 'Samen sterker door creatief werken.',
  heroSubtitle: 'Samenwerken wordt sterker wanneer er ruimte is voor inzicht, ervaring en verbinding. Binnen de teambuilding trainingen werk ik met coaching en beeldende werkvormen om zichtbaar te maken wat er speelt binnen een team en om daar beweging in te brengen.',
  heroBg: 'var(--accent-1)',
  offerings: [
    {
      title: 'Training – Vertrouwen',
      quote: '"Vergroot zelfvertrouwen en onderlinge samenwerking binnen het team."',
      body: 'Deze training is gericht op het versterken van onderling vertrouwen binnen het team. We werken aan veiligheid, openheid en het durven innemen van je plek.',
    },
    {
      title: 'Training – Communicatie',
      quote: '"Help je medewerkers hun communicatiestijl te begrijpen, zodat de samenwerking en teamdynamiek verbeteren."',
      body: 'Deze training is gericht op het zichtbaar maken van communicatiepatronen en interacties binnen het team. We onderzoeken hoe gedragingen en patronen doorwerken, zodat medewerkers effectiever kunnen afstemmen en samenwerken.',
    },
  ],
  aanbodFooter: 'Voor trajecten, grotere groepen of specifieke vragen maak ik graag een voorstel op maat dat aansluit bij jullie organisatie en doelen.',
  processTitleWerkwijze: 'Van kennismaking tot training.',
  werkwijzeIntro: [
    'We starten met een online kennismakingsgesprek waarin we de wensen, doelen en context van het team bespreken.',
    'Tijdens de training werken we met een combinatie van psycho educatie, coaching en beeldende werkvormen. Dit helpt om patronen en dynamieken binnen het team zichtbaar en bespreekbaar te maken, op een manier die verder gaat dan alleen praten.',
  ],
  steps: [
    {
      number: '01',
      title: 'Kennismakingsgesprek',
      body: 'We bespreken de vraag van het team, de context en de doelstellingen. Wat speelt er? Wat wil je bereiken? Op basis daarvan stem ik de training af op jullie situatie.',
    },
    {
      number: '02',
      title: 'De training',
      body: "Een dagdeel waarbij het team werkt met beeldende materialen. Via gerichte opdrachten komen thema's als communicatie, vertrouwen en samenwerking op een ervaringsgerichte manier aan bod.",
    },
    {
      number: '03',
      title: 'Reflectie & terugkoppeling',
      body: 'Na het beeldend werken reflecteren we gezamenlijk op wat er is gebeurd. Wat zag je? Wat verraste je? Welke parallellen zijn er met de dagelijkse samenwerking? Optioneel: een schriftelijke terugkoppeling.',
    },
  ],
  included: [
    'Kennismakingsgesprek (1 uur)',
    'Begeleiding van de training',
    'Gebruik van beeldende werkvormen en materialen',
    'Evt. evaluatie',
  ],
  practical: [
    { label: 'Duur',       value: '1 dagdeel (uitbreiding naar hele dag mogelijk)' },
    { label: 'Locatie',    value: 'Op jullie eigen locatie' },
    { label: 'Reiskosten', value: '€ 0,30 / km' },
  ],
  pricing: [
    { label: 'Basis', price: '€ 850,-', note: 'Exclusief btw · t/m 12 personen' },
    { label: 'Extra deelnemer', price: '€ 30,-', note: 'Exclusief btw · per extra persoon' },
  ],
  pricingNote: 'Benieuwd wat dit voor jullie team kan betekenen? Vul het contactformulier in.',
  ctaService: 'Teambuilding',
  image: '/paint 1.jpeg',
};

const dataEn: ServicePageData = {
  label: 'Teambuilding',
  title: 'Building stronger teams through creative practice.',
  heroSubtitle: 'Collaboration thrives when there is space for insight, shared experiences, and genuine connection. Through my team-building programmes, I combine coaching with creative methods to uncover what is happening within a team, creating awareness and helping teams move forward together.',
  heroBg: 'var(--accent-1)',
  offerings: [
    {
      title: 'Training – Trust',
      quote: '"Build trust, strengthen collaboration, and create a more connected team."',
      body: 'This training focuses on strengthening trust within the team. Together, we create a safe environment where openness is encouraged and team members feel confident to contribute, take ownership, and support one another.',
    },
    {
      title: 'Training – Communication',
      quote: '"Help your team understand communication styles to improve collaboration and team dynamics."',
      body: 'This training focuses on making communication patterns and interactions within the team visible. Together, we explore how behaviours influence one another, enabling team members to communicate more effectively, align their efforts, and work together with greater confidence.',
    },
  ],
  aanbodFooter: "For trajectories, larger groups or specific questions, I'm happy to put together a tailored proposal that fits your organisation and goals.",
  processTitleWerkwijze: 'From introduction to training.',
  werkwijzeIntro: [
    "We start with an online introductory conversation where we discuss the team's needs, goals and context.",
    'During the training I work with a combination of psychoeducation, coaching and creative methods to help uncover patterns and team dynamics. This creates space for meaningful conversations and insights that go beyond words alone.',
  ],
  steps: [
    {
      number: '01',
      title: 'Introductory conversation',
      body: "Together, we discuss your team's needs, the context, and your objectives. What's happening within the team? What would you like to achieve? Based on this conversation, I tailor the training to your specific situation.",
    },
    {
      number: '02',
      title: 'The training',
      body: 'During this half-day training, your team works with creative materials through carefully guided exercises. Themes such as communication, trust, and collaboration are explored in an experiential way, going beyond discussion alone.',
    },
    {
      number: '03',
      title: 'Reflection & feedback',
      body: 'After the creative work, we reflect together on the experience. What did you notice? What surprised you? What parallels can you draw with your day-to-day collaboration? A written evaluation can be provided on request.',
    },
  ],
  included: [
    'Introductory conversation (1 hour)',
    'Guidance during the training',
    'Use of creative methods and materials',
    'Optional evaluation',
  ],
  practical: [
    { label: 'Duration',     value: 'Half-day training (full-day option available)' },
    { label: 'Location',     value: "At your organisation's location" },
    { label: 'Travel costs', value: '€0.30 per kilometre' },
  ],
  pricing: [
    { label: 'Standard training', price: '€ 850,-', note: 'Excluding VAT · up to 12 participants' },
    { label: 'Additional participant', price: '€ 30,-', note: 'Excluding VAT · per extra person' },
  ],
  pricingNote: "Curious about what this training could mean for your team? Fill out the contact form, and I'll be happy to discuss the possibilities with you.",
  ctaService: 'Teambuilding',
  image: '/paint 1.jpeg',
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.teambuilding' });
  const alternates = buildAlternates('teambuilding', locale);
  const ogImage = `${SITE_URL}${encodeURI('/paint 1.jpeg')}`;

  return {
    title: t('title'),
    description: t('description'),
    alternates,
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: alternates.canonical,
      siteName: 'Sasha Elisabeth',
      images: [ogImage],
      locale: locale === 'en' ? 'en_US' : 'nl_NL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [ogImage],
    },
  };
}

export default async function TeambuildingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicePageLayout data={locale === 'en' ? dataEn : dataNl} />;
}
