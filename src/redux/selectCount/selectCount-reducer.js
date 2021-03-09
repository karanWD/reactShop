import {selectCountActionType} from "./selectCountActionType";

const INITIAL_STATE = {
    proCount:0
}

const selectCountReducer = (state =INITIAL_STATE,action)=>{
    switch (action.type) {
        case selectCountActionType.SELECT_COUNT :
            return {
                ...state,
                proCount: action.payload
            }
        default :
            return state

    }
}

export default selectCountReducer