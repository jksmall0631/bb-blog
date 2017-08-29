import React from "react";

require("./Banner.css");

const Banner = () => {
  return (
    <div className="banner component">
      <div className="logo-cont">
        <img className="logo" src="../../resources/buddha-babies.png" alt="Buddha Babies Logo"></img>
      </div>
      <h1 className="title">Buddha Babies Books</h1>
      <h2 className="motto">CHILDREN'S BOOKS THAT FACILITATE AN UNDERSTANDING OF MEDITATION, YOGA, AND PHILOSOPHY</h2>
    </div>
  );
};

export default Banner;
