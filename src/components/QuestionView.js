import React, { Component } from "react";
import { connect } from "react-redux";
import { setQuestionAuthedRelation } from "../utils/helper";
import { Link } from "react-router-dom";

import Poll from "./Poll";

class QuestionView extends Component {

  render() {
    const {authedUser, questions, users, match} = this.props;
    const {id} = match.params;

    if (! questions[id]) {
      return <div className="center">
        <span>Oops, it seems this question doesn't exist. </span>
        <Link to="/">Okay, I'll go back!</Link>
      </div>;
    }

    const questionDetails = setQuestionAuthedRelation({
      question: questions[id], authedUser, users
    });

    if (questionDetails.hasAnswered) {
      return <Poll questionDetails={questionDetails} />
    }

    else {
      return <div>Here you will select options and vote</div>
    }

  }
}

const mapStateToProps = ({authedUser, questions, users}) => {
	return {
		authedUser, questions, users
  };
};

export default connect(mapStateToProps)(QuestionView);
