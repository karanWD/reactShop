import {searchActionType} from "./searchActionType";

export const searchMobileToggle = () => ({
    type:searchActionType.SEARCH_MOBILE_TOGGLE,
    payload:null
})

export const searchToggle = (data) => ({
    type:searchActionType.SEARCH_TOGGLE,
    payload:data
})