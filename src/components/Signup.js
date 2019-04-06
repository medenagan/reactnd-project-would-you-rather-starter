import React, { component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

class Signin extends React.Component {

  render() {
    return (<div className="box">
      <h1 className="aqua">Welcome to the Would You Rather game</h1>
      <h2 className="aqua">Please sign up to get started</h2>
      <img src={logo} className="logo" alt="logo" title="Would Your Rather" />
      <form>
          <h3>Sign In</h3>
          <input type="text" placeholder="Your name" />
          <button className="aqua">Create my account</button>
      </form>
    </div>);
  }
}

export default Signin;
