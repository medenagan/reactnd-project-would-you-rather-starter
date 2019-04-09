import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Nav from "./Nav";
import Activity from "./Activity";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import P404 from "./P404";
import Signin from "./SignIn";
import Signup from "./SignUp";
import Logout from "./Logout";
import QuestionView from "./QuestionView";

import requestInitialData from "../actions/init";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(requestInitialData());
  }

	render() {
    const { authedUser, users } = this.props;

		return (<div className="App">
    <LoadingBar/>
    <div className="container">
      <BrowserRouter>
        <Nav authedUser={authedUser} users={users}/>
        {
          (authedUser)
            ? (
              <Switch>
                <Route path="/" exact component={Activity}/>
                <Route path="/add" exact component={NewQuestion}/>
                <Route path="/leaderboard" exact component={Leaderboard}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/logout" exact component={Logout}/>
                <Route path="/questions/:id" component={QuestionView}/>
                <Route component={P404}/>
              </Switch>
            )
            : (
            <Switch>
              <Route path="/signup" exact component={Signup}/>
              <Route path="/logout" exact component={Logout}/>
              <Route component={Signin}/>
            </Switch>
            )
        }
      </BrowserRouter>
    </div>
		</div>);
	}
}

const mapStateToProps = ({authedUser, users}) => {
	return {
    authedUser,
    users,
		loading: !authedUser
	};
};

export default connect(mapStateToProps)(App);
