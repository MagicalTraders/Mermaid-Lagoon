import { fetchAPI } from '@/lib/cms/graphapi';

/**
 * Get all Cast for Taxonomy Archive
 */
export async function getAllCast(preview) {
  const gqlQuery = (startAt) => `
      query Casts($where: JSON){
        casts(sort: "name:asc", limit: 1000, where: $where, start:${startAt}) {
          name
          slug
        }
      }
    `;

  const gqlQueryParams = {
    variables: {
      // where: {
      //   ...(preview ? {} : { status: 'published' }),
      // },
    },
  };

  let combinedData = [];
  for await (const num of [0, 100, 200, 300, 400, 500]) {
    const data = await fetchAPI(gqlQuery(num), gqlQueryParams);
    console.log('cast query', data);

    combinedData = [...combinedData, ...data?.casts];
  }

  return combinedData;
}
