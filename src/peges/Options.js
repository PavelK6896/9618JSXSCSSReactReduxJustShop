import React from 'react';
import {connect} from "react-redux";
import {Navbar} from "../components/Navbar";
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, quisquam?
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid eos eum excepturi
                            ipsa necessitatibus!
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa dolorum in magni
                            maxime minus nesciunt pariatur quia vel. Amet assumenda facilis fuga, fugiat non odit qui
                            rem velit vitae?
                        </p>
                    </div>


                    <label>Название: {props.cars[props.match.params.id].name}</label>

                    <label>Год: {props.cars[props.match.params.id].year}</label>

                    <label>Описание: {props.cars[props.match.params.id].text}</label>


                </div>
            </main>
            <Footer/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cars: state.cars1.cars1
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getI: id => dispatch({type: 'GET', payload: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options)


