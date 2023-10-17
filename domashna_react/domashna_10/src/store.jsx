import { configureStore } from "@reduxjs/toolkit"; // za kreiranje na store
import logger from "redux-logger"; // fiskalen aparat
import SayHelloReducer from "./reducers/SayHelloReducer"; // vraboteniot
import CounterReducer from "./reducers/CounterReducer";

const reducer = {
  // tuka treba da se navedat site vraboteni
  SayHelloReducer: SayHelloReducer,
  CounterReducer: CounterReducer,
};

export default configureStore({
  reducer: reducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
