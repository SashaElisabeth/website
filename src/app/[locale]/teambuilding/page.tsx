import { setRequestLocale } from 'next-intl/server';
import ServicePageLayout, { ServicePageData } from '@/components/ServicePageLayout';

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
    { label: 'Basis', price: '€ 850,-', note: 'excl. btw · t/m 12 personen' },
    { label: 'Extra deelnemer', price: '€ 30,-', note: 'excl. btw · per extra persoon' },
  ],
  pricingNote: 'Benieuwd wat dit voor jullie team kan betekenen? Vul het contactformulier in.',
  ctaService: 'Teambuilding',
  image: '/paint 1.jpeg',
};

const dataEn: ServicePageData = {
  label: 'Teambuilding',
  title: 'Stronger together through creative work.',
  heroSubtitle: "Collaboration grows stronger when there's room for insight, experience and connection. In these teambuilding trainings I use coaching and creative, image-based methods to make visible what's going on within a team, and to bring movement to it.",
  heroBg: 'var(--accent-1)',
  offerings: [
    {
      title: 'Training – Trust',
      quote: '"Build self-confidence and stronger collaboration within the team."',
      body: 'This training focuses on strengthening mutual trust within the team. We work on safety, openness and daring to take up your place.',
    },
    {
      title: 'Training – Communication',
      quote: '"Help your team understand their communication style, so collaboration and team dynamics improve."',
      body: 'This training focuses on making communication patterns and interactions within the team visible. We explore how behaviours and patterns play out, so team members can align and collaborate more effectively.',
    },
  ],
  aanbodFooter: "For trajectories, larger groups or specific questions, I'm happy to put together a tailored proposal that fits your organisation and goals.",
  processTitleWerkwijze: 'From introduction to training.',
  werkwijzeIntro: [
    "We start with an online introductory conversation where we discuss the team's wishes, goals and context.",
    'During the training we work with a combination of psycho-education, coaching and creative methods. This helps make patterns and dynamics within the team visible and open for discussion, in a way that goes beyond just talking.',
  ],
  steps: [
    {
      number: '01',
      title: 'Introductory conversation',
      body: "We discuss the team's question, context and goals. What's going on? What do you want to achieve? Based on that, I tailor the training to your situation.",
    },
    {
      number: '02',
      title: 'The training',
      body: 'A half-day session in which the team works with creative materials. Through targeted exercises, themes such as communication, trust and collaboration are explored in an experiential way.',
    },
    {
      number: '03',
      title: 'Reflection & feedback',
      body: 'After the creative work, we reflect together on what happened. What did you notice? What surprised you? What parallels are there with everyday collaboration? Optional: a written summary.',
    },
  ],
  included: [
    'Introductory conversation (1 hour)',
    'Guidance during the training',
    'Use of creative methods and materials',
    'Optional evaluation',
  ],
  practical: [
    { label: 'Duration',     value: 'Half a day (extending to a full day is possible)' },
    { label: 'Location',     value: 'At your own location' },
    { label: 'Travel costs', value: '€ 0.30 / km' },
  ],
  pricing: [
    { label: 'Basic', price: '€ 850,-', note: 'excl. VAT · up to 12 people' },
    { label: 'Extra participant', price: '€ 30,-', note: 'excl. VAT · per extra person' },
  ],
  pricingNote: 'Curious what this could mean for your team? Fill in the contact form.',
  ctaService: 'Teambuilding',
  image: '/paint 1.jpeg',
};

export default async function TeambuildingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicePageLayout data={locale === 'en' ? dataEn : dataNl} />;
}
