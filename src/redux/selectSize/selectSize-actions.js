import {selectSizeType} from "./selectSize-actionType";

export const fetchSelectSize = data => ({
    type:selectSizeType.FETCH_SELET_SIZE,
    payload:data
})

export const fetchSizeExist = data =>({
    type:selectSizeType.FETCH_SIZE_EXIST,
    payload:data
})

export const proSizeSelected = (data)=>({
    type:selectSizeType.PRODUCT_SIZE_SELECTED,
    payload:data
})