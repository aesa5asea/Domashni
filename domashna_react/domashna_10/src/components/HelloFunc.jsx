import { useEffect } from "react";
import { generalKenobi, sayHello } from "./../actions/SayHelloActions";
import { useSelector, useDispatch } from "react-redux";

export const HelloFunc = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.SayHelloReducer.greeting);
  const starwars = useSelector((state) => state.SayHelloReducer.starwars);

  useEffect(() => {
    dispatch(sayHello());
    dispatch(generalKenobi());
  }, [dispatch]);

  return (
    <div id="hello-func">
      <h2>{greeting}</h2>
      <h2>{starwars}</h2>
    </div>
  );
};
