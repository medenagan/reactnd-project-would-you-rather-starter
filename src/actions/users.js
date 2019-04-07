export const RECEIVE_USERS_SUCCESS = "RECEIVE_USERS_SUCCESS";

export default function receiveUsersSuccess(users) {
  return {
    type: RECEIVE_USERS_SUCCESS,
    users
  };
};
