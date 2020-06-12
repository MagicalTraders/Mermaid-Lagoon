const dotenv = require('dotenv');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPurgeCss = require('next-purgecss');

dotenv.config();

// const nextConfig = {
//   env: {
//     AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
//     AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
//     AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
//     AUTH0_SCOPE: 'openid profile',
//     REDIRECT_URI:
//       process.env.REDIRECT_URI || 'http://localhost:3000/api/callback',
//     POST_LOGOUT_REDIRECT_URI:
//       process.env.POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000/',
//     SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
//     SESSION_COOKIE_LIFETIME: 7200, // 2 hours
//   },
// };
// module.exports = withPlugins([[withImages], [withCSS]], nextConfig);

const nextConfig = {
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: 'openid profile',
    REDIRECT_URI:
      process.env.REDIRECT_URI || 'http://localhost:3000/api/callback',
    POST_LOGOUT_REDIRECT_URI:
      process.env.POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000/',
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: 7200, // 2 hours
  },
  trailingSlash: false,
  poweredByHeader: false,
  // webpack(config, options) {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@components': path.resolve('./components'),
  //     '@public': path.resolve('./public'),
  //     '@redux': path.resolve('./redux'),
  //     '@utils': path.resolve('./utils'),
  //   };

  //   return config;
  // },
};

module.exports = withPlugins(
  [
    withPurgeCss({
      purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer,
      purgeCssPaths: ['pages/**/*.js', 'components/**/*.js'],
    }),
  ],
  [withImages],
  nextConfig,
);
