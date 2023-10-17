import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./../actions/CounterActions";

export const CounterFunc = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.CounterReducer.count);

  return (
    <div id="counter-func">
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
