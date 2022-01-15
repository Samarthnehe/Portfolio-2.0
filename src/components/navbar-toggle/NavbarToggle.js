import React from "react";
import "./NavbarToggle.css";
import CancelIcon from "@mui/icons-material/Cancel";
import {Link as Link1} from 'react-router-dom';
import {Link as Link2} from 'react-scroll';

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
        
          <Link1
            to="/projects"
            onClick={() => handleToggleClose()}
            
          >
            Projects
          </Link1>
          <Link1
            to="/experience"
            onClick={() => handleToggleClose()}
            
          >
            Experience
          </Link1>
   
            <Link2
              to="contact"
              spy={true}
              smooth={true}
              onClick={() => handleToggleClose()}
            >
              Contact
            </Link2>
     
        </div>
      </div>
    </div>
  );
}

export default NavbarToggle;
