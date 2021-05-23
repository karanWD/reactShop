import React,{useEffect} from "react"
import "./FilterCategory.scss"
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";
import {fetchCatFilter} from "../../redux/Category/category-actions";
import {selectCatList} from "../../redux/Category/category-selector";
import {basicUrl} from "../../basicUrl";
import BackIcon from "../ChevronLeft/ChevronLeft";

const FilterCategory = ({match,catFilterItems,fetchCatFilter})=>{
    useEffect(()=>{
        axios.get(`${basicUrl}/api/fetch/cats/${match.params.catname}`)
            .then(res => fetchCatFilter(res.data))
    },[match.params.catname])
    return(
        <section className="filter-category mt-5">
            <div className="d-flex flex-row-reverse align-items-center mt-4">
                <h4>
                    دسته بندی
                </h4>
                <div className="seperator mr-3"></div>
            </div>
            <ul className="mt-3 pr-0">

                <li>
                    <BackIcon />
                    {match.params.catname}
                 </li>
                {
                    catFilterItems &&
                    catFilterItems.map(item =>
                    <li key={item.id} id={item.id} className="mr-2" >
                        <Link to={`/products/${item.name}`}>
                             <BackIcon />
                            {item.name}
                        </Link>
                        <ul className="mr-2 pr-0">
                            {
                                item.children_recursive.map(
                                item =>
                                    <li>
                                        <Link to={`/products/${item.name}`}>
                                            {item.name}
                                        </Link>
                                    </li>
                            )}
                        </ul>
                    </li>
                    )
                }
            </ul>
        </section>
    )
}

const mapStateToProps = state => ({
    catFilterItems: state.category.catFilterItems
})
const mapDispatchToProps = dispatch =>({
    fetchCatFilter: (data) => dispatch(fetchCatFilter(data))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FilterCategory))