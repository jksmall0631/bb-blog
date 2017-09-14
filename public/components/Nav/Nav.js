import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

require("./Nav.css");

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      showNavBtn: false,
      collapsed: true
    }
    this.collapseNav = this.collapseNav.bind(this);
  }

  collapseNav(event) {
    let scrollTop = event.srcElement.body.scrollTop,
      itemTranslate = Math.min(0, scrollTop / 3 - 60);
    let collapseNav = document.querySelector(".nav-bar");
    if (scrollTop > 85) {
      collapseNav.style.transform = "translate(0px, -70px)";
    }
    if (scrollTop < 85) {
      collapseNav.style.transform = "translate(0px, 0px)";
    }
  }

  showNav() {
    let navBar = document.querySelector(".nav-bar")
    let nav = document.querySelector(".nav-cont");
    if(nav.style.bottom === "0px") {
      nav.style.bottom = "150px";
      navBar.style.height = "25px";
      this.setState({ collapsed: true})
    }
    else {
      nav.style.bottom = "0px";
      navBar.style.height = "120px";
      this.setState({ collapsed: false})
    }
  }

  componentDidMount() {
    if (window.innerWidth < 700) {
      this.setState({ showNavBtn: true })
    }
    else {
      window.addEventListener("scroll", this.collapseNav);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.collapseNav);
  }

  render() {
    let buttonImg = null;
    buttonImg = this.state.collapsed
      ? <img src="../../resources/menu.png" />
      : <img src="../../resources/cancel.png" />

    return (
      <nav className="nav-bar">
      { this.state.showNavBtn
        ? <button className="menu-btn" onClick={() => this.showNav()}>
          {buttonImg}
        </button>
        : null }
      <div className="nav-cont" style={{bottom: "150px"}}>
        <ul>
          {/* <li>
            <a className="nav" href="#welcome">
              . &nbsp;&nbsp; WELCOME &nbsp;&nbsp; .
            </a>
          </li> */}
          <li>
            <a className="nav" href="#books">
              . &nbsp;&nbsp; BOOKS &nbsp;&nbsp; .
            </a>
          </li>
          <li>
            <a className="nav" href="#events">
              . &nbsp;&nbsp; CLASSES &nbsp;&nbsp; .
            </a>
          </li>
          {/* <li>
            <a className="nav" href="#blog">
              . &nbsp;&nbsp; BLOG &nbsp;&nbsp; .
            </a>
          </li> */}
          <li>
            <a className="nav" href="#about">
              . &nbsp;&nbsp; ABOUT &nbsp;&nbsp; .
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
      </div>
      </nav>
    );
  }
}
