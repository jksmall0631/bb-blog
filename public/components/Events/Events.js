import React, { Component } from "react";
import { Link } from "react-router-dom";

require("./Events.css");

export default class Events extends Component {
  render() {
    return (
      <div className="events-cont">
        <Link to="/classes"><button className="event-button">CLASSES</button></Link>
        <Link to="/readings"><button className="event-button">READINGS</button></Link>
        <Link to="/workshops"><button className="event-button">WORKSHOPS</button></Link>
        <Link to="speaking"><button className="event-button">SPEAKING</button></Link>
      </div>
    );
  }
}
