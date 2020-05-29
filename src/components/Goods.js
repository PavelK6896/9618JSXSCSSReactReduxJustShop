import React from "react";
import {NavLink} from "react-router-dom";

export const Goods = (props) => {
    return (
        <div className="card" style={{
            maxWidth: "10vw",
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            <NavLink to={"/catalog/" + props.key2}>
                <img className="card-img-top"
                     src={props.src}
                     alt={props.name}
                     title={props.name}
                     width={100}
                     height={100}
                />
                <div className="card-body">
                    <p className="card-text">Подробнее</p>
                </div>
            </NavLink>
        </div>
    )
}


