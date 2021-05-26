import React, {useEffect} from "react"
import "./SideCat.scss"
import axios from "axios";
import {connect} from "react-redux";
import {fetchCatList} from "../../redux/Category/category-actions";
import {selectCatList} from "../../redux/Category/category-selector";
import {Link} from "react-router-dom";
import {basicUrl} from "../../basicUrl";


const SideCat = ({fetchCatList, catList}) => {
    useEffect(() => {
        axios.get(basicUrl + "/api/fetch/cats")
            .then(
                res => fetchCatList(res.data)
            )
    }, [])
    return (
        <section className="sidecat col-lg-3 mt-5 pt-1">
            <h1>دسته بندی محصولات</h1>
            <ul className="text-right mt-4">
                {
                    catList
                        ?
                        catList.map(item =>
                            <Link to={`/products/${item.name}`}>
                                <li className="d-flex flex-row-reverse">
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


                export default connect(mapStateToProps, mapDispatchToProps)(SideCat)