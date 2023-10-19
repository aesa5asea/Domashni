import { Routes, Route } from "react-router-dom";
import { Cake } from "./components/Cake";
import { Comments } from "./components/Comments";
import { Todos } from "./components/Todos";
import { Nav } from "./components/Nav";

export function App() {
  return (
    <div id="app">
      <h1>Hello!</h1>
      <Nav />
      <Routes>
        <Route
          path="/cake"
          element={<Cake />}
        />
        <Route
          path="/comments"
          element={<Comments />}
        />
        <Route
          path="/todos"
          element={<Todos />}
        />
      </Routes>
    </div>
  );
}
