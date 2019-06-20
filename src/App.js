import React from "react"; //=>esModule
import { renderRoutes } from "react-router-config";
import Header from "./components/Header/";
import { actions } from "./components/Header/store";

function App(props) {
  return (
    <>
      <Header />
      {/* 显示对应的页面的内容，渲染二级路由 */}
      {renderRoutes(props.route.routes)}
    </>
  );
}
App.loadData = (store) => {
  store.dispatch(actions.getHeaderInfo());
};
export default App;
