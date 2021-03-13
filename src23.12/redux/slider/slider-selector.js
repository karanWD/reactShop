import {createSelector} from "reselect"

export const selectSlider = state => state.slider.sliderItem

export const selectSliderItems = createSelector(
    [selectSlider],item => item ? item.data : null
)