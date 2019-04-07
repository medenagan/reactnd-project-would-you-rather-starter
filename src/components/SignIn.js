import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SignBox from "./SignBox";

import { connect } from "react-redux";
import { setAuthedUserSuccess } from "../actions/authedUser";

class Signin extends Component {

  state = {
    chosenId: ""
  };

  handleChange = (e) => {
    this.setState({chosenId: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { chosenId } = this.state;
    const { users, dispatch, history } = this.props;

    if (chosenId && users[chosenId]) {
      dispatch(setAuthedUserSuccess(chosenId));
      history.push("/");
    }
  }

  render() {
    const { users } = this.props;
    const { chosenId } = this.state;

    return (
      <SignBox head="Welcome Back!" subhead="Please log in to resume your game">
        <form onSubmit={this.handleSubmit}>
            <h3>Sign In</h3>
            <select value={chosenId} onChange={this.handleChange}>
              <option value="">Please select your userid</option>
              {
                Object.keys(users).map(id => <option key={id} value={id}>{users[id].name}</option>)
              }
            </select>
            <button type="submit" className="aqua" disabled={!chosenId}>Let me in</button>
        </form>
        <div className="center">New in town? You can <NavLink to="/signup">sign up</NavLink> and start playing!</div>
      </SignBox>
    );
  }
}

const mapStateToProps = ({users}) => {
	return {
		users
	};
};

export default connect(mapStateToProps)(Signin);