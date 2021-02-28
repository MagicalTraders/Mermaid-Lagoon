import { fetchAPI } from '@/lib/cms/graphapi';

/**
 * Get all Brand for Taxonomy Archive
 */
export async function getABrand(slug, preview) {
  const gqlQuery = `
    query BrandBySlug($where: JSON, $where_ne: JSON) {
      brands(where: $where) {
        name
        slug
        seo_meta {title, description, keywords, schemaType}
        type

        collections {name, slug}
        products {name, slug}
      }

      moreBrands: brands(sort: "name:desc", limit: 2, where: $where_ne) {
        name
        slug
      }
    }
  `;

  const gqlQueryParams = {
    preview,
    variables: {
      where: {
        slug,
      },
      where_ne: {
        slug_ne: slug,
      },
    },
  };

  const data = await fetchAPI(gqlQuery, gqlQueryParams);
  return data;
}
