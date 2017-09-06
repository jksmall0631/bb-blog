import React, { Component } from "react";
import { Link } from "react-router-dom";

require("./Events.css");

export default class Events extends Component {
  render() {
    return (
      <div id="events" className="component">
        <div className="events-cont">
          <Link to="/classes">
            <button className="event-button purple">CLASSES</button>
          </Link>
          <Link to="/readings">
            <button className="event-button green">READINGS</button>
          </Link>
          <Link to="/workshops">
            <button className="event-button brown">WORKSHOPS</button>
          </Link>
          <Link to="/speaking">
            <button className="event-button orange">SPEAKING</button>
          </Link>
        </div>
      </div>
    );
  }
}
