import React,{useState,useEffect} from "react"
import "./Item.scss"
import {Link} from "react-router-dom";
import {basicUrl} from "../../basicUrl";



const Item = ({data}) => {
    const [totalColors,setTotalColors]=useState()
    useEffect(()=>{
        setTotalColors(data.colors.length)
    },[])
    return (
        data
            ?
            <Link to={`/detail/${data.slug}`}>
                <div className="item-container p-2">
                    <figure className="position-relative">
                        <img className="col-12 px-0" src={`${basicUrl}/images/product/${data.image}`} alt=""/>

                        <div>
                            <div className={data.discount == 0 ? `d-none` : `discount-num `}>
                                {data.discount}%
                                <span>
                                    تخفیف
                                </span>
                            </div>
                        </div>
                        <div className={`colors flex-row  ${data?.colors?.length > 1 ? `d-flex` : `d-none`}`}>

                                {data?.colors.length > 4
                                    ?
                                        <>
                                           { data?.colors.slice(0,3).map(
                                                item =>
                                                    <div key={item.id} id={item.id}
                                                         className={`color-item `} >
                                                        <img className="col-12 px-0"
                                                             src={`${basicUrl}/images/gallery/${item.image.image}`}
                                                             alt={item.name}
                                                             title={item.name}
                                                        />
                                                    </div>
                                            )}
                                            <div className={"color-item d-flex justify-content-center align-items-center" }>
                                                {` ${totalColors - 5}+`}
                                            </div>
                                        </>

                                    :
                                    data?.colors.map(
                                    item =>
                                        <div key={item.id} id={item.id}
                                             className={`color-item`} >
                                            <img className="col-12 px-0"
                                                 src={`${basicUrl}/images/gallery/${item.image.image}`}
                                                 alt={item.name}
                                                 title={item.name}
                                            />
                                        </div>
                                    )
                                }
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
                            className={`price-container mt-4 d-flex  flex-wrap ${data.discount === 0 ? "justify-content-end " : "justify-content-between"}  align-items-center mt-2 `}>
                            <div className={`last-price rtl pb-1 ${data.discount === 0 ? "d-none " : ""}`}>
                                {
                                    data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                }

                                 <span className="toman mr-1">تومان</span>
                            </div>
                            <div className=" new-price rtl px-0 ">
                                {(data.price - (data.price * data.discount / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                <span className="toman mr-1">تومان</span>
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