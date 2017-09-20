import React, { Component } from "react";

require("./Contact.css");

export default class Contact extends Component {
  render() {
    return(
      <section id="social" className="contact-cont component">
        <h1>Contact</h1>
        <p>Here's how hold to get a hold of me:</p>
        <form action="https://formspree.io/drjosephliu@gmail.com" method="POST" id="contact-form" className="form-horizontal">
          <div className="form-sect">
            <label  className="contact-label">Name:</label><br />
            <input type="text" name="name" className="form-control" placeholder="Enter name" />
          </div>
          <div className="form-sect">
            <label className="contact-label">Email:</label><br />
            <input type="text" name="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-sect">
            <label className="contact-label">Message:</label><br />
            <textarea name="message" className="form-control" rows="5" placeholder="Enter message"></textarea>
          </div>
          <div className="form-sect">
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </section>
    )
  }
}
