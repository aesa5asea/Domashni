import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodosRequest } from "../actions/TodosActions";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.TodosReducer.todos);
  const greska = useSelector((state) => state.TodosReducer.err);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  return (
    <div id="todos">
      {todos.map((todos) => {
        return (
          <div key={todos.id}>
            <p>
              <span>Title:</span>
              {todos.title}
            </p>
            <p>
              <span>Status:</span>
              {todos.completed ? "Completed" : "Not Completed"}
            </p>
          </div>
        );
      })}
      {greska && <h1>{greska}</h1>}
    </div>
  );
};
