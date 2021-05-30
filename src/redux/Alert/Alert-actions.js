import {alertActionType} from "./AlertActionType"

export const fetchAlert = (data) => ({
 type:alertActionType.FETCH_ALERT,
 payload:data
})