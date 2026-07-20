import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const PATHS = ['', '/teambuilding', '/individuele-coaching', '/vrouwen-op-de-werkvloer'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return PATHS.flatMap((path) => [
    {
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
      alternates: {
        languages: {
          nl: `${SITE_URL}${path}`,
          en: `${SITE_URL}/en${path}`,
        },
      },
    },
    {
      url: `${SITE_URL}/en${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
      alternates: {
        languages: {
          nl: `${SITE_URL}${path}`,
          en: `${SITE_URL}/en${path}`,
        },
      },
    },
  ]);
}
