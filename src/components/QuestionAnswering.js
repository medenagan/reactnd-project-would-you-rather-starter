import React, { Component } from "react";
import { connect } from "react-redux";
import { requestSaveQuestionAnswer } from "../actions/questions";

import PhotoBox from "./PhotoBox";

class QuestionAnswering extends Component {

  state = {
    answer: ""
  }

  handleChange = (e) => {
    this.setState({answer: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { answer } = this.state;
    const { dispatch, questionDetails, authedUser } = this.props;

    if (answer) dispatch(requestSaveQuestionAnswer({
      authedUser,
      qid: questionDetails.id,
      answer
    }));
  }


  render() {

  const {answer} = this.state;
  const {optionOne, optionTwo, userAuthor, hasAsked} = this.props.questionDetails;

  return <PhotoBox
    avatar={userAuthor.avatarURL}
    title={hasAsked
      ? "You ask:"
      : `${userAuthor.name} asks:`}
    direction="vertical"
  >
    <div className="aqua bold big self center">Would you rather...</div>
    <div className="box">
      <form onSubmit={this.handleSubmit}>
        {
          ["optionOne", "optionTwo"].map(optionName => {
            const option = {optionOne, optionTwo}[optionName];
            return <div key={optionName} className="flex vertical">
              <div className="flex horizontal start">
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={optionName}
                    checked={answer === optionName}
                    onChange={this.handleChange}/>
                  {option.text}
                </label>
              </div>
            </div>
          })
        }

        <button type="submit" className="aqua" disabled={!answer}>Submit</button>
      </form>
    </div>

  </PhotoBox>;
}
}

const mapStateToProps = ({authedUser}) => {
	return {
		authedUser,
  };
};

export default connect(mapStateToProps)(QuestionAnswering);
