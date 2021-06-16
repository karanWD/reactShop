import { combineReducers } from "redux";
import carouselReducer from "./carousel/carousel.reducer";
import categoryReducer from "./Category/category-reducer";
import sliderReducer from "./slider/slider-reducer";
import detailReducer from "./detail/detail-reducer";
import productSliderReducer from "./product-slider/productSlider-reducer";
import breadcrumbReducer from "./breadcrumb/breadcrumb-reducer";
import selectSizeReducer from "./selectSize/selectSize-reducer";
import {selectColorReducer} from "./selectColor/selectColor-reducer";
import selectCountReducer from "./selectCount/selectCount-reducer";
import productsReducer from "./Products/products-reducer";
import cartReducer from "./cart/cart-reducer";
import loadingReducer from "./Loading/Loading-reducer";
import checkoutReducer from "./Checkout/Checkout-reducer";
import loginReducer from "./Login/Login-reducer";
import searchReducer from "./search/search-reducer";
import brandReducer from "./Brand/Brand-reducer";
import filterReducer from "./Filter/filter-reducer";
import alertReducer from "./Alert/Alert-reducer";
import productColorGalleryReducer from "./ProductColorGallery/ProductColorGallery-reducer";
import priceReducer from "./price/price-reducer";
import megaReducer from "./megaMenu/megaMenu-reducer";

export default combineReducers({
   carousel:carouselReducer,
   category:categoryReducer,
   slider:sliderReducer,
   productSlider:productSliderReducer,
   detail:detailReducer,
   breadCrumb: breadcrumbReducer,
   selectSize:selectSizeReducer,
   selectColor:selectColorReducer,
   selectCount:selectCountReducer,
   products:productsReducer,
   cart:cartReducer,
   loading:loadingReducer,
   checkout:checkoutReducer,
   login:loginReducer,
   search:searchReducer,
   brand:brandReducer,
   filter:filterReducer,
   alert:alertReducer,
   proGallery:productColorGalleryReducer,
   price:priceReducer,
   mega:megaReducer
});

