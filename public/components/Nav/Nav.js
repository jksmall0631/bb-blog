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
            <a className="nav" href="#welcome">
              . &nbsp;&nbsp; WELCOME &nbsp;&nbsp; .
            </a>
          </li>
          <li>
            <a className="nav" href="#about">
              . &nbsp;&nbsp; ABOUT &nbsp;&nbsp; .
            </a>
          </li>
          <li>
            <a className="nav" href="#blog">
              . &nbsp;&nbsp; BLOG &nbsp;&nbsp; .
            </a>
          </li>
          <li>
            <a className="nav" href="#books">
              . &nbsp;&nbsp; BOOKS &nbsp;&nbsp; .
            </a>
          </li>
          <li>
            <a className="nav" href="#events">
              . &nbsp;&nbsp; EVENTS &nbsp;&nbsp; .
            </a>
          </li>
          <li>
            <a className="nav" href="#subscribe">
              . &nbsp;&nbsp; SUBSCRIBE &nbsp;&nbsp; .
            </a>
          </li>
          <li>
            <a className="nav" href="#contact">
              . &nbsp;&nbsp; CONTACT &nbsp;&nbsp; .
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
