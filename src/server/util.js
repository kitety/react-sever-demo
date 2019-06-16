// 服务器渲染
import { renderToString } from "react-dom/server";
// 注意路由的改变
// matchPath 只一层
import { StaticRouter, Route, matchPath } from "react-router-dom";
// matchRoutes多层  用于多级路由
import { matchRoutes, renderRoutes } from "react-router-config";
// JSX
import React from "react";
import { Provider } from "react-redux";
import getStore from "../store";

// 路由文件
import routes from "../Routes";

export const render = (req,res) => {
  const store = getStore();
  // 根据路由的路径添加数据
  const promises = [];
  const matchedRoutes = matchRoutes(routes, req.path);
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });
  Promise.all(promises).then(result => {
    // console.log(store.getState().home);
    const content = renderToString(
      // 直接这样使用 就是所有的用户用的是同样的数据，尽量每个用户独享一个store。返回方法再返回store  就独立起来了
      <Provider store={store}>
        {/* context ssr过程的数据传递  StaticRouter不能感知路径，因此传递路径 */}
        <StaticRouter context={{}} location={req.path}>
          <div>
            {routes.map(route => (
              <Route {...route} key={route.path} />
            ))}
          </div>
        </StaticRouter>
      </Provider>
    );
    // div#root里面不要有空白
    res.send( `
      <html>
        <head>
          <title>SSR</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script src="/index.js"></script>
        </body>
      </html>
    `);
  }).catch(err=>{
    console.log(err)
  });
};
