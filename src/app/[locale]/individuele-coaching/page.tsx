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
    { label: '5 sessies',  price: '€ 450,-',   note: 'excl. btw · € 90 per sessie' },
    { label: '7 sessies',  price: '€ 612,50',  note: 'excl. btw · € 87,50 per sessie' },
    { label: '10 sessies', price: '€ 850,-',   note: 'excl. btw · € 85 per sessie' },
  ],
  ctaService: 'Individuele Coaching',
  image: '/paint 2.jpeg',
};

const dataEn: ServicePageData = {
  label: 'Individual Coaching',
  title: 'Room for your story.',
  heroSubtitle: "Depth and change become stronger when there's room for personal reflection, experience and growth. This coaching suits you as an individual, but also employers who want to give an employee extra support in personal development, resilience or communication. Coaching and creative methods make what's going on clear, and bring movement to your process, or that of the employee.",
  heroBg: 'var(--accent-2)',
  aanbodIntro: "I work with trajectories so there's room for real depth and lasting change.",
  offerings: [
    {
      title: 'Trajectory – 5 sessions',
      quote: '"Room for real depth and lasting change."',
      body: 'A compact trajectory of five sessions in which we work purposefully on your personal goals. We explore which patterns keep recurring and, through coaching and creative methods, take concrete steps towards growth and change.',
    },
    {
      title: 'Trajectory – 7 sessions',
      quote: '"Deeper insight and strengthening of personal skills."',
      body: "Seven sessions with extra room for reflection and depth, tailored to your pace and question. We spend more time on what's happening beneath the surface, and strengthen the skills you need to handle situations and emotions differently.",
    },
    {
      title: 'Trajectory – 10 sessions',
      quote: '"Realise lasting change and growth in your own way."',
      body: "An extensive trajectory of ten sessions for anyone who really wants to go deep. We take the time to break through stuck patterns and anchor new ways of thinking and doing, so the change lasts and you can keep building on it long-term.",
    },
  ],
  aanbodFooter: "For tailored trajectories, specific questions or trajectories through an employer, I'm happy to put together a proposal that fits the personal situation and goals.",
  processTitleWerkwijze: 'A trajectory that fits you.',
  steps: [
    {
      number: '01',
      title: 'Introductory conversation',
      body: "A no-obligation conversation of 30 minutes. We explore your question and see if there's a click. Only once that's the case do we start.",
    },
    {
      number: '02',
      title: 'Intake & personal plan',
      body: "In the first session we go deeper into your situation. Together we draw up a personal plan: what do you want to achieve, which methods suit you?",
    },
    {
      number: '03',
      title: 'The trajectory',
      body: 'Regular sessions of ± 45 minutes, weekly or every other week. We work through conversation and creative methods on your theme — practical, personal and at your own pace.',
    },
    {
      number: '04',
      title: 'Evaluation & closing',
      body: "Halfway through and at the end of the trajectory we evaluate. What has changed? What will you take with you? We close deliberately and look ahead.",
    },
  ],
  praktischIntro: 'Everything you need for a tailored trajectory and lasting growth.',
  practical: [
    { label: 'Duration',    value: '± 45 minutes per session' },
    { label: 'Location',    value: 'At your own location' },
    { label: 'Frequency',   value: 'Weekly or every other week, by agreement' },
    { label: 'Travel costs', value: '€ 0.30 / km' },
  ],
  included: [
    'Guidance during the sessions',
    'Personal alignment with your question and process',
    'Working with creative methods and reflection',
    'Use of materials',
    'Optional: interim evaluation and adjustment of the trajectory, and/or a final evaluation',
  ],
  includedUnderPraktisch: true,
  pricing: [
    { label: '5 sessions',  price: '€ 450,-',   note: 'excl. VAT · € 90 per session' },
    { label: '7 sessions',  price: '€ 612.50',  note: 'excl. VAT · € 87.50 per session' },
    { label: '10 sessions', price: '€ 850,-',   note: 'excl. VAT · € 85 per session' },
  ],
  ctaService: 'Individuele Coaching',
  image: '/paint 2.jpeg',
};

export default async function IndividueleCoachingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicePageLayout data={locale === 'en' ? dataEn : dataNl} />;
}
