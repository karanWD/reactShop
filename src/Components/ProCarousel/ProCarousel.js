import React from "react"

import 'swiper/swiper.scss';
import { Swiper , SwiperSlide} from "swiper/react"
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import {basicUrl} from "../../basicUrl";

import SwiperCore, { Navigation, Pagination} from 'swiper';

SwiperCore.use([Navigation, Pagination]);

const ProCarousel = ({galleryData})=>{
    // console.log(galleryData)
    return(
        galleryData
            ?
            <header className="mt-lg-4 bg-white header-carousel" id="mobileGallery">
                <Swiper
                    slidesPerView={1}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        galleryData.map(item =>{
                                return(
                                    <SwiperSlide key={item.id}>
                                        <figure>
                                            <img className="col-12 px-0 " src={`${basicUrl}/images/gallery/${item.image}`} alt="CarouselImg"/>
                                        </figure>
                                    </SwiperSlide>
                                )
                            }
                        )
                    }
                </Swiper>
            </header>
            :
            <h1>Loading</h1>
    )

}

export default ProCarousel