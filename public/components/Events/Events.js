import React, { Component } from "react";
import { Link } from "react-router-dom";

require("./Events.css");

export default class Events extends Component {
  render() {
    return (
      <div id="events" className="component">
        <div className="events-cont">
          <button className="event-button purple">CLASSES</button>
          <div className="expand"></div>
          <button className="event-button green">READINGS</button>
          <div className="expand"></div>
          <button className="event-button brown">WORKSHOPS</button>
          <div className="expand"></div>
          <button className="event-button orange">SPEAKING</button>
          <div className="expand"></div>
        </div>
      </div>
    );
  }
}
