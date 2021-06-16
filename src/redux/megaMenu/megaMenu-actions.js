import {megaMenuActionType} from "./megaMenuActionType";

export const fetchMega = (data)=>({
    type:megaMenuActionType.FETCH_MEGA,
    payload:data
})