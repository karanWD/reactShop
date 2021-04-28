import {productSliderType} from "./productSliderType";

export const fetchProductSlider = (slider)=>({
    type:productSliderType.FETCH_PRODUCT_SLIDER,
    payload:slider
})
export const fetchProductSliderSet = (item)=>({
    type:productSliderType.FETCH_PRODUCTS_SLIDER_SET,
    payload:item
})