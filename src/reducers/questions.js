import {RECEIVE_QUESTIONS_SUCCESS, SAVE_QUESTION_SUCCESS} from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS_SUCCESS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTION_SUCCESS:
      return {
        ...state,
        [action.question.id]: action.question
      };
    default:
      return state;
  }
};
