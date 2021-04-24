import React from "react"
import "./Item.scss"
import {Link} from "react-router-dom";
import ItemImg from "./item.png"

const Item = ({data})=>{
    // console.log(data)
    return(
        data
            ?
            <Link to={`/detail/${data.slug}`}>
                <div className="item-container p-2" >
                    <figure>
                        <img className="col-12 px-0" src={`https://api.mandegar-shop.ir/images/product/${data.image}`} alt=""/>
                        {/*<div className={data.discount == 0 ? `d-none`:`discount-num mr-3`}>*/}
                        {/*    {data.discount}%*/}
                        {/*    <span>*/}
                        {/*            تخفیف*/}
                        {/*            </span>*/}
                        {/*</div>*/}
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
                        <div className="price-container d-flex  flex-wrap justify-content-between align-items-end mt-2">
                            <div className={`last-price rtl pb-1 ${data.discount === 0?"d-none":""}`}>{data.price} <span className="toman">تومان</span></div>
                            <div>
                                <div className={data.discount == 0 ? `d-none`:`discount-num `}>
                                    {data.discount}%
                                    <span>
                                    تخفیف
                                    </span>
                                </div>
                                <div className=" new-price rtl d-block col-12 px-0 mt-2"> {data.price - (data.price * data.discount / 100)} <span className="toman">تومان</span> </div>
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