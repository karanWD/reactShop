import {brandActionType} from "./BrandActionType";

const INITIAL_STATE = {
    brandItem:null
}

const brandReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case  brandActionType.FETCH_BRAND_LIST :
            return{
                ...state,
                brand:action.payload
            }
        default : return state

    }
}

export default brandReducer