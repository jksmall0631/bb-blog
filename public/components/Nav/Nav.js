import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

require("./Nav.css");

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link className="nav" to="/">
              . &nbsp;&nbsp; WELCOME &nbsp;&nbsp; .
            </Link>
          </li>
          <li>
            <Link className="nav" to="/about">
              . &nbsp;&nbsp; ABOUT &nbsp;&nbsp; .
            </Link>
          </li>
          <li>
            <Link className="nav" to="/blog">
              . &nbsp;&nbsp; BLOG &nbsp;&nbsp; .
            </Link>
          </li>
          <li>
            <Link className="nav" to="/books">
              . &nbsp;&nbsp; BOOKS &nbsp;&nbsp; .
            </Link>
          </li>
          <li>
            <Link className="nav" to="/events">
              . &nbsp;&nbsp; UPCOMING EVENTS &nbsp;&nbsp; .
            </Link>
          </li>
          <li>
            <Link className="nav" to="/subscribe">
              . &nbsp;&nbsp; SUBSCRIBE &nbsp;&nbsp; .
            </Link>
          </li>
          <li>
            <Link className="nav" to="/contact">
              . &nbsp;&nbsp; CONTACT &nbsp;&nbsp; .
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
