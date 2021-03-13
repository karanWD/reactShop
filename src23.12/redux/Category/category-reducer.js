import {categoryType} from "./categoryType";

const INITIAL_STATE = {
    catItem:null
}

const categoryReducer = (state=INITIAL_STATE , action ) => {
    switch(action.type){
        case categoryType.FETCH_CATEGORY:
            return {
                ...state,
                catItem:action.payload
            }
        default:
            return state
    }
}

export default categoryReducer