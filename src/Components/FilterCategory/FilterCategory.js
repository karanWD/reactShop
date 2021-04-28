import React,{useEffect} from "react"
import "./FilterCategory.scss"
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";
import {fetchCatList} from "../../redux/Category/category-actions";
import {selectCatList} from "../../redux/Category/category-selector";

const FilterCategory = ({match,catList,fetchCatList})=>{
    return(
        <section className="filter-category mt-5">
            <div className="d-flex flex-row-reverse align-items-center mt-4">
                <h4>
                    دسته بندی
                </h4>
                <div className="seperator mr-3"></div>
            </div>
            <ul className="mt-3 pr-0">
                <li>{match.params.catname}</li>
                {
                    catList &&
                    catList.filter(item => item.name == match.params.catname)[0].children_recursive.map(item =>
                    <li id={item.id} className="mr-2" >
                        <Link to={`/products/${item.name}`}>
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
    catList: selectCatList(state)
})
const mapDispatchToProps = dispatch =>({
    fetchCatList: (data) => dispatch(fetchCatList(data))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FilterCategory))