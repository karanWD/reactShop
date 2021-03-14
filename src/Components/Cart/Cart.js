import React, {useEffect} from "react"
import "./Cart.scss"
import CartItem from "../CartItem/CartItem";
import BackIcon from "../ChevronLeft/ChevronLeft";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
import {connect} from "react-redux";
import {
    addCartFailSelector,
    addCartSuccessSelector,
    cartItemsSelector,
    cartSelector, cartSuccessTextSelector
} from "../../redux/cart/cart-selector";
import {addCartFail, closeCart, fetchCart} from "../../redux/cart/cart-actions";
import axios from "axios";
import {Link} from "react-router-dom";
import EmptyBasket from "./empty.png"
import {openLogin} from "../../redux/Login/Login-actions";

const Cart = ({cartOpen, cartClose, cartItems, fetchCart, addCartSuccess, addCartFail, cartSuccessText, openLogin}) => {
    let totalCart = []
    totalCart =
        cartItems
            ?
            cartItems.data.map(
                item => {
                    return item.total * item.number
                }
            )
            :
            null
    let totalItemsCount = []
    totalItemsCount =
        cartItems ?
            cartItems.data.map(
                item => {
                    return item.number
                }
            )
            : null
    useEffect(() => {
        axios.get(`https://api.mandegar-shop.ir/api/cart/fetch/${localStorage.getItem("cart-cookie")}`)
            .then(res => {
                fetchCart(res)
            })
    }, [])

    return (
        cartItems && cartItems.data.length > 0
            ?
            <section className={`cart-container`}>
                <div className={`cart px-0 ${cartOpen.openCart ? 'open-cart' : ""}`}>
                    <div className="bg-white h-100 ">
                        <div
                            className="cart-header d-flex flex-row-reverse justify-content-between align-items-center pt-4 px-3">
                            <h1 className="title mb-0">سبد خرید</h1>
                            <BackIcon clickHandler={() => cartClose()}/>
                        </div>

                        <div className="cart-article mt-4 pb-5">
                            <div className="mt-4 px-3">
                                {/*{console.log(addCartSuccess)}*/}
                                {
                                    addCartSuccess
                                        ?
                                        <Alert type="success" text={cartSuccessText}/>
                                        :
                                        addCartFail
                                            ?
                                            <Alert type="error" text="محصول موردنظر متاسفانه به سبد شما اضافه نشد"/>
                                            :
                                            null
                                }

                            </div>
                            <ul className="px-0 pb-5">
                                {
                                    cartItems.data.map(item =>
                                        <li key={item.id}>
                                            <CartItem data={item}/>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="cart-footer d-flex  align-items-center justify-content-between">
                            <div className='col-5'>
                                {/*<Link to="/checkout">*/}
                                    <Button
                                        type="primary" text="پرداخت"
                                        clickHandler={
                                            async () => {
                                                await cartClose()
                                                await openLogin("login")
                                        }
                                    }
                                />
                            {/*</Link>*/}
                        </div>
                        <div className="col-6 ">
                            <div className="cart-count d-flex flex-row rtl col px-0 ">
                                <div className="title pr-0">مجموع تعداد:</div>
                                <div className="value pr-2">{
                                    totalItemsCount.reduce((total, price) => total + price)
                                } </div>
                            </div>
                            <div className="cart-sum d-flex flex-row rtl col px-0 align-items-center ">
                                <div className="title pr-0">مجموع:</div>
                                <div className="value pr-2">
                                    {/*{console.log(cartItems)}*/}
                                    <div className="new-price rtl d-block">
                                        {
                                            // cartItems.data.forEach(
                                            //     item => {
                                            //         totalCart = totalCart + item.total
                                            //     }
                                            // )
                                        }
                                        {
                                            totalCart.reduce((total, price) => total + price)
                                        }
                                        <span className="toman pr-2">تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</section>
:
    <section className={`cart-container`}>

        <div className={`cart px-0 ${cartOpen.openCart ? 'open-cart' : ""}`}>
            <div className="bg-white h-100 ">
                <div
                    className="cart-header d-flex flex-row-reverse justify-content-between align-items-center pt-5 px-3">
                    <h1 className="title mb-0">سبد خرید</h1>
                    <BackIcon clickHandler={() => cartClose()}/>
                </div>
                <div className={`empty-basket d-flex justify-content-center align-items-center mt-5 pt-5`}>
                    <img className="col-12 mt-5 pt-5" src={EmptyBasket} alt=""/>
                </div>
            </div>
        </div>
    </section>

)
}

const mapStateToProps = (state) => ({
    cartOpen: cartSelector(state),
    cartItems: cartItemsSelector(state),
    addCartSuccess: addCartSuccessSelector(state),
    cartSuccessText: cartSuccessTextSelector(state),
    addCartFail: addCartFailSelector(state)
})
const mapDispatchToProps = dispatch => ({
    cartClose: () => dispatch(closeCart()),
    fetchCart: (data) => dispatch(fetchCart(data)),
    openLogin: (data) => dispatch(openLogin(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart)