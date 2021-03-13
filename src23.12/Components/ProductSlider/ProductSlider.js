import React,{useEffect,useState} from "react"
import {withRouter} from "react-router";
import "./ProductSlider.scss"
import axios from "axios";
import {connect} from "react-redux"
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Item from "../Item/Item";
import {selectSliderItems} from "../../redux/slider/slider-selector";
import {fetchProductSlider} from "../../redux/product-slider/productSlider-actions";
import {Link} from "react-router-dom";
import Loading from "../Loading/Loading";

const ProductSlider =({fetchProductSlider,productSliderItem,name,match}) =>{
    const [title,setTitle] = useState()
    useEffect( () => {
        name==="similar"
            ?
            axios.get(`https://api.mandegar-shop.ir/api/detail/products/similar/${match.params.proname}`)
                .then(
                    res => fetchProductSlider(res)
                )
                .then(
                    ()=>{
                        const swiper = new Swiper('.swiper-product-slider', {
                            slidesPerView: 2,
                            spaceBetween:0,
                            breakpoints:{
                                768:{
                                    slidesPerView: 3,
                                }  ,
                                1200:{
                                    slidesPerView: 5,
                                }
                            },
                            autoplay:{
                                delay:3000,
                                disableOnInteraction:false,
                            },
                            pagination: {
                                el: '.swiper-pagination',
                                clickable:true
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
                    ()=>{
                        const swiper = new Swiper('.swiper-product-slider', {
                            slidesPerView: 2,
                            spaceBetween:0,
                            breakpoints:{
                                768:{
                                    slidesPerView: 3,
                                }  ,
                                1200:{
                                    slidesPerView: 5,
                                }
                            },
                            autoplay:{
                                delay:3000,
                                disableOnInteraction:false,
                            },
                            pagination: {
                                el: '.swiper-pagination',
                                clickable:true
                            },
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                        });
                    }
                )

                if (name === "similar"){
                    setTitle("محصولات مشابه ")
                }
                else{
                    setTitle("پرفروش ترین ها ")
                }

    },[])
    return(
        productSliderItem
            ?

                <section className="product-slider mt-5 d-flex flex-row-reverse  ">
                <div className="col-lg-12 px-0">
                    <div className="d-flex flex-row-reverse justify-content-between pl-3">
                        <h1>
                            {
                                title
                            }
                        </h1>
                        <div className="see-all">
                            مشاهده همه
                        </div>
                    </div>
                    <div className="swiper-container swiper-product-slider">
                        <div className="swiper-wrapper">
                            {
                                productSliderItem.map(item =>
                                    (
                                        item
                                            ?
                                            <div className="swiper-slide" key={item.id}>
                                                    <Item data={item.product}/>
                                            </div>
                                            :
                                            <h1>Loading</h1>
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
           // <Loading/>
        null
    )

}



const mapStateToProps = state => ({
    productSliderItem:selectSliderItems(state)
})

const mapDispatchToProps = (dispatch) => ({
    fetchProductSlider : (productSlider) => dispatch(fetchProductSlider(productSlider))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductSlider))