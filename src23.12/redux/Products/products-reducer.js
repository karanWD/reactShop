import {productsActionType} from "./productsActionType";

const INITIAL_STATE ={
    productsItem:null
}

const productsReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case productsActionType.FETCH_PRODUCTS :
            return{
                ...state,
                productsItem : action.payload
            }
        default:return state
    }
}

export default productsReducer