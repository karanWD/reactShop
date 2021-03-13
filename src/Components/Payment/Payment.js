import React, {useEffect} from "react"
import "./Payment.scss"
import BackIcon from "../ChevronLeft/ChevronLeft";
import {openAccordion} from "../../redux/Checkout/Checkout-actions";
import {connect} from "react-redux";
import Button from "../Button/Button";


const Payment = ({openedAccordion, openAccordion}) => {
    return (
        <div className={`payment-container ${openedAccordion == "payment" ? "open-accordion" : null}`}>
            <div className="title">
                <h1 className="rtl">2. طریقه پرداخت </h1>
                <BackIcon/>
            </div>
            <div
                className={`text-right  form-container ${openedAccordion == "payment" ? "mt-4" : null}`}>
                <p className="mr-3">طریقه پرداخت خود را انتخاب کنید </p>
                <ul className="d-flex flex-row-reverse ">
                    <li>پرداخت آنلاین</li>
                    <li>پرداخت حضوری</li>
                </ul>
                <div className="d-flex flex-row justify-content-end mt-5">
                    <Button clickHandler={() => openAccordion("faktor")} type="secondary" text="انتخاب و پرداخت"/>
                    <button onClick={() => openAccordion("delivery")} className="light-btn ml-4">
                       <div>
                           ویرایش اطلاعات و آدرس
                       </div>
                        <div style={{
                            transform : "rotate(180deg)",
                            marginLeft:"5px",
                            marginTop:"5px"
                        }}>
                            <BackIcon/>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    openedAccordion: state.checkout.openedAccordion
})
const mapDispatchToProps = dispatch => ({
    openAccordion: (data) => dispatch(openAccordion(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Payment)