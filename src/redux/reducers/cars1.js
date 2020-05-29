import ImgPng1 from "../../../img/1.png";
import ImgJpg1 from "../../../img/1.jpg";
import ImgJpg2 from "../../../img/2.jpg";

const initialState = {
    cars1: [
        {name: 'UAZ1', year: '2020', src: ImgPng1, text: 'UAZ1 text ...'},
        {name: 'UAZ2', year: '2018', src: ImgJpg1, text: 'UAZ2 text ...'},
        {name: 'UAZ3', year: '2002', src: ImgJpg2, text: 'UAZ3 text ...'},
    ]
}

export default function cars1(state = initialState, action) {
    switch (action.type) {
        case 'GET':
            return state
        default:
            return state
    }
}