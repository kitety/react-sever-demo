import React, { Component } from "react"; //=>esModule
import Header from "../../components/Header";
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
        <Header />
        <div>{this.props.name},Welcome To Home</div>
        {this.props.list.length > 0 && this.getList()}
        <button
          onClick={() => {
            console.log(new Date());
          }}
        >
          Click
        </button>
      </div>
    );
  }
  // 只会在客户端渲染的时候被执行，ssr的时候不会执行
  componentDidMount() {
    // this.props.getNewsList();
  }
  static loadData = store => {
    return store.dispatch(homeActions.getNewsLIst());
    // this.props.getNewsList();
    // 这个函数在服务器端渲染之前路有需要的数据加载好
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
