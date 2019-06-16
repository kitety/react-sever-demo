import React from "react"; //=>esModule
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
}
