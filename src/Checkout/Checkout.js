import React, {useEffect} from "react"
import "./Checkout.scss"
import {Redirect} from "react-router";
import Delivery from "../Components/Delivery/Delivery";
import Payment from "../Components/Payment/Payment";
import Faktor from "../Components/Faktor/Faktor";
import Cart from "../Components/Cart/Cart";
import CartItem from "../Components/CartItem/CartItem";
import axios from "axios";
import {connect} from "react-redux";
import {fetchCart} from "../redux/cart/cart-actions";
import {cartItemsSelector} from "../redux/cart/cart-selector";
import Empty from "./empty.png"

const Checkout = ({fetchCart, cartItems,history}) => {
    let total = []
    total =
        cartItems
            ?
            cartItems.data.map(
                item => {
                    return parseInt(item.price) * item.number
                }
            )
            :
            null

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
        if (!cartItems) {
            axios.get(`https://api.mandegar-shop.ir/api/cart/fetch/${localStorage.getItem("cart-cookie")}`)
                .then(res => {
                    fetchCart(res)
                })
        }
    })
    return (
        cartItems
            ?
            <section className="checkout d-flex flex-column-reverse flex-lg-row-reverse flex-wrap justify-content-between mt-lg-5 pt-lg-5 px-lg-5">
                <div className="col-lg-8 mt-5 mt-lg-0 ">
                    <Delivery/>
                    <br/>
                    <Payment/>
                    <br/>
                    <Faktor/>
                </div>
                <div className="col-lg-4 cart-items-container text-right py-4">
                    <h1>سبد خرید </h1>
                    <ul className="px-0  d-flex flex-wrap mt-4">
                        {
                            cartItems.data.length > 0 ?
                            cartItems.data.map(item =>
                                <li className="" key={item.id}>
                                    <CartItem data={item}/>
                                </li>
                            )
                                :
                                <Redirect to="/"/>
                        }
                    </ul>
                    <div className="cart-summery pt-4">
                        <div className="cart-count d-flex flex-row rtl col px-0 ">
                            <div className="title pr-0">مجموع تعداد:</div>
                            <div className="value pr-2">
                              {
                                totalItemsCount.length > 0 ? totalItemsCount.reduce((total, price) => total + price) : null
                              }
                            </div>
                        </div>
                        <div className="cart-sum d-flex flex-row rtl col px-0 align-items-center ">
                            <div className="title pr-0">مجموع قیمت :</div>
                            <div className="value pr-2">
                                {console.log(cartItems)}
                                {
                                   total.length > 0 ?  total.reduce((total, price) => total + price) : null
                                }
                                {
                                    console.log(total,totalCart,totalItemsCount)
                                }
                                <span className="toman pr-2">تومان</span>
                            </div>
                        </div>
                        <div className="cart-sum d-flex flex-row rtl col px-0 align-items-center ">
                            <div className="title pr-0">مجموع تخفیف ها:</div>
                            <div className="value pr-2">
                                {
                                    total.length > 0 && totalCart.length > 0 ? total.reduce((total, price) => total + price) - totalCart.reduce((total, price) => total + price) : null
                                }
                                <span className="toman pr-2">تومان</span>
                            </div>
                        </div>
                        <div className="cart-sum d-flex flex-row rtl col px-0 align-items-center ">
                            <div className="title pr-0">پرداختی:</div>
                            <div className="value-final pr-2">
                                    {
                                       totalCart.length > 0 ?  totalCart.reduce((total, price) => total + price) : null
                                    }
                                    <span className="toman pr-2">تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            :
           null
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCart: (data) => dispatch(fetchCart(data))
})

const mapStateToProps = state => ({
    cartItems: cartItemsSelector(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)