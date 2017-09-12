import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import PhotoUpload from "../PhotoUpload/PhotoUpload";
import Events from "../Events/Events";

export default class EventsEdit extends Component {
  constructor() {
    super();
    this.state = {
      eventPhoto: "",
      title: "",
      date: "",
      desc: "",
      type: "",
      expire: ""
    };
    this.savePhoto = this.savePhoto.bind(this);
  }

  savePhoto(photo) {
    this.setState({ eventPhoto: photo });
  }

  formatDate() {
    const string = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let dateArray = this.state.date.split("-");
    const month = string[dateArray[1] - 1];
    const day = dateArray[2];
    const year = dateArray[0];
    return month + " " + day + ", " + year;
  }

  render() {
    const { eventPhoto, title, date, desc, type, expire } = this.state;
    return (
      <div>
        <div className="edit-blog">
          <h2 className="h2"> Edit Events</h2>
          <p>Upload Photo:</p>
          <PhotoUpload savePhoto={this.savePhoto} id="file-input" />
          <p>Date:</p>
          <input
            className="date"
            type="date"
            placeholder="date"
            onChange={e => this.setState({ date: e.target.value })}
          />
          <p>Title:</p>
          <input
            placeholder="title"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <p>Description:</p>
          <textarea
            placeholder="description"
            onChange={e => this.setState({ desc: e.target.value })}
          />
          <p>Type:</p>
          <select onChange={e => this.setState({ type: e.target.value })}>
            <option value="readings">Readings</option>
            <option value="workshops">Workshops</option>
            <option value="speaking">Speaking</option>
            <option value="classes">Classes</option>
          </select>
          <p>Expiration:</p>
          <input
            className="date"
            type="date"
            placeholder="expiration"
            onChange={e => this.setState({ expire: e.target.value })}
          />
          <button
            onClick={() =>
              this.props.addEntry(
                eventPhoto,
                title,
                this.formatDate(),
                desc,
                type,
                expire
              )}
          >
            create event!
          </button>
        </div>
        <Events />
      </div>
    );
  }
}
