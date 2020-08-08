import React from 'react';
import { Link } from "react-router-dom";
import CSS from 'csstype';

export default function Header() {
  return (
    <div className="header">
      <header style={headerStyle}>
        This is my header!
        <div>
          <Link to="/">Home</Link>{" | "}
          <Link to="/methods">Solve</Link>{" | "}
          <Link to="/about">About</Link>
        </div>
      </header>
    </div>
  )
}

const headerStyle: CSS.Properties = {
  padding: "60px",
  textAlign: "center",
  background: "#1abc9c",
  color: "white",
  fontSize: "30px"
}