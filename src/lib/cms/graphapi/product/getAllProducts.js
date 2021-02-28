import { fetchAPI } from '@/lib/cms/graphapi';

/**
 * Get all Product for Taxonomy Archive
 */
export async function getAllProducts(preview) {
  const gqlQuery = (startAt) => `
      query Product($where: JSON){
        products(sort: "name:asc", limit: 60, where: $where, start:${startAt}) {
          name
          slug
          brand {name, slug}
        }
      }
    `;

  const gqlQueryParams = {
    variables: {},
  };

  const data = await fetchAPI(gqlQuery(num), gqlQueryParams);
  return data;
}
