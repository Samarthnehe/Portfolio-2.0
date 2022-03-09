import React, { useState } from "react";
import "./Navbar.css";
import { Link as Link1 } from "react-router-dom";
import { Link as Link2 } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarToggle from "../navbar-toggle/NavbarToggle";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import useLocalStorage from "use-local-storage";

function Navbar({ switchTheme, theme }) {
  var currLocation = window.location.href;
  const handleToggle = () => {
    var SideBar = document.getElementById("sidebar");
    SideBar.style.padding = "10%";

    SideBar.style.width = "80vw";
  };
  const [currPage, setCurrPage] = useState("");

  const handleClick = (name) => {
    setCurrPage(name);
  };
  console.log(currPage);

  return (
    <>
      <NavbarToggle />
      <div className="navbar">
        {theme === "dark" ? (
          <Link1 to="/" onClick={() => handleClick("")}>
            <img src={LogoDark} width="135px" height="55px" />
          </Link1>
        ) : (
          <Link1 to="/" onClick={() => handleClick("")}>
            <img src={Logo} width="135px" height="55px" />
          </Link1>
        )}
        <div className="dark-toggle-mobile" onClick={switchTheme}>
          {theme === "dark" ? (
            <svg
              style={{ color: "white" }}
              id="sun"
              class="border-black"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg
              style={{ color: "black" }}
              id="moon"
              class="border-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </div>
        <div className="toggle" onClick={() => handleToggle()}>
          <MenuIcon
            fontSize="large"
            style={{
              color: theme === "dark" ? "rgb(240,240,240)" : "rgb(30,30,30)",
            }}
          />
        </div>

        <div className="navbar-options">
          <Link1
            className={currPage === "projects" ? "active" : ""}
            onClick={() => handleClick("projects")}
            to="/projects"
          >
            <p
              style={{
                color:
                  (currPage === "") | (currPage === "projects")
                    ? "white"
                    : "var(--black)",
              }}
              className=""
            >
              Projects
            </p>
          </Link1>
          <Link1
            className={currPage === "experience" ? "active" : ""}
            onClick={() => handleClick("experience")}
            to="/experience"
          >
            <p
              style={{
                color:
                  (currPage === "") | (currPage === "experience")
                    ? "white"
                    : "var(--black)",
              }}
              className=""
            >
              Experience
            </p>
          </Link1>
          <Link2
            className={currPage === "contact" ? "active" : ""}
            to="contact"
            spy={true}
            smooth={true}
          >
            <p
              style={{
                color:
                  (currPage === "") | (currPage === "contact")
                    ? "white"
                    : "var(--black)",
              }}
              className=""
            >
              Contact
            </p>
          </Link2>
          <div className="dark-toggle" onClick={switchTheme}>
            {theme === "dark" ? (
              <svg
                style={{ color: "white" }}
                id="sun"
                class="border-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                style={{ color: "black" }}
                id="moon"
                class="border-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
