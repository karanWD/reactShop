import React from "react"
import "./Checkout.scss"
import Delivery from "../Components/Delivery/Delivery";

const Checkout = () => {
    return(
        <section className="checkout d-flex flex-row-reverse mt-5 pt-lg-5 px-lg-5">
            <div className="col-lg-6">
              <Delivery/>
            </div>
            <div className="col-lg-6"></div>
        </section>
    )
}

export default Checkout