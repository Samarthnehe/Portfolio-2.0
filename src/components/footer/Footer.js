import React from "react";
import "./Footer.css";
import Phone from "../../images/social-media/phone.png";
import Mail from "../../images/social-media/mail.png";

function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-info">
          <img src={Phone} />
          <p style={{ color: "white" }}>+91 6303618891</p>
        </div>
        <h1 className="footer-copyright">@2022 | Samarth Nehe</h1>
        <div className="footer-info">
          <img src={Mail} />
          <p style={{ color: "white" }}>samarthnehe2000@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
