import React from "react";

require("./Subscribe.css");

const Subscribe = () => {
  return (
    <div>
    <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
    <div id="mc_embed_signup" className="subscribe component">
      <form action="//buddhababiesbooks.us16.list-manage.com/subscribe/post?u=06520f7f93cadb45c1679cc5f&amp;id=fb4dd7bd76" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
    	    <label htmlFor="mce-EMAIL">
            Stay tuned for updates, book releases, and more!
          </label>
    	    <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
          <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
            <input type="text" name="b_06520f7f93cadb45c1679cc5f_fb4dd7bd76" tabIndex="-1" value="" />
          </div>
          <div className="clear">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Subscribe;
