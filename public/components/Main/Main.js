import React from "react";

import Nav from "../Nav/Nav";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Books from "../Books/Books";
import Events from "../Events/Events";
import Subscribe from "../Subscribe/Subscribe";
import Calendar from "../Calendar/Calendar";
import Icons from "../Icons/Icons";
import Footer from "../Footer/Footer";

const Main = ({ entries, removeEntry }) => {
  return (
    <div>
      <Nav />
      <div className="main-cont">
        <Welcome />
        <Books />
        <Events
          entries={entries}
          // removeEntry={removeEntry}
        />
        <Calendar />
        <About />
        <Subscribe />
        <Icons />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
