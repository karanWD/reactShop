import {breadcrumbActionType} from "./breadcrumb-actionType";

const INITIAL_STATE = {
    breadcrumbItem:null
}

const breadcrumbReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case breadcrumbActionType.FETCH_BREADCRUMB :
            return{
             ...state,
             breadcrumbItem:action.payload
            }
        default :
            return state
    }
}

export default breadcrumbReducer