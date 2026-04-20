import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout';

const data: ServicePageData = {
  label: 'Teambuilding',
  title: 'Samen sterker door creatief werken.',
  heroSubtitle: 'Samenwerken wordt sterker wanneer er ruimte is voor inzicht, ervaring en verbinding. Binnen de teambuilding trainingen werk ik met coaching en beeldende werkvormen om zichtbaar te maken wat er speelt binnen een team en om daar beweging in te brengen.',
  heroBg: 'var(--accent-1)',
  intro: `Deze training is gericht op het versterken van onderling vertrouwen binnen het team. We werken aan veiligheid, openheid en het durven innemen van je plek.`,
  processTitle: 'Training - Vertrouwen',
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
    'Kennismakingsgesprek (1 uur) voorafgaand aan de training',
    'Volledige begeleiding tijdens de training',
    'Alle beeldende werkvormen en materialen',
    'Gezamenlijke reflectie na afloop',
    'Korte schriftelijke terugkoppeling indien gewenst',
  ],
  practical: [
    { label: 'Duur',      value: '1 dagdeel — uitbreiding naar een volledige dag is mogelijk' },
    { label: 'Locatie',   value: 'Op locatie naar keuze / eigen locatie' },
    { label: 'Groep',     value: 'Geschikt voor teams van 6 tot 13 personen' },
    { label: 'Reiskosten', value: 'Nader te bepalen' },
  ],
  pricing: [
    { label: 'Basis', price: '€ 850,-', note: 'incl. btw · t/m 13 personen' },
    { label: 'Extra deelnemer', price: '€ 30,-', note: 'incl. btw · per extra persoon' },
  ],
  pricingNote: 'Voor grotere groepen, meerdere dagdelen of specifieke wensen maak ik graag een voorstel op maat.',
  ctaService: 'Teambuilding',
  image: '/paint 1.jpeg',
};

export default function TeambuildingPage() {
  return <ServicePageLayout data={data} />;
}
