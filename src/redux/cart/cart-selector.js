import {createSelector} from "reselect";

export const cartSelector = state =>{
    return state.cart
}
export const cartItemsSelector = createSelector(
    [cartSelector] , item => item ? item.cartItems : item
)
export const addCartSuccessSelector = createSelector(
    [cartSelector],item => item ? item.addCartSuccess : item)

export const cartSuccessTextSelector = createSelector(
    [cartSelector],item => item ? item.cartSuccessText : item)

export const addCartFailSelector = createSelector(
    [cartSelector],item => item ? item.addCartFail : item)

// export const cartItemsSelectorLength = state => state.cart.cartItems ? state.cart.cartItems.data.length : state.cart.cartItems
