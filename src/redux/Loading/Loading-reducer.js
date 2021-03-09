import {LoadingAtionType} from "./LoadingActionType";

const INITIAL_STATE = {
    loading : "false"
}

const loadingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LoadingAtionType.LOADING :
            return {
                ...state,
                loading : action.payload
            }
        default : return state
    }
}

export default loadingReducer