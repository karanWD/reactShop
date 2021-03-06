import React,{useEffect} from "react"
import "./FilterBrand.scss"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchBrand} from "../../redux/Brand/Brand-actions";
import axios from "axios";
import {basicUrl} from "../../basicUrl";
import {withRouter} from "react-router-dom";
import {fetchFilterBrand} from "../../redux/Filter/filter-actions";
import {fetchProducts} from "../../redux/Products/products-actions";
import {productsSelectorData} from "../../redux/Products/products-selector";

const FilterBrand = ({brand,fetchBrand,match,fetchFilterBrand,fetchProducts,filterPrice,filterBrand})=>{

    const filterHandler = async (event) => {
         await fetchFilterBrand(event.target.getAttribute("id"))
        let formData = new FormData()
        filterPrice?.length > 0 && await formData.append("min_price",filterPrice[0]*1000000)
        filterPrice?.length > 0 && await formData.append("max_price",filterPrice[1]*1000000)
        await formData.append("brand_id",event.target.getAttribute("id"))
        await formData.append("cat_name",match.params.catname)
        await formData.append("order_by","desc")
        await axios.post(`${basicUrl}/api/filter`,formData)
            .then(res=>fetchProducts(res))
    }

    useEffect(()=>{
        // console.log(filterBrand)
        axios.get(`${basicUrl}api/brand/fetch/${match.params.catname}` )
            .then( res => fetchBrand(res.data))
    },[match.params.catname])

    return(
        brand && brand.length > 0 ?
        <section className="filter-brand mt-5">
            <div className="d-flex flex-row-reverse align-items-center mt-4">
                <h4>
                    برند
                </h4>
                <div className="seperator mr-3"></div>
            </div>
            <ul className="mt-3 pr-0">
            {

                brand.map(
                    item =>
                        <li key={item.id} onClick={filterHandler} className={filterBrand && filterBrand == item.id ? "active-brand-filter" : null}>
                            {/*{console.log(item.id,filterBrand)}*/}
                            <input type="radio" name="brand" id={item.id}  />
                            <label htmlFor={item.id}>{item.name}</label>
                        </li>
                )
            }
            </ul>
        </section>
            :
         null
    )
}

const mapDispatchToProps = dispatch => ({

    fetchBrand : (data) => dispatch(fetchBrand(data)),
    fetchFilterBrand:(data) => dispatch(fetchFilterBrand(data)),
    fetchProducts:(data) => dispatch(fetchProducts(data)),
    fetchFilterPrice : (data) => dispatch(fetchFilterBrand(data))

})

const mapStateToProps = state => ({
    filterPrice:state.filter.price,
    filterBrand:state.filter.brand,
    brand:state.brand.brand,
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FilterBrand))