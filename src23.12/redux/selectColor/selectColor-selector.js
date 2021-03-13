import {createSelector} from "reselect";

export const selectColor =(state) => state.selectColor.colorExist

export const selectColorData = createSelector(
    [selectColor], item => item ? item.data : item
)
export const selectColorSelected = state => state.selectColor.colorSelected
