import React from "react";
import { NavLink } from "react-router-dom";
import snacks from "./snacks";
import "./NavBar.css";

const NavBar = () => {
    
    return (
        <nav className="NavBar">
            <NavLink to="/vending" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } end>Home</NavLink>
            {snacks.map(snack => (
            <NavLink to={`/vending/${snack.name}`} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } end>{snack.name}</NavLink>
        ))}
        </nav>
    )
}

export default NavBar;