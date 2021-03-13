import {sliderType} from "./sliderType"
const INITIAL_STATE = {
    sliderItem:null
}

const sliderReducer =(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case sliderType.FETCH_SLIDER :
            return {
                ...state,
                sliderItem : action.payload
            }
        default:
            return state
    }
}

export default sliderReducer