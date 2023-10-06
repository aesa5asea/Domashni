import { Posts } from "./components/Posts";
import { Todos } from "./components/Todos";
import { Navigation } from "./components/Navigation";
import { NotFound } from "./components/NotFound";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

export function App() {
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div id="app">
      <Routes>
        <Route
          path="/"
          element={<Navigation />}
        />
        <Route
          path="/posts"
          element={<Posts postsList={posts} />}
        />
        <Route
          path="/todos"
          element={
            <Todos
              todos={todos}
              setTodos={setTodos}
            />
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}
