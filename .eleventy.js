const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { eleventyImagePlugin } = require("@11ty/eleventy-img");

const TRANSFORMS = require("./utils/transforms");
const FILTERS = require("./utils/filters");
const JS_DIR = "/assets/js";

module.exports = function (config) {
  config.addPlugin(pluginWebc, {
    components: ["./src/_components/**/*.html", "npm:@11ty/eleventy-img/*.webc"],
  });

  // Image plugin
  config.addPlugin(eleventyImagePlugin, {
    formats: ["webp", "jpeg"],
    urlPath: "/assets/img/",

    // Notably `outputDir` is resolved automatically
    // to the project output directory

    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });

  // Passthroughs
  config.addPassthroughCopy({ public: "/" });
  config.addPassthroughCopy({
    "./node_modules/@zachleat/details-utils/details-utils.js": `${JS_DIR}/components/details-utils.js`,
  });
  config.addPassthroughCopy({
    "./node_modules/@troyv/lightboxing/dist/**/*.js": `${JS_DIR}/components/`,
  });

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
