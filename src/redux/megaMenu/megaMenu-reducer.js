import {megaMenuActionType} from "./megaMenuActionType";

const INITIAL_STATE = {
    megaCat:null
}

const megaReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case megaMenuActionType.FETCH_MEGA :
            return{
                ...state,
                megaCat:action.payload
            }
        default : return state
    }
}

export default megaReducer