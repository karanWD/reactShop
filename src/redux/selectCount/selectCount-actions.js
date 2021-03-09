import {selectCountActionType} from "./selectCountActionType";

export const fetchSelectCount = (data)=>({
  type:selectCountActionType.SELECT_COUNT,
  payload:data
})