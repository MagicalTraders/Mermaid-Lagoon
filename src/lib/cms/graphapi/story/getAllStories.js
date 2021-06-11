import { fetchAPI } from '@/lib/cms/graphapi';

/**
 * Get all Story for Taxonomy Archive
 */
export async function getAllStories(preview) {
  const gqlQuery = (startAt) => `
      query Story($where: JSON){
        stories(sort: "name:asc", limit: 100, where: $where, start:${startAt}) {
          name
          slug
          studio
          seo {metaTitle, metaDescription}
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
    combinedData = [...combinedData, ...data?.stories];
  }

  return combinedData;
}
