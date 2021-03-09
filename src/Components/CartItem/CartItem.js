import React from "react"
import "./CartItem.scss"
import CloseIcon from "../CloseIcon/CloseIcon";
import axios from "axios";
import {connect} from "react-redux";
import {addCartSuccess, fetchCart} from "../../redux/cart/cart-actions";

const CartItem = ({data,fetchCart,addCartSuccess})=>{
    // console.log(data)
    const deleteCartItem = (e)=>{
        axios.get(`https://api.mandegar-shop.ir/api/cart/delete/${e.target.parentElement.parentElement.getAttribute("id")}`)
            .then(res => console.log(res))
            .then(
                ()=>{
                    axios.get(`https://api.mandegar-shop.ir/api/cart/fetch/${localStorage.getItem("cart-cookie")}`)
                        .then(res => {
                            fetchCart(res)
                            if (res.status = 200){
                                console.log(res)
                                addCartSuccess("محصول موردنظر با موفقیت حذف شد ")
                            }
                        })
                }
            )
    }
    return(
        <div className="cart-item-container pl-0 d-flex flex-row-reverse mt-2">
                <div className="cart-item-image col-3 px-0">
                    <img className="col-12 px-0" src={`https://api.mandegar-shop.ir/images/product/${data.product.image}`} alt=""/>
                </div>
                <div className="cart-desc col-8 pl-0 pr-2">
                    <div className="product-name text-right">
                        <div className="name"> {data.product.name}</div>
                    </div>
                    <div className="product-price mt-2 text-right">
                        <div className="d-flex flex-row-reverse flex-wrap">
                            <div className="last-price rtl">
                               { data.product.price}
                                <span className="toman">تومان</span>
                            </div>
                            <div className="discount-num mr-3">{data.product.discount}%</div>
                        </div>
                        <div className="new-price rtl d-block">
                           {  data.product.price - (data.product.price * data.product.discount / 100)}
                            <span className="toman pr-2">تومان</span>
                        </div>
                    </div>
                    <div className="d-flex flex-row-reverse mt-2 align-items-center ">

                        <div className="product-count d-flex flex-row rtl col px-0 align-items-center">
                            <div className="title pr-0">تعداد: </div>
                            <div className="value pr-2">{data.number} </div>
                        </div>

                        <div className="product-size d-flex flex-row rtl col px-0 align-items-center">
                            <div className="title pr-0">سایز: </div>
                            <div className="value pr-2">{data.cart_values[0].effect_value.key}</div>
                        </div>

                        <div className="product-color d-flex flex-row justify-content-around rtl col px-0 align-items-center">
                            <div className="title pr-2">رنگ: </div>
                            <div className="value mr-2" style={{ backgroundColor:data.color.code }}> </div>
                        </div>
                    </div>


                </div>
                <div id={data.id} className="close-container col-1 px-0">
                    <CloseIcon clickHandler={deleteCartItem}/>
                </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCart:(data) => dispatch(fetchCart(data)),
    addCartSuccess : (data) => dispatch(addCartSuccess(data)),
})


export default connect(null,mapDispatchToProps)(CartItem)