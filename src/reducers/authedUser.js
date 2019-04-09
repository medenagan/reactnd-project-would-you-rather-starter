import {SET_AUTHED_USER_SUCCESS} from "../actions/authedUser";

export default function authedUser(state = "johndoe", action) {
  switch (action.type) {
    case SET_AUTHED_USER_SUCCESS:
      return action.id;
    default:
      return state;
  }
};
