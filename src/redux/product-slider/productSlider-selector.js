import {createSelector} from "reselect"

export const selectSlider = state => state.productSlider.productSliderItem

export const selectSliderItems = createSelector(
    [selectSlider],item => item ? item.data : null
)