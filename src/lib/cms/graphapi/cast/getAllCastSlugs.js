import { fetchAPI } from '@/lib/cms/graphapi';

export async function getAllCastSlugs() {
  const gqlQuery = `
    {
      casts {
        slug
      }
    }
  `;

  return fetchAPI(gqlQuery);
}
