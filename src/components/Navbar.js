import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavbarTop() {
  return (
    <div className="NavLinks">
      <Link to="/">Home</Link>
      <Link to="/countries">Countries</Link>
    </div>
  );
}
