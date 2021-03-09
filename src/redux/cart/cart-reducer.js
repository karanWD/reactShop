import {cartActionTypes} from "./cartActionType";

const INITIAL_STATE = {
    openCart:false,
    cartItems:null,
    addCartSuccess : false,
    addCartFail : false,
    cartSuccessText:null
}

const cartReducer = (state= INITIAL_STATE , action ) => {
    switch (action.type) {
        case cartActionTypes.OPEN_CART:
            return {
                ...state,
                openCart:true
            }
        case cartActionTypes.CLOSE_CART:
            return {
                ...state,
                openCart: false,
                addCartSuccess: false,
                addCartFail: false
            }
        case cartActionTypes.FETCH_CART:
            return {
                ...state,
                cartItems:action.payload
            }
        case cartActionTypes.ADD_CART_SUCCESS:
            return {
                ...state,
                addCartSuccess: true,
                cartSuccessText: action.payload
            }
        case cartActionTypes.ADD_CART_FAIL :
            return {
                ...state,
                addCartFail: true
            }

        default : return state
    }
}

export default cartReducer
