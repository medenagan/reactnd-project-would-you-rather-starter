import React, { Component } from "react";
import { connect } from "react-redux";
import { collectionToArray, setQuestionAuthedRelation } from "../utils/helper";
import { Link } from "react-router-dom";

import PhotoBox from "./PhotoBox";

class Activity extends Component {

  state = {
    showAnswered: false
  }

  showAnswered = () => this.setState({showAnswered: true});
  showUnanswered = () => this.setState({showAnswered: false});
      alal
  render() {
    const { authedUser, users, questionArray } = this.props;
    const { showAnswered } = this.state;

    return <div className="activity">

      <ul className="flex horizontal">
        <li className="one">
          <button
            className="aqua flatdisabled fullwidth"
            title="Show unanswered"
            disabled={!showAnswered}
            onClick={this.showUnanswered}
          >
            Unanswered Questions
          </button>
        </li>
        <li className="one">
          <button
            className="aqua flatdisabled fullwidth"
            title="Show answered"
            disabled={showAnswered}
            onClick={this.showAnswered}
          >
            Answered Questions
          </button>
        </li>
      </ul>

      <ul>
        {
          questionArray.filter(question => question.hasAnswered === showAnswered)
          .map(question => {
            const author = users[question.author];
            return <li key={question.id}>

              <PhotoBox
                avatar={author.avatarURL}
                title={author.id === authedUser
                  ? "You ask:"
                  : `${author.name} asks:`}
                direction="vertical"
              >
                <div className="aqua bold">Would you rather...</div>
                <div>{
                  "..." +
                  question.optionOne.text.split(/\s+/).slice(0, 3).join("...") +
                  "..."
                }</div>
              <Link to={`/questions/${question.id}`}>
                    <button className="aqua fullwidth">{
                        question.hasAnswered
                          ? "View Poll"
                          : "Answer"
                    }</button>
                  </Link>
              </PhotoBox>

            </li>
          })
        }
      </ul>
    </div>;
  }
}

const mapStateToProps = ({authedUser, questions, users}) => {
	return {
		authedUser, users,
    questionArray: collectionToArray(questions)
      .sort((a, b) => b.timestamp - a.timestamp)
      .map(question => setQuestionAuthedRelation({question, authedUser, users}))
	};
};

export default connect(mapStateToProps)(Activity);
