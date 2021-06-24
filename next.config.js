const path = require("path");
// const withImages = require("next-images");

// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],

  // your other plugins here
]);

// module.exports = withImages();
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/album": { page: "/album" },
      // "/artist_single": { page: "/artist_single" },
      "/artist": { page: "/artist" },
      "/podcast": { page: "/podcast" },
      "/radio": { page: "/radio" },
      // "/songs": { page: "/songs" },
      // "/search": { page: "/search" },
    };
  },
};
