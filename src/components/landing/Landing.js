import React from "react";
import "./Landing.css";
import SocialMedia from "../social_media/SocialMedia";
import content from '../../lib/content'

function Landing() {
  return (
    <div className="landing">
      <div className="landing-left">
        <div className="landing-content">
          <div className="landing-welcome">
            <h1>Welcome! I am</h1>
          </div>
          <h1
            style={{
              fontSize: "58px",
              fontWeight: "700",
              padding: "30px 0px 5px 0px",
              lineHeight: "64px",
              color: "var(--black)",
            }}
          >
            Samarth Nehe
          </h1>
          <p
            className="landing-para1"
            style={{
              fontSize: "22px",
              fontWeight: "500",
              color: "var(--darkGray)",
            }}
          >
            Website Developer and{" "}
            <span style={{ color: "rgb(136,96,208" }}>Designer</span>
          </p>
          <p
            className="landing-para"
            style={{ padding: "40px 0px", color: "var(--text)" }}
          >
            {content.intro.text}
          </p>
          <SocialMedia />
        </div>
      </div>
      <div className="landing-right">
        <div
          style={{
            height: "200px",
            backgroundImage:
              "linear-gradient(to bottom,rgb(0,0,0,1) -30% ,transparent 100%)",
          }}
        >
          .
        </div>
      </div>
    </div>
  );
}

export default Landing;
