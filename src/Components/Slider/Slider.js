import React, {useEffect} from "react"
import "./Slider.scss"
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import {connect} from "react-redux"
import axios from "axios";
import Item from "../Item/Item";
import SliderTitle from "./slider-title.png"
import {fetchSlider} from "../../redux/slider/slider-actions";
import {selectSlider, selectSliderItems} from "../../redux/slider/slider-selector";
import {basicUrl} from "../../basicUrl";
import SwiperCore, {Autoplay} from 'swiper';
SwiperCore.use([Autoplay])


const Slider = ({sliderItem, fetchSlider}) => {
    useEffect(() => {
        axios.get(basicUrl+"/api/suggest/fetch/all")
            .then(res => fetchSlider(res))
            .then(
                () => {
                    const swiper = new Swiper('.swiper-slider', {
                        spaceBetween: 5,
                        loop: false,
                        breakpoints: {
                            0:{
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            }
                        },
                        autoplay: {
                            delay: 5000,
                        },
                        pagination:{
                            el: '.swiper-pagination',
                            type: 'bullets',
                            clickable:true,

                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    });
                }
            )
    }, [])

    return (
        sliderItem
            ?
            <section className="slider mt-5 d-flex flex-row-reverse flex-wrap py-4 px-lg-5">
                {/*{console.log(sliderItem)}*/}
                <div className="col-6 col-lg-3">
                    <img className="col-12 px-0" src={SliderTitle} alt=""/>
                    {/*<div className="swiper-pagination"></div>*/}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                </div>
                <div className="col-6 col-lg-9">
                    <div className="swiper-container swiper-slider">
                        <div className="swiper-wrapper ">
                            {
                                sliderItem.map(item =>
                                    (
                                        <div className="swiper-slide" key={item.id}>
                                            {/*{console.log("bbb",item)}*/}
                                            <Item data={item.product}/>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                </div>
            </section>
            :
            // <Loading/>
        null
    )
}

const mapStateToProps = state => ({
    sliderItem: selectSliderItems(state)
})

const mapDispatchToProps = (dispatch) => ({
    fetchSlider: (slider) => dispatch(fetchSlider(slider))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider)