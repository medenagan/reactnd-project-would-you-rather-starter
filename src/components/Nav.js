import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav({authedUser, users}) {

  return (<nav>
      <ul className="flex horizontal">
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/add" exact>New question</NavLink></li>
        <li><NavLink to="/leaderboard" exact>Leader Board</NavLink></li>
        {(authedUser) && <li><div>Hello {(users[authedUser] || {}).name || authedUser}</div></li>}
        {(authedUser) && <li><NavLink to="/logout" exact>Log Out</NavLink></li>}
        {(! authedUser) && <li className="bold"><NavLink to="/signup" exact>Sign Up</NavLink></li>}
      </ul>
  </nav>);
}
