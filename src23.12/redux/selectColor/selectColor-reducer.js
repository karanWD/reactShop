import {selectColorActionType} from "./selectColorActionType";

const INITIAL_STATE = {
    colorExist:null,
    colorSelected:null
}

export const selectColorReducer = (state=INITIAL_STATE,action)=> {
    switch (action.type) {
        case selectColorActionType.FETCH_COLOR_EXIST :
            return{
                ...state,
                colorExist:action.payload
            }
        case selectColorActionType.PRODUCT_COLOR_SELECTED:
            return {
                ...state,
                colorSelected:action.payload
            }
        default :
            return state
    }
}