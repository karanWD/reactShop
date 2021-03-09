import {productsActionType} from "./productsActionType";

export const fetchProducts = data => ({
    type:productsActionType.FETCH_PRODUCTS,
    payload:data
})