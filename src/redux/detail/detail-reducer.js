import {detailActionType} from "./detail-actionType";

const INITIAL_STATE = {
    detailItem:null,
}

const detailReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type) {
        case  detailActionType.FETCH_DETAIL:
            return{
                ...state,
                detailItem : action.payload
            }
        default:
            return state
    }
}

export default detailReducer

