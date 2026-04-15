import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout';

const data: ServicePageData = {
  label: 'Individuele Coaching',
  title: 'Ruimte voor jouw verhaal.',
  heroSubtitle: 'Een persoonlijk traject voor mensen die willen groeien, vastlopen of gewoon beter willen begrijpen wat hen drijft.',
  heroBg: 'var(--accent-2)',
  processTitle: 'Een traject dat bij jou past.',
  intro: `Individuele coaching bij mij combineert gesprek met beeldende werkvormen. Soms is het makkelijker om iets te tekenen, te vormen of te schilderen dan om het onder woorden te brengen. Dat beeldende werken is geen doel op zich — het is een middel om dingen zichtbaar te maken die anders verborgen blijven. We werken op jouw tempo, aan jouw thema, naar wat jij nodig hebt.`,
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
  included: [
    'Vrijblijvend kennismakingsgesprek (30 min)',
    'Intake en opstellen persoonlijk plan',
    'Begeleiding tijdens alle sessies',
    'Persoonlijke afstemming op jouw hulpvraag en proces',
    'Werken met beeldende werkvormen en reflectie',
    'Tussentijdse evaluatie en bijsturing van het traject',
  ],
  practical: [
    { label: 'Duur',       value: '± 45 minuten per sessie' },
    { label: 'Locatie',    value: 'Op eigen locatie' },
    { label: 'Frequentie', value: 'Wekelijks of tweewekelijks, in overleg' },
    { label: 'Start',      value: 'Na een vrijblijvend kennismakingsgesprek' },
  ],
  pricing: [
    { label: '5 sessies',  price: '€ 450,-', note: 'incl. btw' },
    { label: '7 sessies',  price: '€ 630,-', note: 'incl. btw' },
    { label: '10 sessies', price: '€ 900,-', note: 'incl. btw' },
  ],
  pricingNote: 'Soms past een standaardtraject niet precies bij jouw vraag. Ik maak ook trajecten op maat, afgestemd op jouw situatie of de vraag vanuit een werkgever.',
  ctaService: 'Individuele Coaching',
};

export default function IndividueleCoachingPage() {
  return <ServicePageLayout data={data} />;
}
