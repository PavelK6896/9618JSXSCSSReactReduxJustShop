import React from "react";
import {NavLink} from "react-router-dom";

export const Goods = (props) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <NavLink to={"/catalog/" + props.key2}>
                    <img className="bd-placeholder-img card-img-top"
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
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Сравнить</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


