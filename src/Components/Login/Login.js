import React from "react"
import "./Login.scss"
import BackIcon from "../ChevronLeft/ChevronLeft";
import Alert from "../Alert/Alert";
import CartItem from "../CartItem/CartItem";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

const Login = ()=>{
    return(
        <section className="login-container">
                <div className={`cart px-0 `}>
                    <div className="bg-white h-100 ">
                        <div
                            className="cart-header d-flex flex-row-reverse justify-content-between align-items-center pt-4 px-3">
                            <h1 className="title mb-0">ورود به نیوشاپ</h1>
                            <BackIcon />
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Login