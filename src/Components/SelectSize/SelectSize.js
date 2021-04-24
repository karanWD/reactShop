import React,{useEffect} from "react"
import {connect} from "react-redux";
import "./SelectSize.scss"
import {fetchSelectSize, fetchSizeExist, proSizeSelected} from "../../redux/selectSize/selectSize-actions";
import {selectSizeData, selectSizeExistData, selectSizeSelected} from "../../redux/selectSize/selectSize-selector";
import axios from "axios";
import {withRouter} from "react-router";
import {selectColorData} from "../../redux/selectColor/selectColor-selector";
import {fetchLoading} from "../../redux/Loading/Loading-actions";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


const SelectSize = ({selectSize,fetchSelectSize,fetchSizeExist,match,sizeExist,colorExist,proSizeSelected,proSize,setLoading})=>{
    const selecctSize =  (event)=>{
         setLoading("true")
         axios
            .get(`https://api.mandegar-shop.ir/api/detail/product/exist/${match.params.proname}/${event.target.getAttribute("id")}/0`)
            .then(res =>fetchSizeExist(res))
            .then(proSizeSelected(event.target.getAttribute("id")))
            // .then(setLoading("false"))
    }
    useEffect(()=>{
        axios
            .get(`https://api.mandegar-shop.ir/api/detail/sizes/fetch/${match.params.proname}`)
            .then(res => fetchSelectSize(res))
            .then(
                ()=>{
                    const swiper = new Swiper('.swiper-slider-size', {
                        slidesPerView: 7,
                        // slidesPerGroup: 9,
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
                            el: '.swiper-size-pagination',
                            clickable:true
                        },
                        navigation: {
                            nextEl: '.swiper-size-button-next',
                            prevEl: '.swiper-size-button-prev',
                        },
                    });
                }
            )
    },[match.params.proname])

    if(colorExist){
        // console.log(colorExist)
        return(
            <div className="detail-size mt-4">
                <div className="d-flex flex-row-reverse justify-content-between ">
                    <h1 className="">
                        <div className="mr-3"></div>
                        سایز
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
                            selectSize?.length > 7
                                ?
                                <>
                                    <div className="swiper-button-next swiper-size-button-next"></div>
                                    <div className="swiper-pagination swiper-size-pagination "></div>
                                    <div className="swiper-button-prev swiper-size-button-prev"></div>
                                </>
                                :null
                        }

                    </div>
                </div>


                    <div className=" mr-0 sizes col-lg-8 swiper-container swiper-slider-size rtl">
                        <div className="swiper-wrapper ">
                    {
                        selectSize
                            ?
                            selectSize.map(item =>
                                (

                                        <div key={item.id}
                                             id={item.id}
                                             onClick={selecctSize}
                                             className={colorExist.find(color=>color.effect_spec_id === item.id) ? proSize == item.id ? "active-detail-size color-exist mt-2 swiper-slide" : "color-exist mt-2 swiper-slide" : "color-non-exist mt-2 swiper-slide"}
                                        >
                                            {item.name}
                                        </div>

                                )
                            )
                            :
                            null
                    }
                        </div>
                    </div>

            </div>
        )
    }
    else{
        return(
            <div className="detail-size mt-4">
                <div className="d-flex flex-row-reverse justify-content-between">
                    <h1>
                        <div className="mr-3"></div>
                        سایز
                    </h1>
                    <div className="position-relative d-flex justify-content-between align-items-center col-3 px-0">
                        {
                            selectSize?.length > 7
                                ?
                                <>
                                    <div className="swiper-button-next swiper-size-button-next"></div>
                                    <div className="swiper-pagination swiper-size-pagination "></div>
                                    <div className="swiper-button-prev swiper-size-button-prev"></div>
                                </>
                                :null
                        }

                    </div>
                </div>
                <div className="mr-0 sizes col-lg-8 swiper-container swiper-slider-size rtl">
                        <div className="swiper-wrapper ">
                    {
                        selectSize
                            ?
                            selectSize.map(item =>{
                                // console.log(proSize==item.id)
                                return(
                                    <div className={proSize ?  proSize == item.id ? "active-detail-size mt-2 swiper-slide" : " mt-2 swiper-slide" : " mt-2 swiper-slide" }
                                        key={item.id}
                                        id={item.id}
                                        onClick={selecctSize}>
                                        {item.name}
                                    </div>
                                )
                            })
                            :
                            null
                    }
                        </div>
                    </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    fetchSelectSize:size => dispatch(fetchSelectSize(size)),
    fetchSizeExist:size => dispatch(fetchSizeExist(size)),
    proSizeSelected : size => dispatch(proSizeSelected(size)),
    setLoading: data => dispatch(fetchLoading(data))
})

const mapStateToProps = state => ({
    selectSize:selectSizeData(state),
    sizeExist: selectSizeExistData(state),
    colorExist:selectColorData(state),
    proSize:selectSizeSelected(state)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SelectSize))