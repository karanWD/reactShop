import React from "react"
import {Link} from "react-router-dom";
import "./Nav.scss"
import Search from "../Search/Search";
import cartImg from "./shopping-bag.svg"
import user from "./user.svg"
import {connect} from "react-redux";
import {openCart} from "../../redux/cart/cart-actions";



const Nav = ({openCart}) => {
    return (
        <>
            <nav className="d-none d-lg-flex flex-row-reverse justify-content-between align-items-center mt-4 px-1 px-lg-5">
                <div className="col-2 col-lg-1 px-0">
                    <h1 className="mb-0">LOGO</h1>
                </div>
                <ul className="d-lg-flex flex-row-reverse col-lg-4 mb-0 d-none ">
                    <Link to="/">
                        <li className="px-3">خانه</li>
                    </Link>
                    <Link to="/products">
                        <li className="px-3">محصولات</li>
                    </Link>
                </ul>
                <div className="col-lg-3">
                    <Search/>
                </div>
                <div className="d-flex flex-row-reverse ">
                    <div className="profile-btn pt-2"><img className="w-100 px-2" src={user} alt="پروفایل"/></div>
                    <div className="cart-btn pt-2" onClick={openCart}><img className="w-100 px-2" src={cartImg} alt="سبد خرید"/></div>
                </div>
            </nav>
        </>
    )
};

const mapDispatchToProps = dispatch => ({
    openCart :() => dispatch(openCart())
})

export default connect(null,mapDispatchToProps)(Nav)