import { fetchAPI } from '@/lib/cms/graphapi';

export async function getAllProductSlugs() {
  const gqlQuery = `
    {
      products {
        slug
      }
    }
  `;

  return fetchAPI(gqlQuery);
}
