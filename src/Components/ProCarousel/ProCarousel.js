import React from "react"

import 'swiper/swiper.scss';
import { Swiper , SwiperSlide} from "swiper/react"
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import {basicUrl} from "../../basicUrl";

import SwiperCore, { Navigation, Pagination , Autoplay} from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProCarousel = ({galleryData})=>{
    // console.log(galleryData)
    return(
        galleryData
            ?
            <header className="mt-lg-4 bg-white header-carousel" id="mobileGallery">
                <Swiper
                    slidesPerView={1}
                    navigation={true}
                    autoplay={{delay: 3000}}
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
           null
    )

}

export default ProCarousel