import React, { component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

class Signin extends React.Component {

  render() {
    return (<div className="box">
      <h1 className="aqua">Welcome Back</h1>
      <h2 className="aqua">Please sign in</h2>
      <img src={logo} className="logo" alt="logo" title="Would Your Rather" />
      <form>
          <h3>Sign Up</h3>
          <select>
            <option>Please select your userid</option>
            <option>Gianfranco</option>
            <option>Ludovico</option>
          </select>
          <button className="aqua">Let me in</button>
      </form>
      <div className="center">Not there? You can <NavLink to="/signup">sign up</NavLink> and start playing</div>
    </div>);
  }
}

export default Signin;
