import {alertActionType} from "./AlertActionType";

const INITIAL_STATE = {
    count:false
}

const alertReducer = ( state=INITIAL_STATE , action) => {
    switch (action.type) {
        case alertActionType.FETCH_ALERT :
            return {
                ...state,
                count : !state.count
            }
        default : return state
    }
}

export default alertReducer