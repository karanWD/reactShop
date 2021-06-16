import {priceActionType} from "./priceActionsType";

const INITIAL_STATE = {
    priceColorVar:0,
    priceSizeVar:0
}

const priceReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case priceActionType.FETCH_PRICE_VAR :
            return {
                ...state,
                priceColorVar : action.payload
            }
        case priceActionType.FETCH_PRICE_SIZE_VAR :
            return {
                ...state,
                priceSizeVar : action.payload
            }
        default : return  state
    }
}

export default priceReducer