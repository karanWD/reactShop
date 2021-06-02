import {productColorGalleryActionType} from "./ProductColorGalleryActionType";

const INITIAL_STATE = {
    proColorGallery:null
}

const productColorGalleryReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case productColorGalleryActionType.FETCH_PRODUCT_COLOR_GALLERY :
            return{
                ...state,
                proColorGallery: action.payload
            }
        default : return state
    }
}

export default productColorGalleryReducer