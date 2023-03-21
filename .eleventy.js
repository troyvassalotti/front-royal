const addWebComponentDefinitions = require("eleventy-plugin-add-web-component-definitions");
const pluginWebc = require("@11ty/eleventy-plugin-webc");

const SHORTCODES = require("./utils/shortcodes");
const TRANSFORMS = require("./utils/transforms");
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

  return {
    htmlTemplateEngine: "webc",
    dir: {
      input: "src",
      layouts: "_includes/layouts",
    },
  };
};
