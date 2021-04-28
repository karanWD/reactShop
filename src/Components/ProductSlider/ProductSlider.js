import React, {useEffect, useState} from "react"
import {withRouter} from "react-router";
import "./ProductSlider.scss"
import axios from "axios";
import {connect} from "react-redux"
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Item from "../Item/Item";
import {fetchProductSlider, fetchProductSliderSet} from "../../redux/product-slider/productSlider-actions";
import {detailDataSelector} from "../../redux/detail/detail-selector";

const ProductSlider = ({fetchProductSlider,fetchProductSliderSet, productSliderItem, name, match, detailData, productSliderItemSet}) => {
    const [title, setTitle] = useState()
    // console.log(detailData.slug == match.params.proname,detailData)

    useEffect(() => {
        name == "similar"
            ?
            axios.get(`https://api.mandegar-shop.ir/api/detail/products/similar/${match.params.proname}`)
                .then(
                    res => fetchProductSlider(res)
                )
                .then(
                    () => {
                        const swiper = new Swiper('.swiper-product-slider', {
                            slidesPerView: 2,
                            spaceBetween: 0,
                            breakpoints: {
                                768: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 5,
                                }
                            },
                            autoplay: {
                                delay: 3000,
                                disableOnInteraction: false,
                            },
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true
                            },
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                        });
                    }
                )
            :
            name == "set"
                ?

                axios.get(`https://api.mandegar-shop.ir/api/offer/${match.params.proname}`)
                    .then(
                        res =>{
                            fetchProductSliderSet(res)
                        }
                    )
                    .then(
                        () => {
                            const swiper = new Swiper('.swiper-product-slider', {
                                slidesPerView: 2,
                                spaceBetween: 0,
                                breakpoints: {
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                    }
                                },
                                autoplay: {
                                    delay: 3000,
                                    disableOnInteraction: false,
                                },
                                pagination: {
                                    el: '.swiper-pagination',
                                    clickable: true
                                },
                                navigation: {
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                },
                            });
                        }
                    )
                :
                axios.get("https://api.mandegar-shop.ir/api/index/product/new/fetch")
                    .then(
                        res => fetchProductSlider(res)
                    )
                    .then(
                        () => {
                            const swiper = new Swiper('.swiper-product-slider', {
                                slidesPerView: 2,
                                spaceBetween: 0,
                                breakpoints: {
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                    }
                                },
                                navigation: {
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                },
                            });
                        }
                    )


        if (name === "similar") {
            setTitle("محصولات مشابه ")
        } else if (name == "set") {
            setTitle("ست کردنی ها ")
        } else {
            setTitle("جدیدترین ها ")
        }

    }, [match.params.proname])
    return (
        name !== "set" && productSliderItem
            ?

            <section className="product-slider mt-5 d-flex flex-row-reverse  ">
                <div className="col-lg-12 px-0">
                    <div className="d-flex flex-row-reverse justify-content-between pl-3">
                        <h1>
                            {
                                title
                            }
                        </h1>
                        {/*<div className="see-all">*/}
                        {/*    مشاهده همه*/}
                        {/*</div>*/}
                    </div>
                    <div className="swiper-container swiper-product-slider">
                        <div className="swiper-wrapper">
                            {
                                productSliderItem.data.map(item =>
                                    (
                                        item
                                            ?
                                            <div className="swiper-slide" key={item.id}>
                                                {/*{console.log("aaa",item)}*/}
                                                <Item data={item}/>
                                            </div>
                                            :
                                            null
                                    )
                                )
                            }
                        </div>
                    </div>

                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </section>

            :
            name == "set" && productSliderItemSet?.data.length > 0
                ?
                <section className="product-slider mt-5 d-flex flex-row-reverse  ">
                    <div className="col-lg-12 px-0">
                        <div className="d-flex flex-row-reverse justify-content-between pl-3">
                            <h1>
                                {
                                    title
                                }
                            </h1>
                            {/*<div className="see-all">*/}
                            {/*    مشاهده همه*/}
                            {/*</div>*/}
                        </div>
                        <div className="swiper-container swiper-product-slider">
                            <div className="swiper-wrapper">
                                {
                                    productSliderItemSet?.data.map(item =>
                                        (
                                            item
                                                ?
                                                <div className="swiper-slide" key={item.id}>
                                                    {/*{console.log("aaa",item)}*/}
                                                    <Item data={item}/>
                                                </div>
                                                :
                                                null
                                        )
                                    )
                                }
                            </div>
                        </div>

                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </section>
                :
                null
    )

}


const mapStateToProps = state => ({
    productSliderItem: state.productSlider.productSliderItem,
    productSliderItemSet: state.productSlider.productSliderItemSet,
    detailData: detailDataSelector(state),

})

const mapDispatchToProps = (dispatch) => ({
    fetchProductSlider: (productSlider) => dispatch(fetchProductSlider(productSlider)),
    fetchProductSliderSet: (data) => dispatch(fetchProductSliderSet(data)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductSlider))