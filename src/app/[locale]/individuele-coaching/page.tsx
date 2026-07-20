import { setRequestLocale } from 'next-intl/server';
import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout';

const dataNl: ServicePageData = {
  label: 'Individuele Coaching',
  title: 'Ruimte voor jouw verhaal.',
  heroSubtitle: 'Verdieping en verandering worden sterker wanneer er ruimte is voor persoonlijke reflectie, ervaring en groei. Deze coaching is geschikt voor jou als individu, maar ook voor werkgevers die een medewerker extra willen ondersteunen in persoonlijke ontwikkeling, veerkracht of communicatie. Met coaching en beeldende werkvormen maken we inzichtelijk wat speelt en brengen we beweging in jouw proces of dat van de medewerker.',
  heroBg: 'var(--accent-2)',
  aanbodIntro: 'Ik werk met trajecten zodat er ruimte is voor echte verdieping en duurzame verandering.',
  offerings: [
    {
      title: 'Traject – 5 sessies',
      quote: '"Ruimte voor echte verdieping en duurzame verandering."',
      body: 'Een compact traject van vijf sessies waarin we gericht werken aan jouw persoonlijke doelen. We onderzoeken welke patronen steeds terugkeren en zetten met coaching en beeldende werkvormen concrete stappen richting groei en verandering.',
    },
    {
      title: 'Traject – 7 sessies',
      quote: '"Dieper inzicht en versterking van persoonlijke vaardigheden."',
      body: 'Zeven sessies met extra ruimte voor reflectie en verdieping, afgestemd op jouw tempo en hulpvraag. We staan langer stil bij wat er onder de oppervlakte speelt en versterken de vaardigheden die je nodig hebt om anders met situaties en emoties om te gaan.',
    },
    {
      title: 'Traject – 10 sessies',
      quote: '"Realiseer duurzame verandering en groei op jouw manier."',
      body: 'Een uitgebreid traject van tien sessies voor wie echt de diepte in wil. We nemen de tijd om vastzittende patronen te doorbreken en nieuwe manieren van denken en doen te verankeren, zodat de verandering blijvend is en je er ook op langere termijn op kunt bouwen.',
    },
  ],
  aanbodFooter: 'Voor trajecten op maat, specifieke hulpvragen of trajecten via een werkgever maak ik graag een voorstel dat aansluit bij de persoonlijke situatie en doelen.',
  processTitleWerkwijze: 'Een traject dat bij jou past.',
  steps: [
    {
      number: '01',
      title: 'Kennismakingsgesprek',
      body: 'Een vrijblijvend gesprek van 30 minuten. We verkennen jouw hulpvraag en kijken of er een klik is. Pas als dat zo is, starten we.',
    },
    {
      number: '02',
      title: 'Intake & persoonlijk plan',
      body: 'In de eerste sessie gaan we dieper in op jouw situatie. We stellen samen een persoonlijk plan op: wat wil je bereiken, welke werkvormen passen bij jou?',
    },
    {
      number: '03',
      title: 'Het traject',
      body: 'Regelmatige sessies van ± 45 minuten, wekelijks of tweewekelijks. We werken via gesprek en beeldende werkvormen aan jouw thema — praktisch, persoonlijk en op jouw tempo.',
    },
    {
      number: '04',
      title: 'Evaluatie & afsluiting',
      body: 'Halverwege en aan het einde van het traject evalueren we. Wat is er veranderd? Wat neem je mee? We sluiten bewust af en kijken vooruit.',
    },
  ],
  praktischIntro: 'Alles wat je nodig hebt voor een traject op maat en blijvende groei.',
  practical: [
    { label: 'Duur',       value: '± 45 minuten per sessie' },
    { label: 'Locatie',    value: 'Op eigen locatie' },
    { label: 'Frequentie', value: 'Wekelijks of tweewekelijks, in overleg' },
    { label: 'Reiskosten', value: '€ 0,30 / km' },
  ],
  included: [
    'Begeleiding tijdens de sessies',
    'Persoonlijke afstemming op jouw hulpvraag en proces',
    'Werken met beeldende werkvormen en reflectie',
    'Materiaalgebruik',
    'Eventueel: tussentijdse evaluatie en bijsturing van het traject en/of eindevaluatie',
  ],
  includedUnderPraktisch: true,
  pricing: [
    { label: '5 sessies',  price: '€ 450,-',   note: 'Exclusief btw · € 90 per sessie' },
    { label: '7 sessies',  price: '€ 612,50',  note: 'Exclusief btw · € 87,50 per sessie' },
    { label: '10 sessies', price: '€ 850,-',   note: 'Exclusief btw · € 85 per sessie' },
  ],
  ctaService: 'Individuele Coaching',
  image: '/paint 2.jpeg',
};

const dataEn: ServicePageData = {
  label: 'Individual Coaching',
  title: 'Space for your story.',
  heroSubtitle: "Personal growth begins with the space to reflect, experience, and develop. This coaching is available for individuals as well as employers who want to support an employee in their personal development, resilience, or communication skills. Through coaching and creative methods, we explore what is happening beneath the surface, gain deeper insight, and create meaningful progress in your personal journey or that of your employee.",
  heroBg: 'var(--accent-2)',
  aanbodIntro: 'I offer coaching programmes that provide the time and space for meaningful reflection, personal growth, and lasting change.',
  offerings: [
    {
      title: '5-Session Coaching Programme',
      quote: '"Space for meaningful reflection and lasting change."',
      body: 'A focused coaching programme of five sessions designed to help you work towards your personal goals. Together, we explore recurring patterns and use coaching and creative methods to take practical steps towards growth and change.',
    },
    {
      title: '7-Session Coaching Programme',
      quote: '"Gain deeper insight and strengthen your personal skills."',
      body: "Seven coaching sessions with additional time for reflection and deeper exploration, tailored to your pace and individual needs. Together, we look beneath the surface and strengthen the skills you need to navigate situations and emotions with greater confidence.",
    },
    {
      title: '10-Session Coaching Programme',
      quote: '"Create lasting change in a way that works for you."',
      body: 'A comprehensive coaching programme of ten sessions for those who want to explore their personal development in greater depth. We take the time to break through recurring patterns and develop new ways of thinking and responding, creating change that lasts.',
    },
  ],
  aanbodFooter: "For tailored coaching programmes, specific support needs, or coaching through an employer, I'd be happy to create a proposal that fits your personal situation and goals.",
  processTitleWerkwijze: 'A coaching programme tailored to you.',
  steps: [
    {
      number: '01',
      title: 'Introductory conversation',
      body: "A free, no-obligation conversation of 30 minutes. We'll explore your support needs and see if we're the right fit. If it feels right, we'll continue together.",
    },
    {
      number: '02',
      title: 'Intake & personal plan',
      body: "During our first session, we'll take a closer look at your situation. Together, we'll create a personal plan based on your goals and the creative methods that best suit your needs.",
    },
    {
      number: '03',
      title: 'Your coaching programme',
      body: 'Regular sessions of approximately 45 minutes held weekly or every two weeks. Through conversation and creative methods, we\'ll work on your personal goals in a way that is practical, personal, and tailored to your pace.',
    },
    {
      number: '04',
      title: 'Evaluation & completion',
      body: "Halfway through and at the end of the programme, we'll take time to reflect on your progress. What has changed? What have you learned? We bring the programme to a thoughtful close and look ahead to the future.",
    },
  ],
  praktischIntro: 'Everything you need for a coaching programme tailored to you.',
  practical: [
    { label: 'Duration',    value: 'Approximately 45 minutes per session' },
    { label: 'Location',    value: 'At your preferred location' },
    { label: 'Frequency',   value: 'Weekly or biweekly, depending on your needs' },
    { label: 'Travel costs', value: '€0.30 per kilometre' },
  ],
  included: [
    'Guidance throughout your coaching sessions',
    'A personalised approach tailored to your goals and personal process',
    'Coaching through creative methods',
    'All required materials',
    'Optional: mid-programme review and adjustments, as well as a final evaluation',
  ],
  includedUnderPraktisch: true,
  pricing: [
    { label: '5 sessions',  price: '€ 450,-',   note: 'Excluding VAT · € 90 per session' },
    { label: '7 sessions',  price: '€ 612.50',  note: 'Excluding VAT · € 87.50 per session' },
    { label: '10 sessions', price: '€ 850,-',   note: 'Excluding VAT · € 85 per session' },
  ],
  ctaService: 'Individuele Coaching',
  image: '/paint 2.jpeg',
};

export default async function IndividueleCoachingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicePageLayout data={locale === 'en' ? dataEn : dataNl} />;
}
