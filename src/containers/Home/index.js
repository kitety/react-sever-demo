import React, { Component } from "react"; //=>esModule
import { connect } from "react-redux";
import { homeActions } from "./store";

class Home extends Component {
  getList = () => {
    return this.props.list.map(list => (
      <div key={list.id}>
        {list.id}:{list.title}
      </div>
    ));
  };
  render() {
    return (
      <div>
        <div>{this.props.name},Welcome To Home</div>
        {this.props.list.length > 0 && this.getList()}
        <div>
          <button
            onClick={() => {
              console.log(new Date());
            }}
          >
            Click
          </button>
        </div>
      </div>
    );
  }
  // 只会在客户端渲染的时候被执行，ssr的时候不会执行
  componentDidMount() {
    if (!this.props.list.length) {
      // client运行
      this.props.getNewsList();
    }
  }
  static loadData = store => {
    // 这个函数在服务器端渲染之前路有需要的数据加载好
    // true 是在server运行的
    return store.dispatch(homeActions.getNewsLIst());
  };
}
const mapStateToProps = (state, ownProps) => {
  return {
    name: state.home.name,
    list: state.home.newsList
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNewsList: () => {
      dispatch(homeActions.getNewsLIst());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
/**
// const React = require("react"); //=>commonjs
// module.exports = {
//   default: Home
// };
 */
