/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CakeReducer from "./reducers/CakeReducer";
import CommentsReducer from "./reducers/CommentsReducers";
import TodosReducer from "./reducers/TodosReducer";

const reducer = {
  CakeReducer: CakeReducer,
  CommentsReducer: CommentsReducer,
  TodosReducer: TodosReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// namesto da ima buttons da ima input field kolku torti sakame da kupime i da se odzemi i
//isto da bide za dodavanje na torti i da ne mozhe da se vnesat gluposti vo input fieldot
