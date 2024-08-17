import React from "react";

import BackgroundImage from "../assets/images/Tee ambassador.jpg";
import "./App.css";

const Hero = () => {
  return (
    <div className="heropage">
      <img
        src={BackgroundImage}
        alt="background"
        className="background-image"
      />
      <div className="hero-page-writeup">
        <h1>
          Changing the world, <br /> One wig at a time!
        </h1>
        <div className="hero-list">
          <ul>
            <li>Hair Ventilation</li>
            <li>Wig Revamping</li>
            <li>Wig Coloring</li>
            <li>Wig Treatment</li>
            <li>Wig Styling</li>
            <li>Wig Making</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
