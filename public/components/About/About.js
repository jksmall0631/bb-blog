import React, { Component } from "react";

require("./About.css");

export default class About extends Component {
  render() {
    return (
      <div className="about-cont component">
        <div className="about-card">
            <img src="../../resources/sharon-about.JPG" className="about-img" />
            <div className="about-txt">
              <h2>Sharon Cleere</h2>
              <p>
                Sharon is a writer, philosopher, meditation guide and yoga
                instructor. Sharon's goal in all of her endeavors is to encourage
                others to explore and discover their own perspectives and develop
                their inner peace. She loves to write for and teach children because
                she believes showing the youth ways to cultivate inner peace will
                develop a more kinder society.
                <br />
                <br />
                She received her meditation and yoga instructor's certification in
                India where she spent time immersed in the topics of meditation,
                yoga, philosophy, Taoism, Hinduism and mindfulness. She has two
                bachelor's degrees: one in communication and the other in
                philosophy. Sharon's educational background trained her to make
                seemingly complex topics easy to understand. Her writing, guided
                meditation and yoga classes meet at the intersection of deep
                philosophical topics and light-hearted play.
              </p>
            </div>
        </div>
        <div className="about-card">
          <img src="../../resources/tiffiny-about.JPG" className="about-img" />
          <div className="about-txt">
            <h2>Tiffiny Costello</h2>
            <p>
              Tiffiny Costello is a digital marketing expert, with a focus in the
              yoga, outdoor, and travel industries. For fun, she enjoys playing
              music in Denver, CO, hiking up mountains, is always looking for
              adventure!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
