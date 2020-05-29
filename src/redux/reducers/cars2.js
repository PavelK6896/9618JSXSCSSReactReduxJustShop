import ImgJpg1 from "../img/jpg/1.jpg";
import ImgJpg2 from "../img/jpg/2.jpg";
import ImgJpg3 from "../img/jpg/3.jpg";
import ImgJpg4 from "../img/jpg/4.jpg";


const initialState = {
    sda2: 1,
    cars2: [
        {
            name: 'UAZ.10',
            year: '2020',
            src: ImgJpg1,
            BriefDescription: "text BriefDescription",
            Specifications: "text Specifications",
            DetailedDescription: "text DetailedDescription"
        },
        {
            name: 'UAZ.20',
            year: '2020',
            src: ImgJpg2,
            BriefDescription: "text BriefDescription",
            Specifications: "text Specifications",
            DetailedDescription: "text DetailedDescription"
        },
        {
            name: 'UAZ.30',
            year: '2020',
            src: ImgJpg3,
            BriefDescription: "text BriefDescription",
            Specifications: "text Specifications",
            DetailedDescription: "text DetailedDescription"
        },
        {
            name: 'UAZ.40',
            year: '2020',
            src: ImgJpg4,
            BriefDescription: "text BriefDescription",
            Specifications: "text Specifications",
            DetailedDescription: "text DetailedDescription"
        },
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