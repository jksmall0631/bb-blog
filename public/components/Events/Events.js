import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import CardStack from "../CardStack/CardStack";
import EventInfo from "../EventInfo/EventInfo";

require("./Events.css");

export default class Events extends Component {
  constructor() {
    super();
    this.state = {
      classes: [],
      readings: [],
      workshops: [],
      speaking: []
    };
  }

  componentWillReceiveProps(props) {
    this.sortEvents(props.entries);
  }

  sortEvents(entries) {
    let { classes, readings, workshops, speaking } = this.state;

    for (let i = 0, il = entries.length; i < il; i++) {
      if (entries[i].type === "classes") {
        let newClasses = classes;
        newClasses.push(entries[i]);
        this.setState({ photos: newClasses });
      } else if (entries[i].type === "readings") {
        let newReadings = readings;
        newReadings.push(entries[i]);
        this.setState({ photos: newReadings });
      } else if (entries[i].type === "workshops") {
        let newWorkshops = workshops;
        newWorkshops.push(entries[i]);
        this.setState({ photos: newWorkshops });
      } else if (entries[i].type === "speaking") {
        let newSpeaking = speaking;
        newSpeaking.push(entries[i]);
        this.setState({ photos: newSpeaking });
      }
    }
  }

  render() {
    return (
      <div id="events" className="component">
        <div className="events-cont">
          <CardStack
            className="stack"
            height={500}
            width={500}
            hoverOffset={15}
          >
            <Card background="#9b305a">
              <h1>CLASSES</h1>
              <EventInfo events={this.state.classes} />
            </Card>
            <Card background="#a3ad23">
              <h1>READINGS</h1>
              <EventInfo events={this.state.readings} />
            </Card>
            <Card background="#885621">
              <h1>WORKSHOPS</h1>
              <EventInfo events={this.state.workshops} />
            </Card>
            <Card background="#e77b0a">
              <h1>SPEAKING</h1>
              <EventInfo events={this.state.speaking} />
            </Card>
          </CardStack>
        </div>
      </div>
    );
  }
}
