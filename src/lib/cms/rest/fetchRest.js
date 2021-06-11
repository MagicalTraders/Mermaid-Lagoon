export function getStrapiURL(path) {
  return `${process.env.maroonersRockBase}${path}`;
}

export async function fetchAPI(path, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };
  const requestUrl = getStrapiURL(`${path}`);
  console.log('requestUrl', requestUrl);

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error('An error occured please try again');
  }
  const data = await response.json();
  return data;
}

export async function getPageData(slug, preview = false) {
  const cmsToken = process.env.maroonersRockToken;
  const isDraft = preview ? '&status=draft' : '';

  // Find the pages that match this slug
  const pagesData = await fetchAPI(
    `/pages?slug=${slug}&token=${cmsToken}&status=published${isDraft}`,
  );

  // Make sure we found something, otherwise return null
  if (pagesData == null || pagesData.length === 0) {
    return null;
  }

  // Return the first item since there should only be one result per slug
  return pagesData[0];
}

// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData() {
  const global = await fetchAPI('/global');
  return global;
}
