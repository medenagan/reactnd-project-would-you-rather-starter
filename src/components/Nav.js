import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Home  /  New question  /  Leader Board  /  [Hello Name]  /  Log out

export default function Nav({authedUser, users}) {

    if (authedUser) {
      return (<nav>
          <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/add" exact>New question</NavLink></li>
            <li><NavLink to="/leaderboard" exact>Leader Board</NavLink></li>
            <li><div>Hello {(users[authedUser] || {}).name || authedUser}</div></li>
            <li><NavLink to="/logout" exact>Log Out</NavLink></li>
          </ul>
      </nav>);
    }

    else {
      return (<nav>
          <ul>
            <li><NavLink to="/signin" exact>Home</NavLink></li>
            <li><NavLink to="/signin" exact>New question</NavLink></li>
            <li><NavLink to="/signin" exact>Leader Board</NavLink></li>
            <li><NavLink to="/signin" exact>Log In</NavLink></li>
            <li className="bold"><NavLink to="/signup" exact>Sign Up</NavLink></li>
          </ul>
      </nav>);
    }
}
