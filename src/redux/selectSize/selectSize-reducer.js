import {selectSizeType} from "./selectSize-actionType"


const INITIAL_STATE= {
    selectSizeItem:null,
    sizeExist:0,
    sizeSelected:null
}

const selectSizeReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case selectSizeType.FETCH_SELET_SIZE:
            return{
                ...state,
                selectSizeItem:action.payload
            }
        case selectSizeType.FETCH_SIZE_EXIST:
            return {
                ...state,
                sizeExist: action.payload
            }
        case selectSizeType.PRODUCT_SIZE_SELECTED:
            return {
                ...state,
                sizeSelected:action.payload
            }
        default:
            return state
    }
}

export default selectSizeReducer