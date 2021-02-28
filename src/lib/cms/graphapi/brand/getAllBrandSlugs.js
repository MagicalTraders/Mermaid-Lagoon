import { fetchAPI } from '@/lib/cms/graphapi';

export async function getAllBrandSlugs() {
  const gqlQuery = `
    {
      brands {
        slug
      }
    }
  `;

  return fetchAPI(gqlQuery);
}
