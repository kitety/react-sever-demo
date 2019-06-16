import React from "react";
import ReactDom from "react-dom";
import Home from "../containers/Home";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import { createStore } from "redux";
import { Provider } from "react-redux";


const reducer = (state = { name: "Tom" }, action) => {
  return state;
};
const store = createStore(reducer);
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{Routes}</BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));
