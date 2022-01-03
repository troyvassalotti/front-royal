const htmlmin = require("html-minifier-terser");

module.exports = function (config) {
  // Transforms
  if (process.env.ELEVENTY_ENV === "production") {
    config.addTransform("htmlmin", function (content, outputPath) {
      if (this.outputPath && this.outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        });
        return minified;
      }
      return content;
    });
  }

  // Passthroughs
  config.addPassthroughCopy({"./public": "/"});

  return {
    dir: {
      input: "src",
      layouts: "_includes/layouts",
    },
  };
};
