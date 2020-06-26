require('dotenv').config({ path: '.env' });

const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

/*
 * Assign branchs-specific variables at build time
 */
const gitBranch = process.env.VERCEL_GITHUB_COMMIT_REF;
let databaseByBranch;
let domainByBranch;

switch (gitBranch) {
  case 'master':
    domainByBranch = process.env.DOMAIN_MASTER;
    break;
  case 'develop':
    domainByBranch = process.env.DOMAIN_DEVELOP;
    break;
  case 'test':
    domainByBranch = process.env.DOMAIN_TEST;
    break;
  default:
    // If no Github branch is known, use localhost
    domainByBranch = 'http://localhost:3000';
}
const auth0CallbackDomain = `${domainByBranch}/api/callback`;

/**
 * nextjs.config.js
 */
module.exports = withPlugins([[withSvgr]], {
  // Runtime configuration is not available when using the serverless target.
  // Vercel automatically enables serverless
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
  env: {
    auth0ClientId: process.env.AUTH0_CLIENT_ID,
    auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET,
    auth0Domain: process.env.AUTH0_DOMAIN,
    auth0LoginException: process.env.AUTH0_LOGIN_EXCEPTION,
    auth0PostLogoutRedirectUri: domainByBranch,
    auth0RedirectUri: auth0CallbackDomain,
    auth0Scope: process.env.AUTH0_SCOPE || 'openid profile',
    auth0SessionCookieLife: process.env.AUTH0_SESSION_LIFETIME || 7200, // 2 hours
    auth0SessionCookieSecret: process.env.AUTH0_SESSION_COOKIE_SECRET,
    gitBranch,
  },
  trailingSlash: false,
});
