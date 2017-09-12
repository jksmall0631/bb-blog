import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Main from "../Main/Main";
import AdminLogin from "../AdminLogin/AdminLogin";
import Protected from "../Protected/Protected";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

require("./Reset.css");
require("./App.css");

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: []
    };
    this.addEntry = this.addEntry.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
  }

  componentDidMount() {
    this.blogEntries();
  }

  blogEntries() {
    const url = "http://localhost:3000/api/v1/blog";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(data => data.json())
      .then(data => {
        this.setState({ entries: data });
      })
      .catch(err => console.log(err));
  }

  addEntry(photo, title, date, content) {
    const url = "http://localhost:3000/api/v1/blog";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ photo, title, date, content })
    })
      .then(data => data.json())
      .then(data => {
        let entries = this.state.entries;
        entries.push(data[0]);
        this.setState({ entries });
      })
      .catch(err => alert(err));
  }

  removeEntry(id) {
    const url = "http://localhost:3000/api/v1/blog";
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
      .then(data => data.json())
      .then(data => {
        let array = this.state ? this.state.entries : [];
        for (let i = 0; i < array.length; i++) {
          if (array[i].id === id) {
            array.splice(i, 1);
          }
        }
        this.setState({ entries: array });
      })
      .catch(err => alert(err));
  }

  render() {
    return (
      <main id="welcome">
        <Route exact path="/" component={Main} />
        <Route exact path="/admin" component={AdminLogin} />
        <PrivateRoute
          path="/protected"
          entries={this.state.entries}
          addEntry={this.addEntry}
          removeEntry={this.removeEntry}
          component={Protected}
        />
      </main>
    );
  }
}
