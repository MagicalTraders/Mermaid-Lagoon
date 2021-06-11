const environmentKeys = {
  cannonballCoveBase: process.env.CANNONBALL_COVE_BASE,
  maroonersRockBase:  process.env.MAROONERS_ROCK_BASE,
  maroonersRockJWT:   process.env.MAROONERS_ROCK_JWT,
  maroonersRockToken: process.env.MAROONERS_ROCK_TOKEN,
};

console.log(environmentKeys);

module.exports = {
  compress: true,
  env:      environmentKeys,
  future:   {
    webpack5: true,
  },
  images: {
    domains: [
      'assets.vercel.com',
      process.env.CANNONBALL_COVE_BASE,
      'via.placeholder.com',
      'localhost',
    ],
  },
  // target: 'serverless',
  trailingSlash: false,
};
