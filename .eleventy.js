const CleanCSS = require("clean-css");
const {minify} = require("terser");
const inputDir = "src";

module.exports = function (eleventyConfig) {
    // Passthroughs
    eleventyConfig.addPassthroughCopy(`${inputDir}/assets`);
    eleventyConfig.addPassthroughCopy(`${inputDir}/favicon.ico`);
    eleventyConfig.addPassthroughCopy(`${inputDir}/site.webmanifest`);
    eleventyConfig.addPassthroughCopy(`${inputDir}/robots.txt`);

    // add javascript minifier
    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (code, callback) {
        try {
            const minified = await minify(code);
            callback(null, minified.code);
        } catch (err) {
            console.error("Terser error: ", err);
            // Fail gracefully.
            callback(null, code);
        }
    });

    // add a css minifier filter from clean-css
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({level: 2}).minify(code).styles;
    });

    return {
        dir: {
            input: inputDir
        }
    }
};
