import React from "react";
import "./body.css";
import car from "./assets/about.svg"

function Body() {
  return (
  <>
  <div className="container">
  <div className ="leftcontainer">
  <h1>About Me.</h1>
  <p style={{ justifyContent:"center", textAlign:"justify", margin:"20px"}}>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</p>
  </div>
  <div className="rightcontainer">
  <img src={car} alt="this is a svg" />
  </div>
  </div>
 
  </>
  );
}

export default Body;
