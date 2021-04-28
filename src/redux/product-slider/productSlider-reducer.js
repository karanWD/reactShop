import {productSliderType} from "./productSliderType";

const INITIAL_STATE = {
    productSliderItem:null,
    productSliderItemSet:null,
}

const productSliderReducer =(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case productSliderType.FETCH_PRODUCT_SLIDER :

            return {
                ...state,
                productSliderItem : action.payload
            }
        case productSliderType.FETCH_PRODUCTS_SLIDER_SET :
            return {
                ...state,
                productSliderItemSet:action.payload
            }
        default:
            return state
    }
}

export default productSliderReducer