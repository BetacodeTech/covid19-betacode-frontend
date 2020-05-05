import { createStore, applyMiddleware } from "redux"
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import infection from "./infection";
import mode from "./mode";

const reducers = combineReducers({infection,mode});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
