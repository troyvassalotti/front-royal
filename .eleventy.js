const pluginSass = require("eleventy-plugin-sass");
module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginSass);

  // Passthroughs
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  // Shortcodes
};