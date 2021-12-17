const htmlmin = require("html-minifier-terser");
const inputDir = "./src";

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
  config.addPassthroughCopy(`${inputDir}/assets`);
  config.addPassthroughCopy(`${inputDir}/robots.txt`);
  config.addPassthroughCopy(`${inputDir}/favicon.ico`);
  config.addPassthroughCopy(`${inputDir}/site.webmanifest`);

  return {
    dir: {
      input: "src",
      layouts: "_includes/layouts",
    },
  };
};
