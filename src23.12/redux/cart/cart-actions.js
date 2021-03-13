import {cartActionTypes} from "./cartActionType";

export const openCart = () => ({
    type:cartActionTypes.OPEN_CART,
    payload:null
})
export const closeCart = () => ({
    type:cartActionTypes.CLOSE_CART,
    payload:null
})
export const fetchCart = (data) => ({
    type:cartActionTypes.FETCH_CART,
    payload:data
})
export const addCartSuccess = (data) => ({
    type : cartActionTypes.ADD_CART_SUCCESS,
    payload:data
})

export const addCartFail = () => ({
    type : cartActionTypes.ADD_CART_FAIL,
    payload:null
})