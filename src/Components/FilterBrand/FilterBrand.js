import React from "react"
import "./FilterBrand.scss"
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const FilterBrand = ()=>{
    return(
        <section className="filter-brand mt-5">
            <div className="d-flex flex-row-reverse align-items-center mt-4">
                <h4>
                    برند
                </h4>
                <div className="seperator mr-3"></div>
            </div>
            <ul className="mt-3 pr-0">
               <li>
                   <input id="nike" type="checkbox" />
                   <label htmlFor="nike">نایک</label>
               </li>
                <li>
                    <input id="adidas" type="checkbox" />
                    <label htmlFor="adidas">آدیداس</label>
                </li>
            </ul>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(FilterBrand)