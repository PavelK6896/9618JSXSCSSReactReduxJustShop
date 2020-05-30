import React from "react";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {Goods} from "../components/Goods";
import {connect} from 'react-redux'

const Catalog = (props) => {
    return (
        <>
            <Navbar/>
            <main className="main">
                <div className="container">
                    <div className="row">
                        {
                            props.cars.map((car, index) => {
                                return (
                                    <Goods
                                        key={index}
                                        key2={index}
                                        year={car.year}
                                        name={car.name}
                                        src={car.src}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

function mapStateToProps(state) {
    return {
        cars: [...state.cars1.cars1, ...state.cars2.cars2]
    }
}

export default connect(mapStateToProps)(Catalog)