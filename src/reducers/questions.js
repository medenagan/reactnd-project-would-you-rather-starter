import {RECEIVE_QUESTIONS_SUCCESS, SAVE_QUESTION_SUCCESS, SAVE_QUESTION_ANSWER_SUCCESS} from "../actions/questions";

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
    case SAVE_QUESTION_ANSWER_SUCCESS:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes
              .filter(user => user !== action.author).concat(action.author)
          }
        }
      }
    default:
      return state;
  }
};
