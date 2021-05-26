import React, {useEffect} from "react"
import "./SearchCat.scss"
import {basicUrl} from "../../basicUrl";
//images

import axios from "axios";
import {connect} from "react-redux";
import {fetchCatList} from "../../redux/Category/category-actions";
import {selectCatList} from "../../redux/Category/category-selector";
import {Link} from "react-router-dom";

const SearchCat = ({catList, fetchCatList}) => {
    useEffect(() => {
        axios.get(basicUrl+"/api/fetch/cats")
            .then(
                res => fetchCatList(res.data)
            )
    }, [])
    return (
        <section className="search-cat px-2 px-lg-5 mt-4 pb-5">
            {/*{console.log(catList)}*/}
            <ul className="d-flex flex-row-reverse flex-wrap col-12  px-0 pb-5" >
                {
                    catList?.length > 0
                        ?
                        catList.map(
                            item =>
                                <Link to={`/products/${item.name}`}>
                                    <li className="d-flex flex-row-reverse procat-item-container">
                                        <div className="cat-img col-12 px-0 d-flex align-items-center justify-content-center">

                                            <div
                                                className="cat-img col-12 px-0 d-flex align-items-center justify-content-center position-relative">
                                                {
                                                    item.image
                                                        ?
                                                        <img className="col-12  px-0"
                                                             src={`${basicUrl}images/category/${item.image}`}
                                                             alt={item.name}/>
                                                        :
                                                        null
                                                }
                                                <span className="cat-overlay"></span>
                                                <div className="cat-name d-flex align-items-center justify-content-end" >
                                                    {item.name}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                        )
                        :
                        null
                }
            </ul>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCatList: (data) => dispatch(fetchCatList(data))
})

const mapStateToProps = state => ({
    catList: selectCatList(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCat)