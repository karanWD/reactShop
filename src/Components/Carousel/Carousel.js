import React, {useEffect} from "react"
import "./Carousel.scss"
import 'swiper/swiper.scss';
import {Swiper, SwiperSlide} from "swiper/react"
import axios from "axios";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import SwiperCore, {Navigation, Pagination,Autoplay} from 'swiper';
import {connect} from "react-redux"
import {carouselFetch} from "../../redux/carousel/carousel.actions"
import {selectCarousel} from "../../redux/carousel/carousel.selector";
import {basicUrl} from "../../basicUrl";

SwiperCore.use([Navigation, Pagination,Autoplay]);

const Carousel = ({carouselItem, carouselFetch}) => {

    useEffect(() => {
        axios.get(basicUrl+"/api/slider/fetch/all")
            .then(
                res => carouselFetch(res)
                // res =>  console.log(res)
            )
    }, [])

    return (
        carouselItem
            ?
            <header className="mt-lg-4 bg-white header-carousel">
                <Swiper
                    slidesPerView={1}
                    navigation={true}
                    autoplay={{"delay": 10000}}
                    loop={true}
                    speed={1000}
                >
                    {
                        carouselItem.data.map(item => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <figure>
                                            <img className="col-12 px-0 "
                                                 src={`${basicUrl}/images/slider/${item.image}`}
                                                 alt="CarouselImg"/>
                                        </figure>
                                    </SwiperSlide>
                                )
                            }
                        )
                    }
                </Swiper>
            </header>
            :
            // <Loading/>
        null
    )

}

const mapStateToProps = state => ({
    carouselItem: selectCarousel(state),
})

const mapDispatchToProps = (dispatch) => (
    {
        carouselFetch: carouselItem => dispatch(carouselFetch(carouselItem))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)