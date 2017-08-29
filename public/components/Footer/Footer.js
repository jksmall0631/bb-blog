import React from "react";

require("./Footer.css");

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="">
            <img />
          </a>
        </li>
        <li>
          <a href="">
            <img />
          </a>
        </li>
        <li>
          <a href="">
            <img />
          </a>
        </li>
        <li>
          <a href="">
            <img />
          </a>
        </li>
      </ul>
      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} Cleere Publishing
      </p>
    </footer>
  );
};

export default Footer;
