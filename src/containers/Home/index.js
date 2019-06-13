import React from "react"; //=>esModule
// const React = require("react"); //=>commonjs

export default function Home() {
  return (
    <div>
      <div>Welcome To Home</div>
      <button onClick={()=>{alert(1212)}}>Click</button>
    </div>
  );
}
// module.exports = {
//   default: Home
// };
