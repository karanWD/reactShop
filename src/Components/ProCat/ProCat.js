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

//images
import Tshirt from "./tshirt.png"
import Suit from "./suit.png"
import Shoe from "./shoe.png"
import Watch  from "./watch.png"
import Hoodie from "./hoodie.png"
import Sleeveless from "./sleeveless.png"



const ProCat = ({fetchCatList,catList}) => {

    useEffect(() => {
        if(!catList){
            axios.get("http://api.mandegar-shop.ir/api/fetch/cats")
                .then(
                    res => fetchCatList(res.data)
                )
        }
        const swiper = new Swiper('.swiper-procat-slider', {
            slidesPerView: 3,
            spaceBetween: 5,
            freeMode: true,
            breakpoints: {
                768: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 10,
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
                                    <div className="swiper-slide text-center d-flex justify-content-center align-items-center">
                                        <Link to={`/products/${item.name}`}>
                                            <div className="procat-item-container">
                                                <div className="cat-img">
                                                    <img className="col-7  px-0" src={Suit} alt=""/>
                                                </div>
                                                <div className="cat-name mt-2">
                                                    {item.name}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                                :
                                null
                        }

                        {/*<div className="swiper-slide text-center d-flex justify-content-center align-items-center">*/}
                        {/*    <div className="procat-item-container">*/}
                        {/*        <div className="cat-img">*/}
                        {/*            <img className="col-9 px-0" src={Tshirt} alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div className="cat-name mt-2">*/}
                        {/*            تی شرت*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="swiper-slide text-center d-flex justify-content-center align-items-center">*/}
                        {/*    <div className="procat-item-container">*/}
                        {/*        <div className="cat-img">*/}
                        {/*            <img className="col-4 px-0" src={Hoodie} alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div className="cat-name mt-2">*/}
                        {/*            سوییشرت و هودی*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="swiper-slide text-center d-flex justify-content-center align-items-center">*/}
                        {/*    <div className="procat-item-container mt-3">*/}
                        {/*        <div className="cat-img">*/}
                        {/*            <img className="col-10 px-0" src={Shoe} alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div className="cat-name mt-2">*/}
                        {/*            کفش*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="swiper-slide text-center d-flex justify-content-center align-items-center">*/}
                        {/*    <div className="procat-item-container">*/}
                        {/*        <div className="cat-img">*/}
                        {/*            <img className="col-4 px-0" src={Watch} alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div className="cat-name">*/}
                        {/*            ساعت و زیورآلات*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
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