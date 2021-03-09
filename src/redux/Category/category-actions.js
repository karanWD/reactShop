import {categoryType} from "./categoryType";

export const fetchCat = (cat)=>({
    type:categoryType.FETCH_CATEGORY,
    payload:cat
})