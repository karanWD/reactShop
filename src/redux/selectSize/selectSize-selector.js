import {createSelector} from "reselect";

export const selectSize = state => state.selectSize.selectSizeItem

export const selectSizeData = createSelector(
    [selectSize],item => item ? item.data : item
)

export const selectSizeExist = state => state.selectSize.sizeExist

export const selectSizeExistData = createSelector(
    [selectSizeExist],item => {
        return item ? item.data : item
    }
)

export const selectSizeSelected = state => state.selectSize.sizeSelected
