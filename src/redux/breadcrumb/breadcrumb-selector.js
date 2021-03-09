import {createSelector} from "reselect";

export const breadcrumbSelect = state =>state.breadCrumb.breadcrumbItem

export const breadcrumbSelectItem = createSelector(
    [breadcrumbSelect], item => item ? item.data : item
    )