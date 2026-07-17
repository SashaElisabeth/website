import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout';

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
  return <ServicePageLayout data={data} />;
}
