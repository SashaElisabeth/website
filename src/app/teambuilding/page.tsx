import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout';

const data: ServicePageData = {
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
    { label: 'Basis', price: '€ 850,-', note: 'excl. btw · t/m 12 personen' },
    { label: 'Extra deelnemer', price: '€ 30,-', note: 'excl. btw · per extra persoon' },
  ],
  pricingNote: 'Benieuwd wat dit voor jullie team kan betekenen? Vul het contactformulier in.',
  ctaService: 'Teambuilding',
  image: '/paint 1.jpeg',
};

export default function TeambuildingPage() {
  return <ServicePageLayout data={data} />;
}
