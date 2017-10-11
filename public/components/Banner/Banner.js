import React from "react";

require("./Banner.css");

const Banner = () => {
  return (
    <div className="banner component">
      <div className="logo-cont">
        <img className="logo" src="../../resources/BB.png" alt="Buddha Babies Logo"></img>
      </div>
      {/* <h1 className="title">Buddha Babies Books</h1> */}
      <img className="title" src="../../resources/title.png" alt="Buddha Babies Title"></img>
      <h2 className="motto">- MEDITATION - YOGA - INSPIRATION -</h2>
    </div>
  );
};

export default Banner;
