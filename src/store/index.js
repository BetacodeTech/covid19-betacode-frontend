import { createStore, applyMiddleware } from "redux"
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import infection from "./infection";

const reducers = combineReducers({infection});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
