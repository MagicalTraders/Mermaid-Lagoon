import { fetchAPI } from '@/lib/cms/graphapi';

/**
 * Get all Product for Taxonomy Archive
 */
export async function getAProduct(slug, preview) {
  const gqlQuery = `
    query ProductBySlug($where: JSON, $where_ne: JSON) {
      products(where: $where) {
        name
        slug
        pdps {
          desc_full
          desc_short
          is_available
          item_no
          photos {url}
          price_full
          price_sale
        }
        seo_meta {title, description, keywords, schemaType}

        attractions {name, slug}
        brand {name, slug}
        brands_collection {name, slug}
        category {name, slug}
        cast {name, slug}
        chapters {name, slug}
        destinations {name, slug}
        entertainment {name, slug}
        events {name, slug}
        food_services {name, slug}
        locations {name, slug}
        lodgings {name, slug}
        stories {name, slug}
        tags {name, slug}
        taxterms {name, slug}
        variations {name, slug}
      }

      moreProducts: products(sort: "name:desc", limit: 2, where: $where_ne) {
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
  console.log(`getAProduct ${slug}`, data);

  return data;
}
