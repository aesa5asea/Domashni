import { useState } from "react";
import { Todos } from "./components/Todos";
import "./css/App.css";

export function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [message, setMessage] = useState(
    "There are no items added to the array!"
  );
  const [hiddenTodos, setHiddenTodos] = useState([]);

  function getRandomId() {
    let randomId;
    do {
      randomId = Math.floor(Math.random() * 100) + 1;
    } while (todos.some((todo) => todo.id === randomId));
    return randomId;
  }

  function addNewTodo() {
    if (newTodo.trim() !== "") {
      let newObject = {
        id: getRandomId(),
        text: newTodo,
        done: false,
      };
      setTodos([...todos, newObject]);
      setNewTodo("");
      setMessage("");
    } else {
      alert("Please enter a valid task.");
    }
  }

  function markTodoAsDone(todo) {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      )
    );
  }

  function hideTodoCompleted() {
    const completedTodos = todos.filter((todo) => todo.done);
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.done));
    setHiddenTodos(completedTodos);
  }

  function showHiddenTodos() {
    setTodos([...todos, ...hiddenTodos]);
    setHiddenTodos([]);
  }

  function editTodo(updatedTodo) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, text: updatedTodo.text } : todo
      )
    );
  }

  function deleteTodo(todoId) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div id="app">
      <input
        type="text"
        placeholder="Enter Element"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={addNewTodo}>Add Element</button>
      <br />

      {todos.length > 0 && (
        <>
          <h1>
            Number of completed Items:{" "}
            {todos.filter((todo) => todo.done).length}
          </h1>
          <button onClick={hideTodoCompleted}>Hide Completed</button>
          {hiddenTodos.length > 0 && (
            <button onClick={showHiddenTodos}>Show Hidden Items</button>
          )}
        </>
      )}

      {message && <h1>{message}</h1>}

      {todos.length > 0 && (
        <Todos
          listOfTodos={todos}
          markTodoAsDone={markTodoAsDone}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      )}

      <hr />
    </div>
  );
}
