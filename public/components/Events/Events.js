import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import CardStack from "../CardStack/CardStack";
import EventInfo from "../EventInfo/EventInfo";

require("./Events.css");

const initialState = {
  classes: [],
  readings: [],
  workshops: [],
  speaking: []
};

export default class Events extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    this.sortEvents(this.props.entries);
  }

  componentWillReceiveProps(props) {
    this.sortEvents(props.entries);
  }

  sortEvents(entries) {
    let { classes, readings, workshops, speaking } = this.state;

    for (let i = 0, il = entries.length; i < il; i++) {
      if (entries[i].type === "classes") {
        let newClasses = [];
        newClasses.push(entries[i]);
        this.setState({ classes: newClasses });
      }
      else if (entries[i].type === "readings") {
        let newReadings = [];
        newReadings.push(entries[i]);
        this.setState({ readings: newReadings });
      }
      else if (entries[i].type === "workshops") {
        let newWorkshops = [];
        newWorkshops.push(entries[i]);
        this.setState({ workshops: newWorkshops });
      }
      else if (entries[i].type === "speaking") {
        let newSpeaking = [];
        newSpeaking.push(entries[i]);
        this.setState({ speaking: newSpeaking });
      }
    }
  }

  clearState() {
    this.setState(initialState);
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
              <EventInfo
                events={this.state.classes}
                removeEntry={this.props.removeEntry}
              />
            </Card>
            <Card background="#a3ad23">
              <h1>READINGS</h1>
              <EventInfo
                events={this.state.readings}
                removeEntry={this.props.removeEntry}
              />
            </Card>
            <Card background="#885621">
              <h1>WORKSHOPS</h1>
              <EventInfo
                events={this.state.workshops}
                removeEntry={this.props.removeEntry}
              />
            </Card>
            <Card background="#e77b0a">
              <h1>SPEAKING</h1>
              <EventInfo
                events={this.state.speaking}
                removeEntry={this.props.removeEntry}
              />
            </Card>
          </CardStack>
        </div>
      </div>
    );
  }
}
