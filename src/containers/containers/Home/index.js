// import React from "react";  =>esModule
const React = require("react"); //=>commonjs

const Home = () => {
  return <div>Home</div>;
};
module.exports = {
  default: Home
};
