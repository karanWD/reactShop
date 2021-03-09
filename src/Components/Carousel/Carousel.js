import React, {useEffect} from "react"
import "./Carousel.scss"
import 'swiper/swiper.scss';
import {Swiper, SwiperSlide} from "swiper/react"
import axios from "axios";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {connect} from "react-redux"
import {carouselFetch} from "../../redux/carousel/carousel.actions"
import {selectCarousel} from "../../redux/carousel/carousel.selector";
import Loading from "../Loading/Loading";

SwiperCore.use([Navigation, Pagination]);

const Carousel = ({carouselItem, carouselFetch}) => {

    useEffect(() => {
        axios.get("https://api.mandegar-shop.ir/api/slider/fetch/all")
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
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        carouselItem.data.map(item => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <figure>
                                            <img className="col-12 px-0 d-none d-lg-block"
                                                 src={`https://api.mandegar-shop.ir/images/slider/${item.image}`}
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