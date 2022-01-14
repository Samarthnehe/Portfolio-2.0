import React from "react";
import "./AboutMe.css";
import DownloadIcon from "../../images/downloadIcon.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import content from '../../lib/content';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-desc">
        <div className="about-welcome">
          <h1>About Me</h1>
        </div>
        <h1
        className="about-header"
          style={{
            fontSize: "48px",
            fontWeight: "700",
            padding: "30px 0px 5px 0px",
            lineHeight: "64px",
            color:'var(--black)'
          }}
        >
          Who am I?
        </h1>
        <p className="para">
          {content.about.first}
        </p>
        <p className="para">
          {content.about.second}
        </p>
        <p className="para">
          {content.about.third}
        </p>
          <a className="button" href="https://drive.google.com/file/d/1efu_M9KOSp-J-i1zRX9GhNXQ5WmPV9TZ/view?usp=sharing" target="_blank">
            <p>Download CV</p>
            <img src={DownloadIcon} />
          </a>
      </div>
    </div>
  );
}

export default AboutMe;
