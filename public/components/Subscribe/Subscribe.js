import React from "react";
import SubscribeFrom from "react-mailchimp-subscribe";

require("./Subscribe.css");

const formProps = {
  action:
    "//buddhababiesbooks.us16.list-manage.com/subscribe/post?u=06520f7f93cadb45c1679cc5f&amp;id=fb4dd7bd76",
  messages: {
    inputPlaceholder: "Email",
    btnLabel: "Subscribe",
    sending: "Processing...",
    success: "Thanks for your interest!",
    error: "Oops, we had a problem registering that address"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "black"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
};

const Subscribe = () => {
  return (
    <div className="subscribe">
      <label>
        Stay tuned for updates, book releases, and more!
      </label>
      <SubscribeFrom {...formProps} />
    </div>
  )
}

export default Subscribe;
