import React, {useRef, useEffect} from "react"
import "./ProductInfo.scss"
import {connect} from "react-redux";
import {detailDataSelector} from "../../redux/detail/detail-selector";

const ProductInfo = ({detailInfo,priceColorVar,priceSizeVar}) => {

    const shortDesc = useRef()
    useEffect(() => {
        shortDesc.current.innerHTML = detailInfo.short_desc
    })
    return (
        <>
            <div className="product-name text-right">
                <h1 className="name">{detailInfo.name}</h1>
                <p className="desc" id="desc" ref={shortDesc}>
                </p>
            </div>
            <div className="product-price   mt-4 text-right">
                <div className="d-flex flex-row-reverse flex-wrap">
                    <div className={detailInfo.discount === 0 ? `d-none` : `last-price rtl`}>
                        {(detailInfo.price + (priceColorVar?.price > 0 ? priceColorVar.price : 0 ) + (priceSizeVar ? priceSizeVar : 0) ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  <span className="toman">تومان</span>
                    </div>
                    <div className={`discount-num mr-3 ${detailInfo.discount === 0 ? "d-none" : ""}`}>
                        {`${detailInfo.discount}%`}
                    </div>
                </div>
                <div className="new-price rtl d-block">
                    {( (detailInfo.price + (priceColorVar ? priceColorVar : 0 ) + (priceSizeVar ? priceSizeVar : 0) ) - (detailInfo.price * detailInfo.discount / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}

                    <span className="toman pr-2">تومان</span>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    detailInfo: detailDataSelector(state),
    priceColorVar:state.price.priceColorVar,
    priceSizeVar:state.price.priceSizeVar
})
export default connect(mapStateToProps)(ProductInfo)