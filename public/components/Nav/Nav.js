import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

require("./Nav.css");

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      showNavBtn: false,
      collapsed: true
    };
    this.collapseNav = this.collapseNav.bind(this);
  }

  collapseNav(event) {
    let scrollTop = window.scrollY;
    let collapseNav = document.querySelector(".nav-bar");
    if (scrollTop > 85) {
      collapseNav.style.transform = "translate(0px, -70px)";
    }
    if (scrollTop < 85) {
      collapseNav.style.transform = "translate(0px, 0px)";
    }
  }

  toggleNav() {
    let navBar = document.querySelector(".nav-bar");
    let nav = document.querySelector(".nav-cont");
    if (nav.style.bottom === "0px") {
      nav.style.bottom = "175px";
      nav.style.visibility = "hidden";
      navBar.style.height = "20px";
      this.setState({ collapsed: true });
    } else {
      nav.style.bottom = "0px";
      nav.style.visibility = "visible";
      navBar.style.height = "140px";
      this.setState({ collapsed: false });
    }
  }

  componentDidMount() {
    this.checkWidth();
    window.addEventListener("resize", () => {
      this.checkWidth();
    });
  }

  checkWidth() {
    if (window.innerWidth < 771) {
      this.setState({ showNavBtn: true });
    } else {
      this.setState({ showNavBtn: false });
      this.setState({ collapsed: true });
      document.querySelector(".nav-bar").style.height = "20px";
      document.querySelector(".nav-cont").style.bottom = "175px";
      document.querySelector(".nav-cont").style.visibility = "visible";
      window.addEventListener("scroll", this.collapseNav);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.collapseNav);
  }

  render() {
    let buttonImg = null;
    buttonImg = this.state.collapsed ? (
      <img src="../../resources/menu.png" />
    ) : (
      <img src="../../resources/cancel.png" />
    );

    return (
      <nav className="nav-bar">
        {this.state.showNavBtn ? (
          <button className="menu-btn" onClick={() => this.toggleNav()}>
            {buttonImg}
          </button>
        ) : null}
        <div className="nav-cont" style={{ bottom: "175px", visibility: "hidden" }}>
          <ul>
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
            <li>
              <a className="nav" href="#schedule">
                . &nbsp;&nbsp; SCHEDULE &nbsp;&nbsp; .
              </a>
            </li>
            <li>
              <a className="nav" href="#about">
                . &nbsp;&nbsp; TEAM &nbsp;&nbsp; .
              </a>
            </li>
            <li>
              <a className="nav" href="#subscribe">
                . &nbsp;&nbsp; SUBSCRIBE &nbsp;&nbsp; .
              </a>
            </li>
            <li>
              <a
                className="nav"
                href="https://blog.buddhababiesbooks.com"
                target="_blank"
              >
                . &nbsp;&nbsp; BLOG &nbsp;&nbsp; .
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
