import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function nav() {
  return (
    <div>
      <ul className="nav__bar__container">
        <Link to="/">
          <li className="nav__bar_item">Home</li>
        </Link>
        <Link to="/portfolio">
          <li className="nav__bar_item">Portfolio</li>
        </Link>
        <Link to="/blog">
          <li className="nav__bar_item">Blog</li>
        </Link>
        <Link to="/about">
          <li className="nav__bar_item">About</li>
        </Link>
      </ul>
    </div>
  );
}
