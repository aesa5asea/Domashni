// import Hello from "./components/Hello";
import { HelloFunc } from "./components/HelloFunc";
import { CounterFunc } from "./components/CounterFunc";

export function App() {
  return (
    <div id="app">
      <h1>Hello!</h1>
      <HelloFunc />
      <CounterFunc />
    </div>
  );
}
