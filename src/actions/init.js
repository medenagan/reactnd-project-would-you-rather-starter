import { getInitialData } from "../utils/api.js";
import receiveUsersSuccess from "./users";
import { receiveQuestionsSuccess } from "./questions";
import { setAuthedUserSuccess } from "./authedUser";

import { showLoading, hideLoading } from "react-redux-loading"

export default function loadInitialDataRequest() {
    return (dispatch) => {
      dispatch(showLoading());
        getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsersSuccess(users));
                dispatch(receiveQuestionsSuccess(questions));
                dispatch(setAuthedUserSuccess("sarahedo"));
                dispatch(hideLoading());
            });
    };
};
