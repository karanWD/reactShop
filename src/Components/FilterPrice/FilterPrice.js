import React, {useEffect,useState } from "react"
import "./FilterPrice.scss"
import {withRouter} from "react-router";
import ReactSlider from 'react-slider'
import Button from "../Button/Button";
import {connect} from "react-redux";
import {fetchFilterPrice} from "../../redux/Filter/filter-actions";
import axios from "axios";
import {basicUrl} from "../../basicUrl";
import {fetchProducts} from "../../redux/Products/products-actions";
import {fetchLoading} from "../../redux/Loading/Loading-actions";
import Loading from "../Loading/Loading";

const FilterPrice = ({match,filterPrice,fetchFilterPrice,fetchProducts,setLoading,loading,filterBrand}) => {
    useEffect(()=>{
        setValue([0,50])

        },[match.params.catname])
    const [value, setValue] = React.useState([0, 50]);
    const filterHandler = async (price) => {
        await setLoading("true")
        let formData = new FormData()
        filterBrand.length && await formData.append("brand_id",filterBrand)
        await formData.append("cat_name",match.params.catname)
        await formData.append("order_by","desc")
        await formData.append("min_price",price[0]*1000000)
        await formData.append("max_price",price[1]*1000000)
        await axios.post(`${basicUrl}/api/filter`,formData)
            .then( res => {
                fetchProducts(res)
                setLoading("false")
                // console.log(res)
            })
    }



    return (

        <section className="filter-category mt-5">
            <div className="d-flex flex-row-reverse align-items-center mt-4">
                <h4>
                    قیمت
                </h4>
                <div className="seperator mr-3"></div>
            </div>

            <ReactSlider
                value={value}
                max={50}
                onAfterChange={
                     async val => {
                        console.log('onAfterChange value:', val)
                        await setValue(val)
                        await fetchFilterPrice(val)
                        await filterHandler(val)
                    }
                }
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
            <br/>
            <div className="d-flex flex-row-reverse justify-content-between align-items-center mt-4" >
                <div className="  d-flex flex-row-reverse justify-content-around col-12 pr-0 align-items-center flex-wrap">
                    <span className="col-2 text-center" style={{color:"#777",fontSize:"13px"}}>از</span>
                    <div className="mt-4 col-4 px-0">
                        <div className="priceVal-container">
                            {value[0]}
                        </div>
                        <span className="toman d-block mt-1 text-center">میلیون تومان</span>
                    </div>

                    <span className=" col-2 text-center" style={{color:"#777",fontSize:"13px"}}>تا</span>

                    <div className="mt-4 col-4 px-0">
                        <div className="priceVal-container">
                            {value[1]}
                        </div>
                        <span className="toman d-block mt-1 text-center">میلیون تومان</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    filterPrice:state.filter.price,
    loading: state.loading.loading,
    filterBrand:state.filter.brand
})

const mapDispatchToProps = dispatch => ({
    fetchFilterPrice:(data)=>dispatch(fetchFilterPrice(data)),
    fetchProducts:(data) => dispatch(fetchProducts(data)),
    setLoading:(data)=>dispatch(fetchLoading(data))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FilterPrice))