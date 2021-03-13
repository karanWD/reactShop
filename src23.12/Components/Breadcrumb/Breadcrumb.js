import React,{useEffect} from "react"
import "./Breadcrumb.scss"
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";
import {withRouter} from "react-router";
import {fetchBreadcrumb} from "../../redux/breadcrumb/breadcrumb-actions";
import {breadcrumbSelectItem} from "../../redux/breadcrumb/breadcrumb-selector";

const Breadcrumb = ({match,fetchBread,breadCrumb})=>{
    useEffect(()=>{
        axios.get(`https://api.mandegar-shop.ir/api/detail/cats/fetch/${match.params.proname}`).then(
            res => fetchBread(res)
        )
    },[match.params.proname])
    return(
        <div className="detail-breadcrumb">
            <ul className="d-flex flex-row-reverse align-items-center">
                <li>خانه</li>
                <span></span>
                {
                    breadCrumb ?
                    breadCrumb.map(item =>
                        (
                            <>
                                <Link to={`/products/${item}`}><li>{item}</li></Link>
                                <span></span>
                            </>

                        )
                    )
                        :null
                }


            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchBread : (data) => dispatch(fetchBreadcrumb(data))
})
const mapStateToProps = state => ({
    breadCrumb:breadcrumbSelectItem(state)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Breadcrumb))