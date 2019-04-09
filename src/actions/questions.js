import { saveQuestion, saveQuestionAnswer } from "../utils/api.js";
import { showLoading, hideLoading } from "react-redux-loading"

export const RECEIVE_QUESTIONS_SUCCESS = "RECEIVE_QUESTIONS_SUCCESS";
export const SAVE_QUESTION_SUCCESS = "SAVE_QUESTION_SUCCESS";
export const SAVE_QUESTION_FAILURE = "SAVE_QUESTION_FAILURE";
export const SAVE_QUESTION_ANSWER_SUCCESS = "SAVE_QUESTION_ANSWER_SUCCESS";
export const SAVE_QUESTION_ANSWER_FAILURE = "SAVE_QUESTION_ANSWER_FAILURE";

export function receiveQuestionsSuccess(questions) {
  return {
    type: RECEIVE_QUESTIONS_SUCCESS,
    questions
  };
};

export function saveQuestionSuccess(question) {
  return {
    type: SAVE_QUESTION_SUCCESS,
    question
  };
};

export function saveQuestionFailure(error) {
  return {
    type: SAVE_QUESTION_FAILURE,
    error
  };
};

export function requestSaveQuestion({author, optionOneText, optionTwoText}) {
  return (dispatch) => {
    dispatch(showLoading());
    saveQuestion({author, optionOneText, optionTwoText})
    .then(question => dispatch(saveQuestionSuccess(question)))
    .catch(error => dispatch(saveQuestionFailure(error)))
    .finally( () => dispatch(hideLoading()) );
  };
}

export function saveQuestionAnswerSuccess({author, qid, answer}) {
  return {
    type: SAVE_QUESTION_ANSWER_SUCCESS,
    author, qid, answer
  };
};

export function saveQuestionAnswerFailure(error) {
  return {
    type: SAVE_QUESTION_ANSWER_FAILURE,
    error
  };
};

export function requestSaveQuestionAnswer({authedUser, qid, answer}) {
  return (dispatch) => {
    dispatch(showLoading());
    saveQuestionAnswer({authedUser, qid, answer})
    .then(question => dispatch(saveQuestionAnswerSuccess({author: authedUser, qid, answer})))
    .catch(error => dispatch(saveQuestionAnswerFailure(error)))
    .finally( () => dispatch(hideLoading()) );
  };
}
