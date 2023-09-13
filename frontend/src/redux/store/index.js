import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const CreateStore = () => {
  return configureStore({ reducer: rootReducer, middleware: [thunk] });
};

export default CreateStore;
