import React from "react";

require("./Icons.css");

const Icons = () => {
  return (
    <div className="icon-cont">
      <ul>
        <li className="icon-color">
          <a target='_blank' href="https://www.instagram.com/buddhababiesbooks/">
            <img className="icon" src="../../resources/instagram.png" />
          </a>
        </li>
        <li className="icon-color">
          <a target='_blank' href="https://www.facebook.com/Buddha-Babies-Books-270057940161301/">
            <img className="icon" src="../../resources/facebook.png" />
          </a>
        </li>
        <li className="icon-color">
          <a target='_blank' href="https://www.linkedin.com/in/sharon-cleere-626704ba/">
            <img className="icon" src="../../resources/linkedin.png" />
          </a>
        </li>
        <li className="icon-color">
          <a target='_blank' href="https://www.pinterest.com/buddhababiesbooks/pins/">
            <img className="icon" src="../../resources/pinterest.png" />
          </a>
        </li>
        <li className="icon-color">
          <a target='_blank' href="https://twitter.com/buddhababybook">
            <img className="icon" src="../../resources/twitter.png" />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a className="footer-nav" href="#welcome">
            WELCOME
          </a>
        </li>
        <li>
          <a className="footer-nav" href="#books">
            BOOKS
          </a>
        </li>
        <li>
          <a className="footer-nav" href="#events">
            CLASSES
          </a>
        </li>
        <li>
          <a className="footer-nav" href="#blog">
            BLOG
          </a>
        </li>
        <li>
          <a className="footer-nav" href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a className="footer-nav" href="#subscribe">
            SUBSCRIBE
          </a>
        </li>
        <li>
          <a className="footer-nav" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Icons;
