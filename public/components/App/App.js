import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Nav from "../Nav/Nav";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Books from "../Books/Books";
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
    const url = "https://secleere.herokuapp.com/api/v1/blog";
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
      .catch(err => alert(err));
  }

  addEntry(photo, title, date, content) {
    const url = "https://secleere.herokuapp.com/api/v1/blog";
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
    const url = "https://secleere.herokuapp.com/api/v1/blog";
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
      <main>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
        <Route
          path="/blog"
          render={() =>
            <Blog entries={this.state.entries} component={Blog} />}
        />
        <Route
          path="/books"
          render={() => <Books component={Books} />}
        />
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
