import React from "react";
import Nav from "./nav.js";
import "./header.css";
function Header() {
  return (
    <div className="header_main">
      <Nav />
      <div className="header_body">
        <h6 className="text_pro">
          {" "}
          Hi this is Harish Guragol- Full Stack Developer
        </h6>
      </div>
    </div>
  );
}

export default Header;
