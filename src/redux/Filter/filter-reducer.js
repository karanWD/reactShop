import {filterActionType} from "./filterActionType";

const INITIAL_STATE = {
    brand:null,
    price:null,
    maxPrice:null,
}

const filterReducer = (state = INITIAL_STATE , action)=>{
    switch (action.type) {
        case filterActionType.FETCH_FILTER_BRAND :
            return{
                ...state,
                brand:action.payload
            }
        case filterActionType.FETCH_FILTER_PRICE:
            return {
                ...state,
                price:action.payload
            }
        case filterActionType.FETCH_PRICE_MAX:
            return {
                ...state,
                maxPrice: action.payload
            }
        default : return {
            ...state
        }
    }

}

export default filterReducer