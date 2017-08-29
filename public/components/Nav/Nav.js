import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

require("./Nav.css");

export default class Nav extends Component {
  constructor() {
    super();
    this.collapseNav = this.collapseNav.bind(this);
  }

  collapseNav(event){
    let scrollTop = event.srcElement.body.scrollTop,
    itemTranslate = Math.min(0, scrollTop/3 - 60);
    let collapseNav = document.querySelector('.nav-cont');
    if(scrollTop > 85) {
      collapseNav.style.transform = 'translate(0px, -70px)';
    }
    if(scrollTop < 85) {
      collapseNav.style.transform = 'translate(0px, 0px)';
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.collapseNav)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.collapseNav)
  }


  render() {
    return (
      <nav className="nav-cont">
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
              . &nbsp;&nbsp; EVENTS &nbsp;&nbsp; .
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
