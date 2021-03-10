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
                    </figure>
                    <figcaption>
                        <div className="name">
                            {data.name}
                        </div>
                        <div className="desc ">
                            {data.brand}
                        </div>
                        <div className="size mt-3 ">
                            {/*<ul className="col-12 px-0 d-flex flex-row-reverse flex-wrap">*/}
                            {/*    <li className="">XS</li>*/}
                            {/*    <li className="">-</li>*/}
                            {/*    <li className="">S</li>*/}
                            {/*    <li className="">-</li>*/}
                            {/*    <li className="">M</li>*/}
                            {/*    <li className="">-</li>*/}
                            {/*    <li className="">L</li>*/}
                            {/*    <li className="">-</li>*/}
                            {/*    <li className="">XL</li>*/}
                            {/*    <li className="">-</li>*/}
                            {/*    <li className="">XXL</li>*/}
                            {/*</ul>*/}
                        </div>
                        <div className="price-container d-flex flex-row-reverse justify-content-between mt-3">

                            <div className={`last-price rtl ${data.discount === 0?"d-none":""}`}>{data.price} <span className="toman">تومان</span></div>
                            <div className="new-price rtl"> {data.price - (data.price * data.discount / 100)} <span className="toman">تومان</span> </div>
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