import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout';

const data: ServicePageData = {
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

export default function IndividueleCoachingPage() {
  return <ServicePageLayout data={data} />;
}
