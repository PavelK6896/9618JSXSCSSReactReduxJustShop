import ImgJpg3 from "../../../img/4.jpg";

const initialState = {
    sda2: 1,
    cars2: [
        {name: 'UAZ4', year: '2010', src: ImgJpg3, options: 'text4 ......'},
    ]
}
export default function cars2(state = initialState, action) {
    switch (action.type) {
        case 'GET2':
            return state
        default:
            return state
    }
}