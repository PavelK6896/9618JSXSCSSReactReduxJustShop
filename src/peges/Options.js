import React from 'react';
import {connect} from "react-redux";
import {Navbar} from "../components/Navbar/Navbar";
import {Footer} from "../components/Footer";

const Options = (props) => {
    return (
        <div>
            <Navbar/>
            <main style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <img src={props.cars[props.match.params.id].src}
                     alt={props.name}
                     title={props.name}
                     width={500}
                     height={500}
                />
                <div style={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: 'center',
                    flexDirection: "column",
                    margin: 10,
                    padding: 10
                }}>
                    <h3>Название: {props.cars[props.match.params.id].name} Год: {props.cars[props.match.params.id].year}</h3>
                    <div style={{
                        fontSize: '18px',
                        fontWeight: 400,
                        background: '#eaeaea'
                    }}>
                        <h3 className="OptionsH3"> Краткое описание товара</h3>
                        <p style={{
                            color: '#707070',
                            fontSize: '14px',
                            fontStyle: 'italic',
                            lineHeight: '16px'
                        }}>
                            {props.cars[props.match.params.id].BriefDescription}
                            &nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <h3 className="OptionsH3"> Характеристики</h3>
                        <p style={{
                            color: '#ccc',
                            fontSize: '26px',
                            fontWeight: 1000,
                            fontStyle: 'italic',
                            lineHeight: '36px',
                            textAlign: 'center',
                        }}>
                            {props.cars[props.match.params.id].Specifications}
                            &nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <h3 className="OptionsH3"> Подробное описание товара</h3>
                        <p style={{
                            color: '#484343',
                            fontSize: '16px',
                            fontWeight: 400,
                            fontStyle: 'italic',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}>
                            {props.cars[props.match.params.id].DetailedDescription}
                            &nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cars: [...state.cars1.cars1, ...state.cars2.cars2]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getI: id => dispatch({type: 'GET', payload: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options)


