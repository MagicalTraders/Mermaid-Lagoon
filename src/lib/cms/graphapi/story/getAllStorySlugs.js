import { fetchAPI } from '@/lib/cms/graphapi';

export async function getAllStorySlugs() {
  const gqlQuery = `
    {
      stories {
        slug
      }
    }
  `;

  return fetchAPI(gqlQuery);
}
