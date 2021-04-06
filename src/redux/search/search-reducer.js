import {searchActionType} from "./searchActionType";

const INITIAL_STATE = {
    searchMobileToggle : false
}
const searchReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case searchActionType.SEARCH_MOBILE_TOGGLE :
            return {
                ...state,
                searchMobileToggle: !state.searchMobileToggle
            }
        default :
            return state
    }
}

export default searchReducer