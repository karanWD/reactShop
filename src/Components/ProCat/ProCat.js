import React, {useEffect} from "react"
import "./ProCat.scss"
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import {connect} from "react-redux";
import axios from "axios";
import {fetchCatList} from "../../redux/Category/category-actions";
import {selectCatList} from "../../redux/Category/category-selector";
import {Link} from "react-router-dom";
import {basicUrl} from "../../basicUrl";
import SwiperCore, {Autoplay } from 'swiper';
SwiperCore.use(Autoplay)



const ProCat = ({fetchCatList,catList}) => {

    useEffect(() => {
        if(!catList){
            axios.get(basicUrl+"/api/fetch/cats")
                .then(
                    res => fetchCatList(res.data)
                )
        }
        const swiper = new Swiper('.swiper-procat-slider', {
            slidesPerView: 1,
            spaceBetween: 10,
            // freeMode: true,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView:4,
                }
            },
            pagination: {
                el: '.swiper-pagination',
                clickable:true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 4500,
            },
        });
    })
    return (
        <section className="pro-cat px-2 px-lg-5 mt-5">
            <div className="d-flex flex-row-reverse">
                <h1 className="">دسته بندی محصولات</h1>
            </div>
            <div className="d-flex flex-row-reverse col-12 mt-3">
                <div className="swiper-container swiper-procat-slider col-12 rtl">
                    <div className="swiper-wrapper">
                        {
                            catList ?
                                catList.map(
                                    item =>
                                        <div key={item.id} className="swiper-slide text-center d-flex justify-content-center align-items-center">
                                        <Link to={`/products/${item.name}`} className="col-12 px-0">
                                            <div className="procat-item-container d-flex flex-row  align-items-center">
                                                <div className="cat-img col-12 px-0 d-flex align-items-center justify-content-center position-relative">
                                                        {
                                                            item.image
                                                                ?
                                                                <img className="col-12  px-0"
                                                                     src={`${basicUrl}images/category/${item.image}`}
                                                                     alt={item.name}/>
                                                                :
                                                                null
                                                        }
                                                        <div className="cat-name d-flex align-items-center justify-content-end" >
                                                            {item.name}
                                                        </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCatList: (data) => dispatch(fetchCatList(data))
})

const mapStateToProps = state => ({
    catList: selectCatList(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(ProCat)