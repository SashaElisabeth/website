export const SITE_URL = 'https://sashaelisabeth.nl';

const PATHS = {
  home: '',
  teambuilding: '/teambuilding',
  coaching: '/individuele-coaching',
  vrouwen: '/vrouwen-op-de-werkvloer',
} as const;

export type SeoPage = keyof typeof PATHS;

/** Builds canonical + hreflang alternates for a given page across both locales. */
export function buildAlternates(page: SeoPage, locale: string) {
  const path = PATHS[page];
  const nlUrl = `${SITE_URL}${path}`;
  const enUrl = `${SITE_URL}/en${path}`;

  return {
    canonical: locale === 'en' ? enUrl : nlUrl,
    languages: {
      nl: nlUrl,
      en: enUrl,
      'x-default': nlUrl,
    },
  };
}
