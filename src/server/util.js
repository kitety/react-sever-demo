// 服务器渲染
import { renderToString } from "react-dom/server";
// 注意路由的改变
// matchPath 只一层
import { StaticRouter, Route, matchPath } from "react-router-dom";
// JSX
import React from "react";
// 多级路由的解析
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

export const render = (req, store, routes) => {
  // console.log(store.getState().home);
  const content = renderToString(
    // 直接这样使用 就是所有的用户用的是同样的数据，尽量每个用户独享一个store。返回方法再返回store  就独立起来了
    <Provider store={store}>
      {/* context ssr过程的数据传递  StaticRouter不能感知路径，因此传递路径 */}
      <StaticRouter context={{}} location={req.path}>
        <div>
        {/*这里只会渲染一级路由，，并且会将二级路由传递给一级路由的组件App */}
          {renderRoutes(routes)}
        </div>
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
          <script>
          // 数据注水
          window.context={
            state:${JSON.stringify(store.getState())}
          }
          </script>
          <script src="/index.js"></script>
        </body>
      </html>
    `;
};
