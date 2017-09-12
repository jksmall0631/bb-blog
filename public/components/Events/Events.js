import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import CardStack from "../CardStack/CardStack";

require("./Events.css");

export default class Events extends Component {
  render() {
    console.log(this.props.entries)
    return (
      <div id="events" className="component">
        <div className="events-cont">
          <CardStack
            className="stack"
  	        height={500}
  	        width={500}
  	        hoverOffset={15}>
            <Card background='#9b305a'>
  	          <h1>CLASSES</h1>
            </Card>
            <Card background='#a3ad23'>
  	          <h1>READINGS</h1>
            </Card>
            <Card background='#885621'>
  	          <h1>WORKSHOPS</h1>
            </Card>
            <Card background='#e77b0a'>
  	          <h1>SPEAKING</h1>
            </Card>
          </CardStack>
        </div>
      </div>
    );
  }
}
