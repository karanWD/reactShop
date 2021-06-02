import {productColorGalleryActionType} from "./ProductColorGalleryActionType";

export const fetchProductColorGallery = (data)=>({
    type:productColorGalleryActionType.FETCH_PRODUCT_COLOR_GALLERY,
    payload:data
})
