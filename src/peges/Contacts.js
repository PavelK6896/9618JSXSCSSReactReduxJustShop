import React from "react";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {YMaps, Map, Placemark} from "react-yandex-maps";

export const Contacts = () => {
    const mapData = {
        center: [55.7847, 37.7385],
        zoom: 12,
    };

    const coordinates = [
        [55.7847, 37.7385]
    ];

    return (
        <>
            <Navbar/>
            <main className="main">
                <div className="container">
                    <label htmlFor="exampleFormControlInput1">Напишите нам</label>
                    <form>
                        <div className="form-group">
                            <input type="name" className="form-control" id="exampleFormControlInput2"
                                   placeholder="Имя"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleFormControlInput19"
                                   placeholder="Тема"/>
                        </div>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">
                    </textarea>
                        <button type="submit" className="btn btn-dark mb-3 float-md-right">send</button>
                        <button type="reset" className="btn btn-dark mb-3">delete</button>
                    </form>
                    <div className="d-flex justify-content-around align-items-center">
                        <div>
                            <div className="text-body">
                                <h3>Адрес:</h3>
                                <p>+78209596986<br/>Moscow<br/>78209596986@mail.com</p>
                            </div>
                            <YMaps>
                                <Map defaultState={mapData}>
                                    {coordinates.map(coordinate => <Placemark key={coordinate.toString()}
                                                                              geometry={coordinate}/>)}
                                </Map>
                            </YMaps>
                        </div>
                        <div style={{
                            maxWidth: '30vw'
                        }}>
                            <div>
                                <h6>Отзыв 1</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus,
                                    exercitationem harum impedit quis reprehenderit?</p>
                            </div>
                            <div>
                                <h6>Отзыв 2</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus,
                                    exercitationem harum impedit quis reprehenderit?</p>
                            </div>
                            <div>
                                <h6>Отзыв 3</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus,
                                    exercitationem harum impedit quis reprehenderit?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}