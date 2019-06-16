import { Route } from "react-router-dom";
import React from "react";
import Home from "./containers/Home";
import Login from "./containers/Login";

const routes = [
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
];

export default routes;
