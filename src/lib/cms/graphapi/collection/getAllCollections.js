import { fetchAPI } from '@/lib/cms/graphapi';

/**
 * Get all Collection for Taxonomy Archive
 */
export async function getAllCollections(preview) {
  const gqlQuery = (startAt) => `
      query Collection($where: JSON){
        collections(sort: "name:asc", limit: 100, where: $where, start:${startAt}) {
          name
          slug
          brand {name, slug}
        }
      }
    `;

  const gqlQueryParams = {
    variables: {},
  };

  // API has a limit of 100 results per query
  let combinedData = [];
  for await (const num of [0, 100, 200, 300, 400, 500]) {
    const data = await fetchAPI(gqlQuery(num), gqlQueryParams);
    combinedData = [...combinedData, ...data?.collections];
  }

  return combinedData;
}
