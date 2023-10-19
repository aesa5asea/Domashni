import { GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS, DELETE_USERS } from "./constants";

const initialState = {
  users: [],
  error: undefined,
  //isLoading:false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        //isLoading
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        //isLoading
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
        //isLoading
      };
    case DELETE_USERS:
      const updatedUsers = state.users.filter((user) => user.id !== action.payload);
      return {
        ...state,
        users: updatedUsers,
      };
    default:
      return state;
  }
}
