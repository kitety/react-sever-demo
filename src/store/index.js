import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";
import { reducer as headerReducer } from "../components/Header/store";
import Axios from "../common/request";

const reducer = combineReducers({ home: homeReducer, header: headerReducer });
// 避免所有的都是同一个store
// const store = createStore(reducer, applyMiddleware(ReduxThunk));
export const getStore = function() {
  return createStore(
    reducer,
    applyMiddleware(ReduxThunk.withExtraArgument(Axios))
  );
};
export const getClientStore = function() {
  // 数据脱水
  const defaultState = window.context.state;
  // 初始化默认值
  const store = createStore(
    reducer,
    defaultState,
    applyMiddleware(ReduxThunk.withExtraArgument(Axios))
  );
  // 清楚数据
  delete window.context;
  return store;
};
export default getStore;
