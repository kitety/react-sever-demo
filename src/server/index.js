// const express = require("express");
import express from "express";
// JSX
import React from "react";
// 服务器渲染
import { renderToString } from "react-dom/server";
// const Home = require("./containers/Home/index");
import Home from "../containers/Home";

const app = express();
// 可以以设置路由，但是很多的话推荐设置静态资源
app.use(express.static("public"));
// 浏览器
// ReactDom.render(<Home/>,document.getElementById('root'))

const port = 3000;
const content = renderToString(<Home />);
app.get("/", (req, res) =>
// div#root里面不要有空白
  res.send(`
  <html>
    <head>
      <title>SSR</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
    </body>
  </html>
  `)
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
