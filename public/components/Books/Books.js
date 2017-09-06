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
      <div id="books" className="book-cont component">
        <div className="about-card">
          <img className="book-img" src="../../resources/coming-soon2.png" />
          <div className="about-text">
            <h2 className="book-title">Namaste, Rainbow</h2>
            <p className="book-desc">
              "Namaste, Rainbow" is a simple yet enchanting story explaining
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
        </div>
      </div>
    );
  }
}

export default withRouter(Books);
