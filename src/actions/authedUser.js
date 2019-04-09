import { logout } from "../utils/api.js";
import { showLoading, hideLoading } from "react-redux-loading"


export const SET_AUTHED_USER_SUCCESS = "SET_AUTHED_USER_SUCCESS";

export function setAuthedUserSuccess(id) {
    return {
        type: SET_AUTHED_USER_SUCCESS,
        id
    };
};

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
