import React from "react"
import "./Features.scss"
import Time from "./clock.svg"
import Guaranty from "./medal.svg"
import Delivery from "./free-delivery.svg"
import Coupon from "./coupon.svg"

const Features = ({page})=>{
    return(
        page == "detail"
            ?
            <section className="features detail-features pt-5 pt-lg-5 px-1 ">
                <ul className="d-flex px-1 px-lg-0 flex-row-reverse justify-content-around justify-content-lg-between flex-wrap">
                    <li className="col mx-2 mx-lg-2  px-0">
                            <div className="img-container d-flex justify-content-center align-items-center p-3">
                                <img className="col-12 px-0" src={Delivery} alt=""/>
                            </div>
                            <div className=" pt-2 px-0  0 ">
                                <h1 className="title text-center">ارسال رایگان</h1>
                            </div>
                    </li>
                    <li className="col mx-2 mx-lg-2  px-0">
                            <div className="img-container d-flex justify-content-center align-items-center p-3"><img className="col-12 px-0" src={Time} alt=""/></div>
                            <div className="pt-2  px-0">
                                <h1 className="title  text-center">ارسال سریع</h1>
                            </div>
                    </li>
                    <li className="col mx-2 mx-lg-2  px-0">
                            <div className="img-container d-flex justify-content-center align-items-center p-3"><img className="col-12 px-0" src={Guaranty} alt=""/></div>
                            <div className="pt-2  px-0   ">
                                <h1  className="title text-center">بهترین کیفیت</h1>
                            </div>
                    </li>
                    <li className="col mx-2 mx-lg-2  px-0">
                            <div className="img-container d-flex justify-content-center align-items-center p-3"><img className="col-12 px-0" src={Coupon} alt=""/></div>
                            <div className=" px-0   pt-2">
                                <h1 className="title text-center">تخفیف </h1>
                            </div>
                    </li>
                </ul>
            </section>
            :
            <section className="features pt-4 pt-lg-5 px-1">
                <ul className="d-flex px-1 px-lg-5 flex-row-reverse justify-content-around justify-content-lg-between flex-wrap">
                    <li className="col mx-2 mx-lg-0 col-lg-2 px-0">
                        <div className="d-lg-flex flex-row-reverse ">
                            <div className="col-lg-5 img-container d-flex justify-content-center align-items-center p-3"><img className="col-10 px-0" src={Delivery} alt=""/></div>
                            <div className="col-lg-7 pt-2 px-0  pr-lg-3 pl-lg-0 ">
                                <h1 className="title ">ارسال رایگان</h1>
                                <div className="desc ">ارسال رایگان محصولات </div>
                            </div>
                        </div>
                    </li>
                    <li className="col mx-2 mx-lg-0 col-lg-2 px-0">
                        <div className="d-lg-flex flex-row-reverse">
                            <div className="col-lg-5 img-container d-flex justify-content-center align-items-center p-3"><img className="col-10 px-0" src={Time} alt=""/></div>
                            <div className="col-lg-7  pt-2  px-0 pr-lg-3 pl-lg-0 ">
                                <h1 className="title">ارسال سریع</h1>
                                <div className="desc">ارسال محصولات در کمترین زمان</div>
                            </div>
                        </div>
                    </li>
                    <li className="col mx-2 mx-lg-0 col-lg-2 px-0">
                        <div className="d-lg-flex flex-row-reverse">
                            <div className="col-lg-5 img-container d-flex justify-content-center align-items-center p-3"><img className="col-10 px-0" src={Guaranty} alt=""/></div>
                            <div className="col-lg-7 pt-2  px-0 pr-lg-3 pl-lg-0 ">
                                <h1  className="title">تضمین کیفیت</h1>
                                <div className="desc">تضمین کییفیت تمام محصولات</div>
                            </div>
                        </div>
                    </li>
                    <li className="col mx-2 mx-lg-0 col-lg-2 px-0">
                        <div className="d-lg-flex flex-row-reverse">
                            <div className="col-lg-5 img-container d-flex justify-content-center align-items-center p-3"><img className="col-10 px-0" src={Coupon} alt=""/></div>
                            <div className="col-lg-7  px-0 pr-lg-3 pl-lg-0  pt-2">
                                <h1 className="title">تخفیف </h1>
                                <div className="desc">بهترین تخفیف های ممکن </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
    )
}

export default Features