const inputDir = "src";

module.exports = function (eleventyConfig) {
    // Passthroughs
    eleventyConfig.addPassthroughCopy(`${inputDir}/assets`);
    eleventyConfig.addPassthroughCopy(`${inputDir}/favicon.ico`);

    return {
        dir: {
            input: inputDir
        }
    }
};
