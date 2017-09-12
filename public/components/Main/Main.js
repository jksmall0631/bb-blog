import React from "react";

import Nav from "../Nav/Nav";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Books from "../Books/Books";
import Events from "../Events/Events";
import Contact from "../Contact/Contact";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Nav />
      <div className="main-cont">
        <Welcome />
        <Books />
        <Events />
        {/* <Blog /> */}
        <About />
        {/* <Contact /> */}
        <Subscribe />
        <Footer />
      </div>
    </div>
  )
}

export default Main;
