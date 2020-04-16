module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://magicaltraders.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        noHash: true,
        noQueryString: true,
        noTrailingSlash: true,
        siteUrl: `https://magicaltraders.com`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "wordpressWpProducts",
        imagePath: "featured_media.source_url",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
        output: `/sitemap.xml`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `api.magicaltraders.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        auth: {
          // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
          // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in WordPress wp-api.
          // plugin, you can specify user and password to obtain access token and use authenticated requests against WordPress REST API.
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          // jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://source-url.com",
        //   replacementUrl: "https://replacement-url.com",
        // },
        // Specify which URL structures to fetch
        includedRoutes: [
          "**/brand",
          "**/cast",
          "**/events",
          "**/events",
          "**/films",
          "**/franchises",
          "**/locations",
          "**/pages",
          "**/product-categories",
          "**/products",
          "**/product",
          "**/media",
          "**/tags",
          "**/taxonomies",
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: [
          "**/ch",
          "**/mbb",
          "**/mbv",
          "**/oembed",
          "**/sweep",
          "**/wp/v2/block-renderer",
          "**/wp/v2/comments",
          "**/wp/v2/settings",
          "**/wp/v2/themes",
          "**/wp/v2/users",
        ],
        // Set this to keep media sizes.
        // This option is particularly useful in case you need access to
        // URLs for thumbnails, or any other media detail.
        // Defaults to false
        keepMediaSizes: true,
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: `SEGMENT_PRODUCTION_WRITE_KEY`,
        devKey: `SEGMENT_DEV_WRITE_KEY`,
        trackPage: true,
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ],
}
