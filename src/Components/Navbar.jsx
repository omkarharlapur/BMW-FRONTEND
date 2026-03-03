import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"
import Profile from "../Pages/Profile";
import About from "../Pages/About"
export default function Navbar(){
    return (
        <nav>
            <div className="logo">
                <img src="bmw_white_logo.svg" alt="" />
            </div>
            <div className="nav-container">
                <ul className="nav-links">
                    <li><NavLink to={"/"}>HOME</NavLink></li>
                    <li><NavLink to={"/about"}>ABOUT</NavLink></li>
                    <li><NavLink to={"/profile"}>PROFILE</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}