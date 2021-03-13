import {createSelector} from "reselect";

export const selectCountSelector = state => state.selectCount.proCount

export const selectCountSelectorData = createSelector(
    [selectCountSelector],item => item ? item.data : item
)
