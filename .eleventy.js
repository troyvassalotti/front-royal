module.exports = function (eleventyConfig) {
  // Passthroughs
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  const componentsDir = "_includes/components";
  const Mailchimp = require(`./${componentsDir}/Mailchimp`);
  const LogoHeader = require(`./${componentsDir}/LogoHeader`);

  // Shortcodes
  eleventyConfig.addShortcode("mailchimpGDPR", Mailchimp);
  eleventyConfig.addShortcode("logoHeader", LogoHeader);
};
