import {checkoutActionType} from "./CheckoutActionType";

export const openAccordion = (data)=>({
    type:checkoutActionType.OPEN_ACCORDION,
    payload:data
})