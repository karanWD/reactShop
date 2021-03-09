import {productSliderType} from "./productSliderType";

export const fetchProductSlider = (slider)=>({
    type:productSliderType.FETCH_PRODUCT_SLIDER,
    payload:slider
})