import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <NavLink to="all-recipes">AllRecipes</NavLink>
        </li>
      </ul>
    </nav>
  );
}
