module.exports = function (eleventyConfig) {
  // Passthroughs
  eleventyConfig.addPassthroughCopy({
    "src/fonts": "assets/fonts"
  });
  eleventyConfig.addPassthroughCopy({
    "src/img": "assets/img"
  });
  eleventyConfig.addPassthroughCopy({
    "src/css": "assets/css"
  });
  eleventyConfig.addPassthroughCopy("favicon.ico");

  // Shortcodes
  eleventyConfig.addShortcode("footer", function () {
    return `<footer class="slideout">
      <picture>
        <source srcset="/assets/img/footer.avif" type="image/avif">
        <img src="/assets/img/footer.jpg" alt="" loading="lazy">
      </picture>
    </footer>`
  });

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