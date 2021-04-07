import React, {useEffect} from "react"
import "./SideCat.scss"
import axios from "axios";
import {connect} from "react-redux";
import {fetchCatList} from "../../redux/Category/category-actions";
import {selectCatList} from "../../redux/Category/category-selector";
import {Link} from "react-router-dom";
//images
import Tshirt from "./tshirt.png"
import Suit from "./suit.png"
import Shoe from "./shoe.png"
import Watch from "./watch.png"
import Hoodie from "./hoodie.png"
import Sleeveless from "./sleeveless.png"


const SideCat = ({fetchCatList, catList}) => {
    useEffect(() => {
        axios.get("http://api.mandegar-shop.ir/api/fetch/cats")
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
                            <Link to={`/products/${item.name.replace(/\s+/g, '-')}`}>
                                <li className="d-flex flex-row-reverse">
                                    <div className="cat-img col-3 d-flex align-items-center justify-content-center">
                                        <img className="col-7  px-0" src={Suit} alt=""/>
                                    </div>
                                    <div className="cat-name col-9 d-flex align-items-center justify-content-end">
                                        {item.name}
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