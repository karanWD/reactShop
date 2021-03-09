import {LoadingAtionType} from "./LoadingActionType";

export const fetchLoading = ( data ) => ({
    type:LoadingAtionType.LOADING,
    payload:data
})