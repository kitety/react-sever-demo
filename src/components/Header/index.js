import React from "react"; //=>esModule
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  // console.log(props);
  return (
    <div>
      <Link to="/">首页</Link>
      <br />
      {props.isLogin ? (
        <>
          <Link to="/more">更多</Link>
          <Link to="/logout">退出</Link>
        </>
      ) : (
        <Link to="/login">登录</Link>
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogin: state.header.isLogin
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(actionCreator);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
