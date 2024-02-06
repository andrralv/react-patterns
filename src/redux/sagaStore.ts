import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo";

export type StateType = {
  // Reducers types here
};

const rootReducers = {
  todoReducer
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware],
});

export default store;