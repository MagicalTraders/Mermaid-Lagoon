import { fetchAPI } from '@/lib/cms/graphapi';

/**
 * Get all Cast for Taxonomy Archive
 */
export async function getACast(slug, preview) {
  const gqlQuery = `
    query CastBySlug($where: JSON, $where_ne: JSON) {
      casts(where: $where) {
        name
        slug
        desc_micro
        studio
        seo_meta {title, keywords, description}
        analytic_ids {event_name, event_id}
        attractions {name,slug}
        brands_collections {name,slug}
        destinations {name,slug}
        entertainment {name,slug}
        events {name,slug}
        locations {name,slug}
        tags {name,slug}
        products {name, slug, pdps {
          photos {url}
        }}
        stories {name,slug, cast {name,slug}}
      }

      moreCasts: casts(sort: "name:desc", limit: 5, where: $where_ne) {
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
