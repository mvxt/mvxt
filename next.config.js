const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const path = require('path');

module.exports = withPlugins([[withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
});
