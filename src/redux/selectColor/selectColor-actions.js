import {selectColorActionType} from "./selectColorActionType";


export const fetchColorExist = (data)=>({
    type:selectColorActionType.FETCH_COLOR_EXIST,
    payload:data
})

export const proColorSelected = data => ({
    type:selectColorActionType.PRODUCT_COLOR_SELECTED,
    payload:data
})