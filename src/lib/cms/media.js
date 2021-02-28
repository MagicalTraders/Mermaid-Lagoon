import { getStrapiURL } from './api';

export function getStrapiMedia(media) {
//   console.log('media strapi', getStrapiURL(media.url));
//   console.log('media url', media.url);

  // const imageUrl = media.url.startsWith('/') ? getStrapiURL(media.url) : media.url;
  return `http://localhost:1337${media.url}`;
}
