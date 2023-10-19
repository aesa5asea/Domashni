import { FETCH_TODOS_SUCCESS, FETCH_TODOS_FAIL } from "./../constants/TodosConstants";
import axios from "axios";

export const fetchTodosSuccess = (todos) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};

export const fetchTodosFail = (error) => {
  return {
    type: FETCH_TODOS_FAIL,
    payload: error,
  };
};

export const fetchTodosRequest = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos") // povik do url za comments
      .then((result) => dispatch(fetchTodosSuccess(result.data)))
      .catch((error) => dispatch(fetchTodosFail(error.message)));
  };
};
