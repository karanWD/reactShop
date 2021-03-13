import {createSelector} from "reselect";

export const productsSelector = state => state.products.productsItem

export const productsSelectorData =  createSelector(
    [productsSelector] , item => item ? item.data : item
)