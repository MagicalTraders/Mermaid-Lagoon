import { initAuth0 } from '@auth0/nextjs-auth0';

// Env variables are set in ./next.config.js
export default initAuth0({
  clientId: process.env.auth0ClientId,
  clientSecret: process.env.auth0ClientSecret,
  scope: process.env.auth0Scope,
  domain: process.env.auth0Domain,
  redirectUri: process.env.auth0RedirectUri,
  postLogoutRedirectUri: process.env.auth0PostLogoutRedirectUri,
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.auth0SessionCookieSecret,
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: process.env.auth0SessionCookieLife,
    // (Optional) Cookie domain this runs on; leave blank to restrict to your domain.
    cookieDomain: false,
    // (Optional) SameSite config for the session cookie... 'lax', 'strict' or 'none'
    // Set it to false if you want to disable the SameSite setting.
    cookieSameSite: 'lax',
    // (Optional) Store the id_token in the session. Defaults to false.
    storeIdToken: false,
    // (Optional) Store the access_token in the session. Defaults to false.
    storeAccessToken: false,
    // (Optional) Store the refresh_token in the session. Defaults to false.
    storeRefreshToken: false,
  },
});
