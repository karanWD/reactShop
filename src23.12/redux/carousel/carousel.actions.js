import {carouselTypes} from "./carousel.types";

export const carouselFetch = (carouselItem)=>{
    // console.log("action")
    return(
       {
           type: carouselTypes.CAROUSEL_FETCH,
           payload:carouselItem
       }
    )
}