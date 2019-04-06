import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Nav from "./Nav";
import Activity from "./Activity";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import P404 from "./P404";
import Signin from "./Signin";
import Signup from "./Signup";
import Logout from "./Logout";

// Home  /  New question  /  Leader Board  /  [Hello Name]  /  Log out

class App extends Component {
	render() {
		return (<div className="App">
    <div className="container">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Activity}/>
          <Route path="/new_question" exact component={NewQuestion}/>
          <Route path="/leaderboard" exact component={Leaderboard}/>
          <Route path="/signin" exact component={Signin}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/logout" exact component={Logout}/>
          <Route component={P404}/>
        </Switch>
      </BrowserRouter>
    </div>
		</div>);
	}
}

export default App;


//(logged) Home  /  New question  /  Leader Board  /  [Hello Name]  /  Log out
//(guest)  Home  /  New question  /  Leader Board  /      .         /     .
