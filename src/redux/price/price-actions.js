import {priceActionType} from "./priceActionsType"

export const fetchPriceVar = (data) =>({
    type:priceActionType.FETCH_PRICE_VAR,
    payload:data
})

export const fetchPriceSizeVar = (data) => ({
    type:priceActionType.FETCH_PRICE_SIZE_VAR,
    payload:data
})


