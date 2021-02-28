import { fetchAPI } from '@/lib/cms/graphapi';

/**
 * Get all Collection for Taxonomy Archive
 */
export async function getACollection(slug, preview) {
  const gqlQuery = `
    query CollectionBySlug($where: JSON, $where_ne: JSON) {
      collections(where: $where) {
        name
        slug
        seo_meta {title, description, keywords, schemaType}

        brand {name, slug}
        cast {name, slug}
        locations {name, slug}
        products {name, slug}
        stories {name, slug}
        tags {name, slug}
      }

      moreCollections: collections(sort: "name:desc", limit: 2, where: $where_ne) {
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
