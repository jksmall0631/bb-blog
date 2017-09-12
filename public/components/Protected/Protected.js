import React, { Component } from "react";
import EventsEdit from "../EventsEdit/EventsEdit";

require("./Protected.css");

export default class Protected extends Component {
  render() {
    return (
      <div className="edit">
        <EventsEdit
          entries={this.props.entries}
          addEntry={this.props.addEntry}
          removeEntry={this.props.removeEntry}
        />
      </div>
    );
  }
}
