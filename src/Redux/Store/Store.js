import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReducerFunc from "../Reducers/ReducerFunc";

const store = createStore(ReducerFunc, composeWithDevTools());

export default store;
