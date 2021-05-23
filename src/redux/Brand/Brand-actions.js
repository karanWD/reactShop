import {brandActionType} from "./BrandActionType";

export const fetchBrand = data =>({
    type:brandActionType.FETCH_BRAND_LIST,
    payload:data
})