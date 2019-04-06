import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Home  /  New question  /  Leader Board  /  [Hello Name]  /  Log out

export default function Nav(props) {

    return (<nav>
        <ul>
          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/new_question" exact>New question</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" exact>Leader Board</NavLink>
          </li>
          <li>
            <div>Hello Name</div>
          </li>
          <li>
            <NavLink to="/logout" exact>Logout</NavLink>
          </li>
          <li>
            <NavLink to="/signin" exact>Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/signup" exact>Sign Up</NavLink>
          </li>
        </ul>
    </nav>);
}
