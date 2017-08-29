import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";

require("./Books.css");

class Books extends Component {
  render() {
    return (
      <div className="book-cont component">
        <h2 className="book-title">The Rainbow Phenomenon</h2>
        <p className="book-desc">
          "The Rainbow Phenomenon" is a simple yet enchanting story explaining
          the meaning of "Namaste" and the importance of perspective. The story
          meets at the intersection of deep philosophical concepts and light
          hearted storytelling. The stunning illustrations have a romantic
          Indian aesthetic that send parents and their children on visual
          vacation. This book is the first in a series of children's books that
          turns seemingly complex yogic philosophies and life lessons into
          simple tales. Parents may read these book to their children to raise
          them with a deeper understanding of inner peace.
        </p>
      </div>
    );
  }
}

export default withRouter(Books);
