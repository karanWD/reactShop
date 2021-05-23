import React from "react"
import "./Item.scss"
import {Link} from "react-router-dom";
import {basicUrl} from "../../basicUrl";

const Item = ({data}) => {
    return (
        data
            ?
            <Link to={`/detail/${data.slug}`}>
                <div className="item-container p-2">
                    <figure>
                        <img className="col-12 px-0" src={`${basicUrl}/images/product/${data.image}`}
                             alt=""/>
                        <div>
                            <div className={data.discount == 0 ? `d-none` : `discount-num `}>
                                {data.discount}%
                                <span>
                                    تخفیف
                                </span>
                            </div>
                        </div>
                    </figure>
                    <figcaption className="px-1">
                        {/*<div className="brand">*/}
                        {/*    {data.brand}*/}
                        {/*</div>*/}
                        <div className="name">
                            {data.name}
                        </div>
                        <div className="desc mt-1">
                            {data.short_desc}
                        </div>
                        <div
                            className={`price-container d-flex  flex-wrap ${data.discount === 0 ? "justify-content-end " : "justify-content-between"}  align-items-center mt-2 `}>
                            <div className={`last-price rtl pb-1 ${data.discount === 0 ? "d-none " : ""}`}>
                                {
                                    data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                }
                                <span className="toman">تومان</span>
                            </div>
                            <div className=" new-price rtl px-0 ">
                                {(data.price - (data.price * data.discount / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className="toman">تومان</span>
                            </div>
                        </div>

                        <button className="secondary-btn mt-4">خرید</button>
                    </figcaption>
                </div>
            </Link>
            :
            null
    )
}

export default Item