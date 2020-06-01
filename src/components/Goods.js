import React from "react";
import {NavLink} from "react-router-dom";

export const Goods = (props) => {
    return (
        <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
                    <NavLink to={"/catalog/" + props.key2}>
                        <div style={{
                            position: 'relative',
                            height: '40vh',
                            overflow:'hidden',
                        }}>
                        <img className="bd-placeholder-img card-img-top"
                             src={props.src}
                             alt={props.name}
                             title={props.name}
                             style={{
                                 position: 'absolute',
                             }}
                        />
                        </div>
                        <div className="card-body" >
                            <p className="card-text">Подробнее</p>
                        </div>
                    </NavLink>
                <div className="d-flex justify-content-end align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Сравнить</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


