import {createSelector} from "reselect";

export const detailSelector = state => state.detail.detailItem

export const detailDataSelector = createSelector(
    [detailSelector],item => item ? item.data : item
)
export const detailColorsSelector = createSelector(
    [detailDataSelector],item => item ? item.colors : item
)

