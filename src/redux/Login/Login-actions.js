import {LoginActionType} from "./LoginActionType";

export const openLogin = (data)=>({
    type:LoginActionType.OPEN_LOGIN,
    payload:data
})
export const openCode = (data)=>({
    type:LoginActionType.OPEN_CODE_VERIFIED,
    payload:data
})