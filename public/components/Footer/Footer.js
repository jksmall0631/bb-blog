import React from "react";

require("./Footer.css");

const Footer = () => {
  return (
    <footer>
      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} Cleere Publishing
      </p>
    </footer>
  );
};

export default Footer;
