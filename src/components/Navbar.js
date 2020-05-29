import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <NavLink className="navbar-brand" to="/main" width="30" height="30" alt="" style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '5px',
        }}>
            KC
        </NavLink>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/main">Главная <span
                    className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/catalog">Каталог</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contacts"> Контакты </NavLink>
            </li>
        </ul>
        <hr/>
    </nav>
)


