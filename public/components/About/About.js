import React, { Component } from "react";

require("./About.css");

export default class About extends Component {
  render() {
    return (
      <div id="about" className="about-cont component">
        <div className="about-card">
          <img
            src="../../resources/BB-Sharon-headshot.png"
            className="about-img"
          />
          <div className="about-txt">
            <h2>Sharon Cleere</h2>
            <h3>Author and Founder</h3>
            <p>
              Sharon's goal in all of her endeavors is to inspire others to
              explore and discover their own perspectives and develop their
              inner peace. Her writing, guided meditation and yoga classes meet
              at the intersection of deep philosophical topics and light-hearted
              play.
            </p>
          </div>
        </div>
        <div className="about-card">
          <img
            src="../../resources/BB-Tiffiny-headshot.png"
            className="about-img"
          />
          <div className="about-txt">
            <h2>Tiffiny Costello</h2>
            <h3>Marketing Manager</h3>
            <p>
              Tiffiny Costello is a digital marketing expert, with a focus in
              the yoga, outdoor, and travel industries. For fun, she enjoys
              playing music in Denver, CO, hiking up mountains, is always
              looking for adventure!
            </p>
          </div>
        </div>
        <div className="about-card">
          <img
            src="../../resources/BB-Beth-headshot.png"
            className="about-img"
          />
          <div className="about-txt">
            <h2>Beth Fonseca</h2>
            <h3>Illustrator</h3>
            <p>
              B. Fonseca (lyingfawn) is a friendly neighborhood cryptid who is
              very passionate about storytelling. When she isn't telling dad
              jokes or playing Dungeons & Dragons, you can usually find her
              camped out at a local cafe, nose-deep in coffee and sketchbooks,
              writing fiction and illustrating fantasy, sci-fi, and whatever is
              in-between and beyond. She is 22 years old and lives in Colorado.
            </p>
          </div>
        </div>
        <div className="about-card">
          <img
            src="../../resources/BB-Jeremy-headshot.png"
            className="about-img"
          />
          <div className="about-txt">
            <h2>Jeremy Duran</h2>
            <h3>Graphic Designer</h3>
            <p>
              Jeremy Duran is a professional graphic designer and artist. When
              he isn't doing artsy fartsy things (which is rare) he can be found
              causing mayhem in the city or being your local barista.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
