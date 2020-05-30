import React from "react";
import {NavLink} from "react-router-dom";
import navbar from './Navbar.scss';

export const Navbar = () => {

    const navbarClasses = ["navbar"]

    return (
        <nav className={navbarClasses.join(' ')}>
            <NavLink className="navbar-brand" to="/main" width="30" height="30" alt="" >
                KC
            </NavLink>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/main">Главная </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/catalog">Каталог</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contacts"> Контакты </NavLink>
                </li>
            </ul>
        </nav>
    )
}

