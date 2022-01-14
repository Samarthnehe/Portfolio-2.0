import React from "react";
import "./NavbarToggle.css";
import CancelIcon from "@mui/icons-material/Cancel";
import {Link} from 'react-router-dom'

function NavbarToggle() {

  const handleToggleClose = () => {
    var SideBar = document.getElementById("sidebar");
    SideBar.style.width = "0vw";
    SideBar.style.padding = "0px";
  };

  return (
    <div id="sidebar">
      <div className="toggle-cross">
        <CancelIcon
          onClick={() => handleToggleClose()}
          fontSize="large"
          style={{ color: "rgb(30,30,30)" }}
        />
      </div>
      <div className="toggle-items">
        <div className="toggle__items">
        
          <Link
            to="/projects"
            spy={true}
            onClick={() => handleToggleClose()}
            smooth={true}
          >
            Projects
          </Link>
          <Link
            to="/experience"
            spy={true}
            onClick={() => handleToggleClose()}
            smooth={true}
          >
            Experience
          </Link>
   
            <Link
              to="contact"
              spy={true}
              smooth={true}
              onClick={() => handleToggleClose()}
            >
              Contact
            </Link>
     
        </div>
      </div>
    </div>
  );
}

export default NavbarToggle;
