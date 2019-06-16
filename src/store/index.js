import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";

const reducer = combineReducers({ home: homeReducer });
// 避免所有的都是同一个store
// const store = createStore(reducer, applyMiddleware(ReduxThunk));
export const getStore = function() {
  return createStore(reducer, applyMiddleware(ReduxThunk));
};
export const getClientStore = function() {
  // 数据脱水
  const defaultState = window.context.state;
  // 初始化默认值
  const store = createStore(reducer, defaultState, applyMiddleware(ReduxThunk));
  // 清楚数据
  delete window.context;
  return store;
};
export default getStore;
