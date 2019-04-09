import { login, logout } from "../utils/api.js";
import { showLoading, hideLoading } from "react-redux-loading";
import { requestAddUser } from "./users";

export const SET_AUTHED_USER_SUCCESS = "SET_AUTHED_USER_SUCCESS";

export function setAuthedUserSuccess(id) {
  return {
    type: SET_AUTHED_USER_SUCCESS,
    id
  };
};

export function requestLogin(id) {
  return (dispatch) => {
    dispatch(showLoading());
    login(id)
      .then(() => {
        dispatch(setAuthedUserSuccess(id))
        dispatch(hideLoading());
      })
  };
}

export function requestLogout() {
  return (dispatch) => {
    dispatch(showLoading());
    logout()
      .then(() => {
        dispatch(setAuthedUserSuccess(null))
        dispatch(hideLoading());
      })
  };
}

export function requestSignup({userid, name, avatar}) {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(requestAddUser({userid, name, avatar}))
      .then((user) => {
        if (user && user.id) {
          dispatch(requestLogin(user.id));
        }
        dispatch(hideLoading());
      });
  };
}
