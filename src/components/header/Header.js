import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);

  return (
    <Headroom>
      <header className="header">
        <Link to="/" className="logo">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </Link>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/notes">Notes</Link>
          </li>

          <li>
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;