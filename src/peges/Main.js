import React from "react";

import {Header} from "../components/Header";
import {Navbar} from "../components/Navbar/Navbar";
import {Footer} from "../components/Footer";

export const Main = () => {

    return (
        <div>
            <Navbar/>
            <Header/>
            <main className="mx-auto text-body mx-md-5">
                <p>Добро пожаловать в "Красно-Серый"!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores assumenda autem, corporis,
                    earum est et expedita facere facilis fugiat fugit minus, nemo praesentium provident quidem sapiente
                    sunt tempora ut!
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores assumenda autem, corporis,
                    earum est et expedita facere facilis fugiat fugit minus, nemo praesentium provident quidem sapiente
                    sunt tempora ut!
                </p>
            </main>
            <Footer/>
        </div>
    )
}