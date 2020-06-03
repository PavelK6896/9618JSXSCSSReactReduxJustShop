import React, {useState} from "react";
import {NavLink} from "react-router-dom";


export const Navbar = () => {

    const [state, setState] = useState({hover: false});

    function toggleHover() {
        setState({hover: true})
    }

    function toggleNoHover() {
        setState({hover: false})
    }

    let linkStyle;
    if (state.hover) {
        linkStyle = {
            position: 'absolute',
            zIndex: 2,

            display: 'flex',
            flexDirection: 'column',
        }
    } else {
        linkStyle = {
            display: 'none'
        }
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container">
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
                    <li className="nav-item" onMouseLeave={toggleNoHover} onClick={toggleHover}>
                        <div style={{
                            cursor: 'pointer'
                        }} className="nav-link">Список
                        </div>
                        <ul style={linkStyle} className="navbar-nav  bg-dark">
                            <li className="nav-item" onClick={toggleNoHover}><a href="#1" className="nav-link">Список
                                1</a></li>
                            <li className="nav-item"><a href="#2" className="nav-link" onClick={toggleNoHover}>Список
                                2</a></li>
                            <li className="nav-item"><a href="#3" className="nav-link" onClick={toggleNoHover}>Список
                                3</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/trainer"> Тренер </NavLink>
                    </li>
                </ul>
                <hr/>
            </div>

        </nav>
    )
}


