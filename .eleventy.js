const pluginWebc = require("@11ty/eleventy-plugin-webc");

const SHORTCODES = require("./utils/shortcodes");
const TRANSFORMS = require("./utils/transforms");
const FILTERS = require("./utils/filters");
const JS_DIR = "/assets/js";

module.exports = function (config) {
  config.addPlugin(pluginWebc, {
    components: "./src/_components/**/*.html",
  });

  // Passthroughs
  config.addPassthroughCopy({ public: "/" });
  config.addPassthroughCopy({
    "./node_modules/@zachleat/details-utils/details-utils.js": `${JS_DIR}/components/details-utils.js`,
  });
  config.addPassthroughCopy({
    "./node_modules/@troyv/lightboxing/dist/**/*.js": `${JS_DIR}/components/`,
  });

  // Shortcodes
  config.addNunjucksAsyncShortcode("image", SHORTCODES.Image);

  // Transforms
  Object.keys(TRANSFORMS).forEach((transformName) => {
    config.addTransform(transformName, TRANSFORMS[transformName]);
  });

  // Filters
  Object.keys(FILTERS).forEach((filterName) => {
    config.addFilter(filterName, FILTERS[filterName]);
  });

  return {
    htmlTemplateEngine: "webc",
    dir: {
      input: "src",
      layouts: "_includes/layouts",
    },
  };
};
