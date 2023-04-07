/**
 * @file Site filters
 */

const metadata = require("../src/_data/metadata.json");

// Apparently you can access global data in filters but I was unable to here.
function titleString(page, title, options = {}) {
  if (title) {
    if (options.pipe) {
      return `${title} | ${metadata.title}`;
    }

    return title;
  } else {
    const slug = page.fileSlug;
    const capitalized = slug.charAt(0).toUpperCase() + slug.slice(1);

    return options.pipe ? `${capitalized} | ${metadata.title}` : capitalized;
  }
}

function descriptionString(page, description) {
  if (description) {
    return description;
  } else {
    return `${titleString(page)} - a page on ${metadata.domain}`;
  }
}

module.exports = {
  titleString,
  descriptionString,
};
