import {carouselTypes} from "./carousel.types";

const INITIAL_STATE= {
    carouselItem:null
}

const carouselReducer = (state= INITIAL_STATE , action)=>{
    switch (action.type) {
        case carouselTypes.CAROUSEL_FETCH :
            return{
                    ...state,
                    carouselItem:action.payload
                }
        default:
            return state
    }
}

export default carouselReducer