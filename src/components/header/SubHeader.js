import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="home" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="/Home#opensource">Projects</a>
          </li>
          <li>
            <a href="/Home#blogs">Blog</a>
          </li>
          
          <li>
            <a href="/about">About</a>
          </li>
          
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li></li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
