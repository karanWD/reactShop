import {sliderType} from "./sliderType";

export const fetchSlider = (slider)=>({
    type:sliderType.FETCH_SLIDER,
    payload:slider
})