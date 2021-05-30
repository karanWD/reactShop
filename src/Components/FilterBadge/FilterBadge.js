import React from "react"
import {connect} from "react-redux";
import "./FilterBadge.scss"
import {fetchFilterBrand, fetchFilterPrice} from "../../redux/Filter/filter-actions";

const FilterBadge = ({brand, price,fetchFilterPrice,fetchFilterBrand}) => {
    const clearFilters = ()=>{
        fetchFilterBrand(null)
        fetchFilterPrice(null)
    }
    return (
        <>
            <div className="d-flex flex-row-reverse justify-content-between align-items-center">
                <h1 className="pr-0">فیلتر ها</h1>
                {brand || price ?<span className="clear-all-filters" onClick={clearFilters}>حذف فیلتر ها </span> : null}
            </div>
            <section className="filter-badge">
                <ul className="d-flex flex-row-reverse ">
                    {
                        brand ?
                            <li className="d-flex flex-row-reverse justify-content-between ">
                                <span className="col-8 px-2">برند </span>
                                <span className="col-4 close-filter px-2" onClick={() => fetchFilterBrand(null)}> X </span>
                            </li>
                            :
                            null
                    }
                    {
                        price ?
                            <li className="d-flex flex-row-reverse justify-content-between ">
                                <span className="col-8 px-2">قیمت</span>
                                <span className="col-4 close-filter px-2" onClick={() => fetchFilterPrice(null)}> X </span>
                            </li>
                            :
                            null
                    }

                </ul>
            </section>
        </>
    )
}


const mapStateToPros = state => ({
    brand: state.filter.brand,
    price: state.filter.price
})
const mapDispatchToProps = dispatch => ({
    fetchFilterBrand:(data)=>dispatch(fetchFilterBrand(data)),
    fetchFilterPrice:(data)=>dispatch(fetchFilterPrice(data)),
})

export default connect(mapStateToPros,mapDispatchToProps)(FilterBadge)