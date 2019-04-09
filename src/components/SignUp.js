import React, { Component } from "react";
import SignBox from "./SignBox";
import Avatar from "./Avatar";
import { avatars } from "../utils/images";

import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

import { requestSignup } from "../actions/authedUser";

class Signup extends Component {

  state = {
    userid: "",
    name: "",
    avatar: ""
  }

  handleUseridChange = (e) => {
    this.setState({
      userid: e.target.value.replace(/[^a-z0-9_]/gi, "")
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { userid, name, avatar } = this.state;
    const { dispatch } = this.props;

    dispatch(requestSignup({ userid, name, avatar }));
  }

  render() {
    const { userid, name, avatar } = this.state;
    const { users, authedUser } = this.props;

    if (authedUser) {
      return <Redirect to="/" />
    }

    const existingUser = !!users[userid];
    const isLegit = !existingUser && userid && name.trim() && avatar;

    return (
      <SignBox head="Welcome to the Would You Rather game!" subhead="Please sign up to get started">
        <form onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>
            <input type="text"
              placeholder="Your nickname"
              value={userid}
              onChange={this.handleUseridChange}
            />
            <input type="text"
              placeholder="Your name"
              value={name} name="name"
              onChange={this.handleChange}
            />

          <ul className="flex horizontal end">
            {
              Object.keys(avatars).map(avatarURL => (
                <li key={avatarURL}>
                  <label>
                    <input
                      type="radio"
                      value={avatarURL}
                      checked={avatarURL === avatar}
                      name="avatar"
                      onChange={this.handleChange}
                    />
                    <Avatar avatar={avatarURL} />
                  </label>
                </li>
              ))
            }
          </ul>

            {
              existingUser && (
                <div>
                  <div className="center">Sorry, this username already exists.</div>
                  <div>
                    <span>It's you? Please </span>
                    <NavLink to="/">log in</NavLink>
                    <span> and resume your game!</span>
                  </div>
                </div>
              )
            }

            <button className="aqua" disabled={!isLegit}>Create my account</button>
        </form>
      </SignBox>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
	return {
    users,
    authedUser
	};
};

export default connect(mapStateToProps)(Signup);
