import { saveUser } from "../utils/api.js";
import { showLoading, hideLoading } from "react-redux-loading"

export const RECEIVE_USERS_SUCCESS = "RECEIVE_USERS_SUCCESS";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";

export default function receiveUsersSuccess(users) {
  return {
    type: RECEIVE_USERS_SUCCESS,
    users
  };
};

export function addUserSuccess(user) {
    return {
        type: ADD_USER_SUCCESS,
        user
    };
};

export function requestAddUser({userid, name, avatar}) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveUser({userid, name, avatar})
      .then((user) => {
        dispatch(addUserSuccess(user))
        dispatch(hideLoading());
        return user;
      });
  };
}
