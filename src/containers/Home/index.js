import React from "react"; //=>esModule
import Header from "../../components/Header";
import { connect } from "react-redux";

function Home(props) {
  return (
    <div>
      <Header />
      <div>{props.name},Welcome To Home</div>
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
const mapStateToProps = (state, ownProps) => {
  return {
    name: state.name
  };
};
export default connect(
  mapStateToProps,
  null
)(Home);
/**
// const React = require("react"); //=>commonjs
// module.exports = {
//   default: Home
// };
 */
