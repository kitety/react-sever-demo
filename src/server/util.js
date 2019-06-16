// 服务器渲染
import { renderToString } from "react-dom/server";
// 注意路由的改变
import { StaticRouter } from "react-router-dom";
// JSX
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

// 路由文件
import Routes from "../Routes";

export const render = req => {
  const reducer = (state = { name: "Tom" }, action) => {
    return state;
  };
  const store = createStore(reducer);
  const content = renderToString(
    // context ssr过程的数据传递
    // StaticRouter不能感知路径，因此传递路径
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        {Routes}
      </StaticRouter>
    </Provider>
  );
  // div#root里面不要有空白
  return `
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `
};
