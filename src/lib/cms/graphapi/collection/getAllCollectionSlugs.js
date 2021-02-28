import { fetchAPI } from '@/lib/cms/graphapi';

export async function getAllCollectionSlugs() {
  const gqlQuery = `
    {
      collections {
        slug
      }
    }
  `;

  return fetchAPI(gqlQuery);
}
