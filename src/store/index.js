import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";

const reducer = combineReducers({ home: homeReducer });
// 避免所有的都是同一个store
// const store = createStore(reducer, applyMiddleware(ReduxThunk));
const getStore = function() {
  return createStore(reducer, applyMiddleware(ReduxThunk));
};
export default getStore;
