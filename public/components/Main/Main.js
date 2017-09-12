import React from "react";

import Nav from "../Nav/Nav";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Books from "../Books/Books";
import Events from "../Events/Events";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";

const Main = ({ entries, addEntry, removeEntry }) => {
  return (
    <div>
      <Nav />
      <div className="main-cont">
        <Welcome />
        <Books />
        <Events
          entries={entries}
          addEntry={addEntry}
          removeEntry={removeEntry}
        />
        <About />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
