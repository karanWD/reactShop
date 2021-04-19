import React, {useEffect} from "react"
import "./SideCat.scss"
import axios from "axios";
import {connect} from "react-redux";
import {fetchCatList} from "../../redux/Category/category-actions";
import {selectCatList} from "../../redux/Category/category-selector";
import {Link} from "react-router-dom";
import Cat from "./categories.svg"
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
                                <Link to={`/products/${item.name}`}>
                                    <li className="d-flex flex-row-reverse">
                                        <div className="cat-img col-3 d-flex align-items-center justify-content-center">

                                            {
                                                item.image ?
                                                    <img  className="col-7  px-0" src={`https://api.mandegar-shop.ir/images/category/${item.image}`} alt={item.name}/>
                                                    :

                                                       <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                            x="0px" y="0px"
                                                            viewBox="0 0 512 512"
                                                       >
                                                           <g>
                                                               <path className="st0" d="M220,8H36C20.5,8,8,20.5,8,36v184c0,15.5,12.5,28,28,28h184c15.5,0,28-12.5,28-28V36C248,20.5,235.5,8,220,8z
                                                    M232,220c0,6.6-5.4,12-12,12H36c-6.6,0-12-5.4-12-12V36c0-6.6,5.4-12,12-12h184c6.6,0,12,5.4,12,12V220z"/>
                                                               <rect x="19" y="22" className="st0" width="220" height="211"/>
                                                           </g>
                                                           <g>
                                                               <path className="st1" d="M476,8H292c-15.5,0-28,12.5-28,28v184c0,15.5,12.5,28,28,28h184c15.5,0,28-12.5,28-28V36
            C504,20.5,491.5,8,476,8z M488,220c0,6.6-5.4,12-12,12H292c-6.6,0-12-5.4-12-12V36c0-6.6,5.4-12,12-12h184c6.6,0,12,5.4,12,12V220z
            "/>
                                                               <rect x="276" y="22" className="st1" width="220" height="211"/>
                                                           </g>
                                                           <g>
                                                               <path className="st1" d="M220,264H36c-15.5,0-28,12.5-28,28v184c0,15.5,12.5,28,28,28h184c15.5,0,28-12.5,28-28V292
                                                    C248,276.5,235.5,264,220,264z M232,476c0,6.6-5.4,12-12,12H36c-6.6,0-12-5.4-12-12V292c0-6.6,5.4-12,12-12h184c6.6,0,12,5.4,12,12
                                                    V476z"/>
                                                               <rect x="16" y="278.5" className="st1" width="220"
                                                                     height="211"/>
                                                           </g>
                                                           <g>
                                                               <path className="st0" d="M476,264H292c-15.5,0-28,12.5-28,28v184c0,15.5,12.5,28,28,28h184c15.5,0,28-12.5,28-28V292
            C504,276.5,491.5,264,476,264z M488,476c0,6.6-5.4,12-12,12H292c-6.6,0-12-5.4-12-12V292c0-6.6,5.4-12,12-12h184
            c6.6,0,12,5.4,12,12V476z"/>
                                                               <rect x="274" y="278.5" className="st0" width="220"
                                                                     height="211"/>
                                                           </g>
                                                       </svg>

                                            }

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