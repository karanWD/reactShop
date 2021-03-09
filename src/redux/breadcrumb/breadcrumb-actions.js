import {breadcrumbActionType} from "./breadcrumb-actionType";

export const fetchBreadcrumb = (data) => ({
    type:breadcrumbActionType.FETCH_BREADCRUMB,
    payload:data
})