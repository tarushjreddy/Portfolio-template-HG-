import React from "react";
import Nav from "./nav.js";
//import "./assets/video.mp4"
import "./header.css";
function Header() {
  return (
    <div className='header_main'>
    {/* <video className='header_main' loop autoPlay >
    <source src={require('./assets/video.mp4')} type='video/mp4' />
    </video>   */}
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
