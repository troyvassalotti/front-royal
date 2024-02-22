/** @format */

const pluginWebc = require("@11ty/eleventy-plugin-webc");
const {eleventyImagePlugin} = require("@11ty/eleventy-img");
const metadata = require("./src/_data/metadata.json");

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

module.exports = function (config) {
	config.addPlugin(pluginWebc, {
		components: [
			"./src/_components/**/*.html",
			"npm:@11ty/eleventy-img/*.webc",
		],
	});

	// Image plugin
	config.addPlugin(eleventyImagePlugin, {
		formats: ["webp", "jpeg"],
		urlPath: "/assets/img/",

		// Notably `outputDir` is resolved automatically to the project output directory

		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
	});

	// Passthroughs
	config.addPassthroughCopy({public: "/"});

	// Apparently you can access global data in filters but I was unable to here.
	config.addFilter("titleString", titleString);
	config.addFilter("descriptionString", descriptionString);

	return {
		htmlTemplateEngine: "webc",
		dir: {
			input: "src",
			layouts: "_includes/layouts",
		},
	};
};
