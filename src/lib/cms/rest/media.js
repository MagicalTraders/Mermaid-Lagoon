import { getStrapiURL } from './fetchRest';

export function getStrapiMedia(media) {
//   console.log('media strapi', getStrapiURL(media.url));
//   console.log('media url', media.url);

  // const imageUrl = media.url.startsWith('/') ? getStrapiURL(media.url) : media.url;
  return `${process.env.maroonersRockBase}${media.url}`;
}
