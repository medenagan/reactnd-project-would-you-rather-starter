import React, { Component } from "react";
import { connect } from "react-redux";
import { collectionToArray, setUserStats } from "../utils/helper";
import UserInfo from "./UserInfo";

class NewQuestion extends Component {

  render() {
    const { userArray } = this.props;
    return <div  className="leaderboard">
      <ul>
        {
          userArray.map(user => (
            <li key={user.id}>
              <UserInfo user={user} />
            </li>
          ))
        }
      </ul>
    </div>
  }
}

const mapStateToProps = ({users}) => {
	return {
		userArray: collectionToArray(users)
      .map(user => setUserStats(user))
      .sort((a, b) => b.countAll - a.countAll)
	};
};

export default connect(mapStateToProps)(NewQuestion);
