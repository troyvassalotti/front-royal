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
  eleventyConfig.addShortcode("logo", function () {
    return `<img src="/assets/img/logo.png" alt="Front Royal logo">`
  });

  eleventyConfig.addShortcode("dates", function () {
    return `<a class="bit-widget-initializer" data-artist-name="Front Royal" data-display-local-dates="false" data-display-past-dates="true" data-auto-style="false" data-text-color="#000000" data-link-color="#0a0a0a"
      data-background-color="rgba(0,0,0,0)" data-display-limit="15" data-link-text-color="#f5f5f5" data-display-lineup="false" data-display-play-my-city="false" data-separator-color="rgba(255, 255, 255, 0.5)" data-display-start-time="true"
      data-font="Open Sans" data-display-logo="false"></a>`
  });

  eleventyConfig.addShortcode("mailchimpGDPR", function () {
    return `<div id="mc_embed_signup">
      <form action="https://frontroyalband.us17.list-manage.com/subscribe/post?u=4e13673cf275ea95a06b67103&amp;id=fc567fa48a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <div class="mc_a11y_fix">
            <div>
              <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                <legend class="mc_a11y_label">What do you want?</legend>
                <label class="checkbox subfield" for="gdpr_4549"><input type="checkbox" id="gdpr_4549" name="gdpr[4549]" value="Y" class="av-checkbox" required>Emails, Please</label>
              </fieldset>
            </div>
            <div>
              <label for="mce-EMAIL" class="mc_a11y_label">Your email:</label>
              <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="you@example.com" required>
            </div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4e13673cf275ea95a06b67103_fc567fa48a" tabindex="-1" value=""></div>
          <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
          <div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
            <div class="content__gdpr">
              <p class="disclaimer">*We only use your email address to send you our newsletter. If you hate our emails, you can unsubscribe at any time. Questions? Send&nbsp;<a id="mailto" href="mailto:newsletter@frontroyalband.com">us an email</a>&nbsp;instead.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>`
  });
};