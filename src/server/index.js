import express from "express";
import {render} from './util'

const app = express();
// 可以以设置路由，但是很多的话推荐设置静态资源
app.use(express.static("public"));

const port = 3000;
// 任何路由都走这里
app.get("*", (req, res) => {
  res.send(render(req));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
/**
 * 部分注释
 // 浏览器中
 // ReactDom.render(<Home/>,document.getElementById('root'))
 // commonjs
 // const express = require("express");
 // const Home = require("./containers/Home/index");
 */

