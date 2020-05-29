import ImgPng1 from "../img/png/1.png";
import ImgPng2 from "../img/png/2.png";
import ImgPng3 from "../img/png/3.png";
import ImgPng4 from "../img/png/4.png";

const initialState = {
    cars1: [
        {
            name: 'UAZ.1',
            year: '2020',
            src: ImgPng1,
            BriefDescription: "text BriefDescription",
            Specifications: "text Specifications",
            DetailedDescription: "text DetailedDescription"
        },
        {
            name: 'UAZ.2',
            year: '2020',
            src: ImgPng2,
            BriefDescription: "text BriefDescription",
            Specifications: "text Specifications",
            DetailedDescription: "text DetailedDescription"
        },
        {
            name: 'UAZ.3',
            year: '2020',
            src: ImgPng3,
            BriefDescription: "text BriefDescription",
            Specifications: "text Specifications",
            DetailedDescription: "text DetailedDescription"
        },
        {
            name: 'UAZ.4',
            year: '2020',
            src: ImgPng4,
            BriefDescription: "text BriefDescription",
            Specifications: "text Specifications",
            DetailedDescription: "text DetailedDescription"
        },
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