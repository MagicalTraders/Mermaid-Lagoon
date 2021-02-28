import { fetchAPI } from '@/lib/cms/graphapi';

/**
 * Get all Story for Taxonomy Archive
 */
export async function getAStory(slug, preview) {
  const gqlQuery = `
    query StoryBySlug($where: JSON, $where_ne: JSON) {
      stories(where: $where) {
        name
        slug
        seo_meta {title, keywords, description}
        analytic_ids {event_name, event_id}

        attractions {name, slug}
        cast {name, slug}
        chapters {name, slug}
        collections {name, slug}
        destinations {name, slug}
        entertainment {name, slug}
        events {name, slug}
        locations {name,slug}
        lodgings {name, slug}
        tags {name, slug}
        products {name, slug}
      }

      moreStorys: stories(sort: "name:desc", limit: 2, where: $where_ne) {
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
