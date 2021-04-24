import React, {useEffect} from "react"
import {connect} from "react-redux";
import axios from "axios";
import "./SelectColor.scss"
import {detailColorsSelector} from "../../redux/detail/detail-selector";
import Check from "./check.svg"
import {selectSizeExistData, selectSizeSelected} from "../../redux/selectSize/selectSize-selector";
import {withRouter} from "react-router";
import {fetchColorExist, proColorSelected} from "../../redux/selectColor/selectColor-actions";
import {selectColorSelected} from "../../redux/selectColor/selectColor-selector";
import {fetchLoading} from "../../redux/Loading/Loading-actions";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const SelectColor = ({detailColor, sizeExist, match, fetchColorExist, proColorSelected , proColor,proSize,setLoading}) => {

    useEffect(() => {
        // if (sizeExist.length === 0) {
        //     var target = document.querySelectorAll(".colors li")
        //     target.forEach(item => {
        //         if (item.lastChild.classList.contains("selected-color")) {
        //             item.lastChild.classList.remove("selected-color")
        //         }
        //     })
        // }
    }, [match.params.proname])

    const selectColor = (e) => {
        var target = document.querySelectorAll(".sizes li")
        target.forEach(item => {
                        item.classList.add("color-non-exist")
                })
        axios
            .get(`https://api.mandegar-shop.ir/api/detail/product/exist/${match.params.proname}/0/${e.target.parentElement.getAttribute("id")}`)
            .then(res => fetchColorExist(res))
            .then(proColorSelected(e.target.parentElement.getAttribute("id")))
            .then(
                ()=>{
                    const swiper = new Swiper('.swiper-slider-color', {
                        slidesPerView: 2,
                        spaceBetween: 5,
                        // breakpoints:{
                        //     0:{
                        //         slidesPerView: 4,
                        //     },
                        //     768:{
                        //         slidesPerView: 7,
                        //
                        //     }  ,
                        //     1200:{
                        //         slidesPerView: 9,
                        //
                        //     }
                        // },
                        pagination: {
                            el: '.swiper-color-pagination',
                            clickable:true
                        },
                        navigation: {
                            nextEl: '.swiper-color-button-next',
                            prevEl: '.swiper-color-button-prev',
                        },
                    });
                }
            )
    }

    return (
        <div className="detail-color mt-5 mt-lg-4">
            {/*{console.log(colorExist)}*/}
            <div className="d-flex flex-row-reverse justify-content-between ">
                <h1 className="">
                    <div className = "mr-3"></div>
                    رنگ
                    {/*<p className="mb-2">*/}
                    {/*    دارای*/}
                    {/*    <span>*/}
                    {/*         {selectSize ? selectSize.length : null}*/}
                    {/*    </span>*/}
                    {/*    سایز متفاوت*/}
                    {/*</p>*/}
                </h1>
                <div className="position-relative d-flex justify-content-between align-items-center col-3 px-0">
                    {
                        detailColor?.length > 7
                            ?
                            <>
                                <div className="swiper-button-next swiper-color-button-next"></div>
                                <div className="swiper-pagination swiper-color-pagination "></div>
                                <div className="swiper-button-prev swiper-color-button-prev"></div>
                            </>
                            :null
                    }

                </div>
            </div>
                <div className=" mr-0 colors col-lg-11  swiper-container swiper-slider-color rtl">
                    <div className="swiper-wrapper ">
                {
                    detailColor.map(item => {
                            if (sizeExist.length >= 0 && proSize != null) {
                                setLoading("false")
                                return (
                                    <div key={item.id} id={item.id}
                                        className={`col-3 col-lg-2 px-1 swiper-slide ${sizeExist.find(size => size.color_id === item.id) ? "exist-size " : "non-exist"}`}
                                        onClick={selectColor}>
                                        <img className="col-12 px-0"
                                             src={`https://api.mandegar-shop.ir/images/gallery/${item.image.image}`}
                                             alt={item.name}
                                             title={item.name}
                                        />
                                        <div className={`d-none justify-content-center align-items-center ${proColor ? proColor == item.id ? "selected-color" : null : null}`} >
                                            <img className="col-7 px-0" src={Check} alt=""/>
                                        </div>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div key={item.id} id={item.id}
                                        className={`col-3 col-lg-2 px-1 swiper-slide`}
                                        onClick={selectColor}>
                                        <img className="col-12 px-0"
                                             src={item?.image?.image ? `https://api.mandegar-shop.ir/images/gallery/${item.image.image}`:null}
                                             alt={item.name}
                                             title={item.name}
                                        />
                                        {console.log(item.id , proColor)}
                                        <div className={`d-none justify-content-center align-items-center ${proColor ? proColor == item.id ? "selected-color" : null : null}`}>
                                            <img className="col-7 px-0" src={Check} alt=""/>
                                        </div>
                                    </div>
                                )
                            }
                        }
                    )
                }
                    </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchColorExist: (color) => dispatch(fetchColorExist(color)),
    proColorSelected: (colorSelected) => dispatch(proColorSelected(colorSelected)),
    setLoading: data => dispatch(fetchLoading(data))
})

const mapStateToProps = state => ({
    detailColor: detailColorsSelector(state),
    sizeExist: selectSizeExistData(state),
    proColor:selectColorSelected(state),
    proSize:selectSizeSelected(state)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectColor))