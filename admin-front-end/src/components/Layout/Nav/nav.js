import React from 'react'

import { Link } from "react-router-dom";
export default function nav() {
    return (
        <div>
        <ul className="nav__bar__container">
          <Link to="/">
            <li className="nav__bar_item">Home</li>
          </Link>
          <Link to="/posts">
            <li className="nav__bar_item">Manage Posts</li>
          </Link>
          <Link to="/comments">
            <li className="nav__bar_item">Manage Comments</li>
          </Link>
          <Link to="/admin">
            <li className="nav__bar_item">Admin</li>
          </Link>
        </ul>
      </div>
    )
}
