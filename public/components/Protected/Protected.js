import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import BlogEdit from "../BlogEdit/BlogEdit";

require("./Protected.css");

export default class Protected extends Component {
  render() {
    return (
      <div className="edit">
        <BlogEdit
          entries={this.props.entries}
          addEntry={this.props.addEntry}
          removeEntry={this.props.removeEntry}
        />
      </div>
    );
  }
}
