import {checkoutActionType} from "./CheckoutActionType";

const INITIAL_STATE = {
    openedAccordion:"delivery"
}

 const checkoutReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case checkoutActionType.OPEN_ACCORDION :
            return{
                ...state,
                openedAccordion: action.payload
            }
        default : return state
    }
}

export default checkoutReducer