import React from "react"
import {Link} from "react-router-dom";
import "./Nav.scss"
import Search from "../Search/Search";
import cartImg from "./shopping-bag.svg"
import user from "./user.svg"
import {connect} from "react-redux";
import {openCart} from "../../redux/cart/cart-actions";
import {cartItemsSelector} from "../../redux/cart/cart-selector";



const Nav = ({openCart,cartItems}) => {
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
                <div className="col-2 col-lg-1 px-0">
                    <h1 className="mb-0">LOGO</h1>
                </div>
                <ul className="d-lg-flex flex-row-reverse col-lg-2 mb-0 d-none ">
                    <Link to="/">
                        <li className="px-3">خانه</li>
                    </Link>
                </ul>
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
        </>
    )
};

const mapDispatchToProps = dispatch => ({
    openCart :() => dispatch(openCart())
})

const mapStateToProps = state => ({
    cartItems: cartItemsSelector(state),
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav)
