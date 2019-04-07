import React, { Component } from "react";
import SignBox from "./SignBox";

class Signin extends Component {

  render() {
    return (
      <SignBox head="Welcome to the Would You Rather game!" subhead="Please sign up to get started">
        <form>
            <h3>Sign In</h3>
            <input type="text" placeholder="Your nickname" />
            <button className="aqua">Create my account</button>
        </form>
      </SignBox>
    );
  }
}

export default Signin;
