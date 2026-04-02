import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout';

const data: ServicePageData = {
  label: 'Vrouwen op de Werkvloer',
  title: 'Jouw kracht zichtbaar maken.',
  heroSubtitle: 'Een groepsprogramma voor vrouwen die professioneel en persoonlijk willen groeien — in een veilige, creatieve omgeving.',
  heroBg: 'var(--accent-1)',
  processTitle: 'Sterker staan, zonder jezelf te verliezen.',
  intro: `Dit programma is voor vrouwen die merken dat ze zichzelf klein houden op het werk, moeite hebben met grenzen stellen, of gewoon meer uit zichzelf willen halen. In een kleine groep werken we via coaching en beeldende werkvormen aan zelfvertrouwen, zichtbaarheid en veerkracht. Samen, maar ook heel persoonlijk.`,
  processTitle: 'Zes bijeenkomsten, één groep.',
  steps: [
    {
      number: '01',
      title: 'Intake & kennismaking',
      body: 'Voor de start is er een korte individuele intake. We bespreken jouw persoonlijke thema en verwachtingen. Daarna is er een gezamenlijke kennismaking met de groep.',
    },
    {
      number: '02',
      title: 'De bijeenkomsten',
      body: 'Zes sessies van twee uur, verspreid over enkele weken. Elke bijeenkomst heeft een eigen thema — zoals zichtbaarheid, grenzen, of innerlijke criticus — uitgewerkt via coaching en beeldend werken.',
    },
    {
      number: '03',
      title: 'Persoonlijk proces',
      body: 'Naast het groepswerk werkt elke deelneemster aan haar eigen thema. Wat wil jij veranderen, versterken of loslaten? Je krijgt ruimte voor jouw eigen verhaal.',
    },
    {
      number: '04',
      title: 'Afsluiting',
      body: 'In de laatste bijeenkomst staan we stil bij de groei die iedereen heeft doorgemaakt. We sluiten bewust af en blikken vooruit: wat neem je mee naar de werkvloer?',
    },
  ],
  included: [
    'Individuele intake voor de start',
    'Zes groepsbijeenkomsten van 2 uur',
    'Begeleiding via coaching en beeldende werkvormen',
    'Materialen voor alle bijeenkomsten',
    'Persoonlijke aandacht binnen de groep',
    'Afsluiting met vooruitblik',
  ],
  practical: [
    { label: 'Duur',      value: '6 bijeenkomsten van 2 uur' },
    { label: 'Groep',     value: 'Maximaal 8 deelneemsters' },
    { label: 'Locatie',   value: 'Op locatie naar keuze' },
    { label: 'Start',     value: 'Nieuwe groepen starten op aanvraag' },
  ],
  pricing: [
    { label: 'Per deelneemster', price: '€ 595,-', note: 'excl. btw · volledig programma' },
  ],
  pricingNote: 'Interesse in een incompany programma voor jouw organisatie? Neem contact op voor een voorstel op maat.',
  ctaService: 'Vrouwen op de Werkvloer',
};

export default function VrouwenOpDeWerkvloerPage() {
  return <ServicePageLayout data={data} />;
}
