import {categoryType} from "./categoryType";

export const fetchCat = (cat)=>({
    type:categoryType.FETCH_CATEGORY,
    payload:cat
})

export const fetchCatList = data =>({
    type:categoryType.FETCH_CATEGORY_LIST,
    payload:data
})

export const fetchCatFilter = data => ({
    type:categoryType.FETCH_CATEGORY_FILTER,
    payload:data
})

