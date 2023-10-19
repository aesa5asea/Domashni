import { FETCH_TODOS_FAIL, FETCH_TODOS_SUCCESS } from "./../constants/TodosConstants";

const initialState = {
  todos: [],
  error: undefined,
};

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case FETCH_TODOS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default TodosReducer;
