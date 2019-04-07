import {RECEIVE_USERS_SUCCESS} from "../actions/users";
import {SAVE_QUESTION_SUCCESS} from "../actions/questions";

export default function users(users = {}, action) {
  switch (action.type) {

    case RECEIVE_USERS_SUCCESS:
      return {
        ...users,
        ...action.users
      };

    case SAVE_QUESTION_SUCCESS:
      return {
        ...users,
        [action.question.author]: {
          ...users[action.question.author],
          questions: [
            ...users[action.question.author].questions,
            action.question.id
          ]
        }
      }

    default:
      return users;
  }
};
