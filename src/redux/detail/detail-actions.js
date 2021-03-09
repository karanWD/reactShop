import {detailActionType} from "./detail-actionType";

export const fetchDetail = (data)=>
{
    return {
        type:detailActionType.FETCH_DETAIL,
        payload:data
    }
}
