import { useState } from "react";
import PropTypes from "prop-types";

export const Todos = ({
  listOfTodos,
  markTodoAsDone,
  editTodo,
  deleteTodo,
}) => {
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState("");

  const handleEditClick = (todo) => {
    setEditingTodoId(todo.id);
    setEditedTodoText(todo.text);
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditedTodoText("");
  };

  const handleSaveEdit = (todo) => {
    if (editedTodoText.trim() !== "") {
      editTodo({
        id: todo.id,
        text: editedTodoText,
        done: todo.done,
      });
      setEditingTodoId(null);
      setEditedTodoText("");
    } else {
      alert("Valid task is required.");
    }
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>
            <b>ID</b>
          </th>
          <th>
            <b>Item</b>
          </th>
          <th>
            <b>Completed</b>
          </th>
          <th>
            <b>Actions</b>
          </th>
        </tr>
      </thead>
      <tbody>
        {listOfTodos.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>
                {editingTodoId === todo.id ? (
                  <input
                    type="text"
                    value={editedTodoText}
                    onChange={(e) => setEditedTodoText(e.target.value)}
                  />
                ) : (
                  todo.text
                )}
              </td>
              <td>
                <input
                  type="checkbox"
                  value={todo.done}
                  checked={todo.done}
                  onChange={() => {
                    markTodoAsDone(todo);
                  }}
                />
              </td>
              <td>
                {editingTodoId === todo.id ? (
                  <>
                    <button onClick={() => handleSaveEdit(todo)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(todo)}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Todos.propTypes = {
  listOfTodos: PropTypes.arrayOf(PropTypes.object),
  markTodoAsDone: PropTypes.func,
  editTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};
