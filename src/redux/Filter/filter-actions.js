import {filterActionType} from "./filterActionType";

export const fetchFilterBrand = (data)=>({
     type:filterActionType.FETCH_FILTER_BRAND,
    payload:data
 })

export const fetchFilterPrice = (data)=>({
    type:filterActionType.FETCH_FILTER_PRICE,
    payload:data
})

export const fetchPriceMax = (data) => ({
    type:filterActionType.FETCH_PRICE_MAX,
    payload : data
})
