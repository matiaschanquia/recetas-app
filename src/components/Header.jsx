import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-big.png";

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">
                <h1 className="logo">
                    <img src={logo} alt="logo recetas app" />
                    Recetas App
                </h1>
            </NavLink>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "linkActive" : ""}>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/random" className={({ isActive }) => isActive ? "linkActive" : ""}>
                            <span>Random</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
