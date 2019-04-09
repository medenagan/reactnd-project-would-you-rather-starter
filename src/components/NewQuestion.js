import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { requestSaveQuestion } from "../actions/questions";

class NewQuestion extends Component {

  state = {
    optionOneText: "",
    optionTwoText: ""
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleBlur = (e) => {
    this.setState({[e.target.name]: e.target.value.trim()});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { author, dispatch, history } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    dispatch(requestSaveQuestion({author, optionOneText, optionTwoText}))
    this.setState({optionOneText: "", optionTwoText: ""});
    history.push("/");
  }

  render() {

    if (! this.props.author) {
      return <Redirect to="/" />
    }

    const {optionOneText, optionTwoText} = this.state;

    const illegalValues = /^\s*$/.test(optionOneText) ||
      /^\s*$/.test(optionTwoText) ||
      optionOneText.trim().toLowerCase() === optionTwoText.trim().toLowerCase();

    return <div>
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <h1>New Question</h1>
          <div className="left">Complete the Question:</div>
          <h2 className="aqua">Would you rather...</h2>
          <input
            value={optionOneText}
            name="optionOneText"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder="Enter Option #1 Here"
          />
        <div className="bold">OR</div>
            <input
              value={optionTwoText}
              name="optionTwoText"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Enter Option #2 Here"
            />
          <button
            className="aqua"
            type="submit"
            disabled={illegalValues}>Submit</button>
        </form>
      </div>
    </div>
  };
}

const mapStateToProps = ({authedUser}) => {
	return {
		author: authedUser
	};
};

export default connect(mapStateToProps)(NewQuestion);
