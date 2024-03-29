import { GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS, DELETE_USERS } from "./constants";

export const fetchUsersRequest = (requestParams) => {
  return {
    type: GET_USERS_REQUEST,
    payload: requestParams,
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};
export const fetchUsersFail = (error) => {
  return {
    type: GET_USERS_FAIL,
    payload: error,
  };
};
export const deleteUsers = (id) => {
  return {
    type: DELETE_USERS,
    payload: id,
  };
};
