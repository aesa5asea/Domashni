import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Todos = ({ todos, setTodos }) => {
  function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    getTodos();
  }, []);

  const handleTodoChange = (id) => {
    setTodos((todos) => {
      const updateTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      return updateTodos;
    });
  };

  return (
    <div id="todos">
      <h1>Todos</h1>
      <Link to="/">Home</Link>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                {todo.title}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleTodoChange(todo.id)}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Todos.propTypes = {
  todosList: PropTypes.arrayOf(PropTypes.object),
};
