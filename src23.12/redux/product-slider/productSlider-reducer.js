import {productSliderType} from "./productSliderType";
const INITIAL_STATE = {
    productSliderItem:null
}

const productSliderReducer =(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case productSliderType.FETCH_PRODUCT_SLIDER :
            return {
                ...state,
                productSliderItem : action.payload
            }
        default:
            return state
    }
}

export default productSliderReducer