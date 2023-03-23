/**
 * @file Site filters
 */

const metadata = require('../src/_data/metadata.json');

module.exports = {
  titleString: function (title, options = {}) {
    if (title) {
      if (options.pipe) {
        return `${title} | ${metadata.title}`;
      }

      return title;
    } else {
      const slug = page.fileSlug;
      return slug.charAt(0).toUpperCase() + slug.slice(1);
    }
  },
  descriptionString: function (description) {
    if (description) {
      return description;
    } else {
      return `${returnTitleString()} - a page on ${metadata.domain}`;
    }
  },
};
