import React from "react";
import image from "../data/data.js";

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>i am one desicion away from regret</p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;