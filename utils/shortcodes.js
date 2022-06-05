/**
 * @file Single location of available shortcodes on the site
 */

const Image = require("@11ty/eleventy-img");

module.exports = {
  /**
   * Asynchronous eleventy-image handling
   */
  Image: async function (src, alt) {
    if (alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }

    let metadata = await Image(src, {
      widths: [600, 1200],
      formats: ["webp"],
      urlPath: "/assets/img/",
      outputDir: "./_site/assets/img/",
    });

    let lowsrc = metadata.webp[0];
    let highsrc = metadata.webp[metadata.webp.length - 1];

    return `
    <light-box
      src="${lowsrc.url}"
      lightbox="${highsrc.url}"
      width="${highsrc.width}"
      height="${highsrc.height}"
      alt="${alt}"
      loading="lazy"
      decoding="async"></light-box>
    `;
  },
};
