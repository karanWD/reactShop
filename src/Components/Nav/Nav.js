import React,{useEffect} from "react"
import {Link} from "react-router-dom";
import "./Nav.scss"
import Search from "../Search/Search";
import cartImg from "./shopping-bag.svg"
import user from "./user.svg"
import {connect} from "react-redux";
import {openCart} from "../../redux/cart/cart-actions";
import {cartItemsSelector} from "../../redux/cart/cart-selector";
import axios from "axios";
import {basicUrl} from "../../basicUrl";
import {fetchMega} from "../../redux/megaMenu/megaMenu-actions";




const Nav = ({openCart,cartItems,fetchMega,megaCat}) => {
    useEffect(
        ()=>{
            axios.get(`${basicUrl}api/mega/fetch`)
                .then(
                    res => fetchMega(res.data)
                )
        }
    ,[])
    let totalItemsCount = []
    totalItemsCount =
        cartItems ?
            cartItems.data.map(
                item => {
                    return item.number
                }
            )
            : null
    return (
        <>
            <nav className="d-none d-lg-flex flex-row-reverse justify-content-between align-items-center mt-4 px-1 px-lg-5">
                <div className="col-2 col-lg-2 pl-5">
                    <img src={process.env.PUBLIC_URL + "/logo.png"} className={"col-12 px-0"} alt=""/>
                </div>
                <div className="col-lg-4 search-container">
                    <Search/>
                </div>
                <div className="d-flex flex-row-reverse col-1">
                    {/*<div className="profile-btn pt-2 col-2">*/}
                        {/*<img className="w-100 px-2" src={user} alt="پروفایل"/>*/}
                    {/*</div>*/}
                    <div className="cart-btn pt-2 position-relative" onClick={openCart}>
                        <img className="w-100 px-2" src={cartImg} alt="سبد خرید"/>
                        <span className="cartItems-count">
                            {
                                totalItemsCount && totalItemsCount.length > 0 ? totalItemsCount.reduce((total, price) => total + price) : 0
                            }
                        </span>
                    </div>
                </div>
            </nav>
            <section className="mega-menu mt-3 px-1 px-lg-0 d-none d-lg-block ">
                <ul className="d-none d-lg-flex flex-row-reverse justify-content-start position-relative" >
                    <Link to="/" >
                        <li className="py-2 px-3 mr-5">خانه</li>
                    </Link>
                    {
                        megaCat&&megaCat.map(
                            cat =>
                                <Link to={`/products/${cat.name}`}  >
                                    <li className="py-2 px-3 " key={cat.id}>
                                        {cat.name}
                                        <ol className="sub-mega-menu px-5">
                                            {
                                                cat?.megas.map(
                                                    catItems =>
                                                        <li key={catItems.id}>
                                                            <Link to={`/products/${catItems.name}`}>
                                                                { catItems.name}
                                                            </Link>
                                                        </li>
                                                )
                                            }
                                        </ol>
                                    </li>
                                </Link>
                        )
                    }
                </ul>
            </section>
        </>
    )
};

const mapDispatchToProps = dispatch => ({
    openCart :() => dispatch(openCart()),
    fetchMega:(data)=>dispatch(fetchMega(data))
})

const mapStateToProps = state => ({
    cartItems: cartItemsSelector(state),
    megaCat:state.mega.megaCat
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav)
