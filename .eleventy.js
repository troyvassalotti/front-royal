const pluginSass = require("eleventy-plugin-sass");
module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginSass);

  // Passthroughs
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  // Shortcodes
  eleventyConfig.addShortcode("navigation", function () {
    return `<section class="banner">
    <div class="logo">
      <a href="/" aria-label="Link to the homepage"><img class="logo" src="/img/logo.png" alt="Front Royal logo"></a>
    </div>
    <nav id="navigation">
      <input class="menu-btn" type="checkbox" id="menu-btn" aria-label="Toggle the site navigation." />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="navigation">
        <li><a href="#listen" class="nav-link" aria-label="Jump to the Listen section">Listen</a></li>
        <li><a href="#dates" class="nav-link" aria-label="Jump to the Dates section">Dates</a></li>
        <li><a href="#follow" class="nav-link" aria-label="Jump to the Follow Us section">Follow Us</a></li>
      </ul>
    </nav>
    </section>`
  });

  eleventyConfig.addShortcode("footer", function () {
    return `<footer class="slideout">
      <img src="/img/footer.jpg" alt="">
    </footer>`
  })

  eleventyConfig.addShortcode("mailchimp", function () {
    return `<div id="mc_embed_signup">
      <form action="https://facebook.us17.list-manage.com/subscribe/post?u=4e13673cf275ea95a06b67103&amp;id=fc567fa48a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <input aria-label="Email" type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Enter Your Email" required>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4e13673cf275ea95a06b67103_fc567fa48a" tabindex="-1" value=""></div>
          <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
      </form>
    </div>`
  });
};