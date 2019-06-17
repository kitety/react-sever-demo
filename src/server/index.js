import express from "express";
import { render } from "./util";
// matchRoutes多层  用于多级路由
import { matchRoutes, renderRoutes } from "react-router-config";
import getStore from "../store";
// 路由文件
import routes from "../Routes";
import proxy from "express-http-proxy";

const app = express();
// 可以以设置路由，但是很多的话推荐设置静态资源
app.use(express.static("public"));
// 使用代理转发
/**
 * /api/posts
 * req.utl == /posts
 */
app.use(
  "/api",
  proxy("https://jsonplaceholder.typicode.com/", {
    proxyReqPathResolver: function(req) {
      return req.url;
    }
  })
);
const port = 3000;
// 任何路由都走这里
app.get("*", (req, res) => {
  // render(req)是异步的代码，因此会返回空
  // res.send(render(req, res));
  // 在异步里面返回
  // render(req, res)
  const store = getStore();
  // 根据路由的路径添加数据
  const promises = [];
  const matchedRoutes = matchRoutes(routes, req.path);
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });
  Promise.all(promises).then(() => {
    res.send(render(req, store, routes));
  });
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
