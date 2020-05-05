import { createStore, applyMiddleware } from "redux"
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import infection from "./infection";
import chartInfo from "./chartInfoModal"

const reducers = combineReducers({infection, chartInfo});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
