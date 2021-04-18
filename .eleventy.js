const componentsDir = "src/_includes/components";
const inputDir = "src";
const Mailchimp = require(`./${componentsDir}/Mailchimp`);
const LogoHeader = require(`./${componentsDir}/LogoHeader`);

module.exports = function (eleventyConfig) {
    // Passthroughs
    eleventyConfig.addPassthroughCopy(`${inputDir}/assets`);
    eleventyConfig.addPassthroughCopy(`${inputDir}/favicon.ico`);

    // Shortcodes
    eleventyConfig.addShortcode("mailchimpGDPR", Mailchimp);
    eleventyConfig.addShortcode("logoHeader", LogoHeader);

    return {
        dir: {
            input: 'src'
        }
    }
};
