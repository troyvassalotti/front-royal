const inputDir = "src";

module.exports = function (eleventyConfig) {
    // Passthroughs
    eleventyConfig.addPassthroughCopy(`${inputDir}/assets`);
    eleventyConfig.addPassthroughCopy(`${inputDir}/favicon.ico`);
    eleventyConfig.addPassthroughCopy(`${inputDir}/site.webmanifest`);

    return {
        dir: {
            input: inputDir
        }
    }
};
