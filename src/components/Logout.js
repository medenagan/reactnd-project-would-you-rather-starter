import React, { Component } from "react";
import { connect } from "react-redux";
import { requestLogout } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class Logout extends Component {

  componentDidMount() {
    this.props.dispatch(requestLogout())
  }

  render() {
    const {authedUser} = this.props;

    return (authedUser)
      ? <div className="center">You are being logged out...</div>
      : <Redirect to="/" />;
  }
}

const mapStateToProps = ({authedUser}) => {
	return {
		authedUser
	};
};

export default connect(mapStateToProps)(Logout);
