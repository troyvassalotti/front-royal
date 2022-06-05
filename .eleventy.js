const htmlmin = require("html-minifier-terser");
const addWebComponentDefinitions = require("eleventy-plugin-add-web-component-definitions");

const shortcodes = require("./utils/shortcodes");
const jsDir = "/assets/js";

module.exports = function (config) {
  config.addPlugin(addWebComponentDefinitions, {
    path: (tag) => `${jsDir}/components/${tag}.js`,
  });

  // Transforms
  if (process.env.ELEVENTY_ENV === "production") {
    config.addTransform("htmlmin", function (content, outputPath) {
      if (this.outputPath && this.outputPath.endsWith(".html")) {
        return htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        });
      }
      return content;
    });
  }

  // Passthroughs
  config.addPassthroughCopy({ "./public": "/" });
  config.addPassthroughCopy({
    "./node_modules/@zachleat/details-utils/details-utils.js": `${jsDir}/components/details-utils.js`,
  });
  config.addPassthroughCopy({
    "./node_modules/@troyv/web-components/dist/**/*.js": `${jsDir}/components/`,
  });

  // Shortcodes
  config.addNunjucksAsyncShortcode("image", shortcodes.Image);

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      layouts: "_includes/layouts",
    },
  };
};
