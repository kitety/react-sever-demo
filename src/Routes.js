import { Route } from "react-router-dom";
import React from "react";
import Home from "./containers/Home";
import Login from "./containers/Login";
import App from "./App";

export default [
  {
    path: "/",
    component: App,
    // 只要带了'/'就返回App
    exact: false,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
        loadData: Home.loadData,
        key: "home"
      },
      {
        path: "/login",
        exact: true,
        component: Login,
        key: "login"
      }
    ]
  }
];
