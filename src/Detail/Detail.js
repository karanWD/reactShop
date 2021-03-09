import React, {useState, useEffect, Suspense, lazy} from "react"
import "./Detail.scss"
//packages
import axios from "axios";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
//redux
import {fetchDetail} from "../redux/detail/detail-actions";
import {detailDataSelector} from "../redux/detail/detail-selector";
import {selectSizeSelected} from "../redux/selectSize/selectSize-selector";
import {selectColorSelected} from "../redux/selectColor/selectColor-selector";
import {selectCountSelector} from "../redux/selectCount/selectCount-selector";
import {addCartFail, addCartSuccess, openCart} from "../redux/cart/cart-actions";
import {proSizeSelected} from "../redux/selectSize/selectSize-actions";
import {fetchColorExist, proColorSelected} from "../redux/selectColor/selectColor-actions";
import {fetchLoading} from "../redux/Loading/Loading-actions";
//components
const ProductGallery = lazy(() => {
    return Promise.all([
        import("../Components/ProductGallery/ProductGallery"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const Breadcrumb = lazy(() => {
    return Promise.all([
        import("../Components/Breadcrumb/Breadcrumb"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const ProductInfo = lazy(() => {
    return Promise.all([
        import("../Components/ProductInfo/ProductInfo"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const SelectSize = lazy(() => {
    return Promise.all([
        import("../Components/SelectSize/SelectSize"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const SelectColor = lazy(() => {
    return Promise.all([
        import("../Components/SelectColor/SelectColor"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const SelectCount = lazy(() => {
    return Promise.all([
        import("../Components/SelectCount/SelectCount"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const Button = lazy(() => {
    return Promise.all([
        import("../Components/Button/Button"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const Features = lazy(() => {
    return Promise.all([
        import("../Components/Features/Features"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const ProductDesc = lazy(() => {
    return Promise.all([
        import("../Components/ProductDesc/ProductDesc"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const ProductSlider = lazy(() => {
    return Promise.all([
        import("../Components/ProductSlider/ProductSlider"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const Alert = lazy(() => {
    return Promise.all([
        import("../Components/Alert/Alert"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const Loading = lazy(() => {
    return Promise.all([
        import("../Components/Loading/Loading"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})

// import ProductGallery from "../Components/ProductGallery/ProductGallery";
// import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
// import ProductInfo from "../Components/ProductInfo/ProductInfo";
// import SelectSize from "../Components/SelectSize/SelectSize";
// import SelectColor from "../Components/SelectColor/SelectColor";
// import SelectCount from "../Components/SelectCount/SelectCount";
// import Button from "../Components/Button/Button";
// import Features from "../Components/Features/Features";
// import ProductDesc from "../Components/ProductDesc/ProductDesc";
// import ProductSlider from "../Components/ProductSlider/ProductSlider";
// import Alert from "../Components/Alert/Alert";
// import Loading from "../Components/Loading/Loading";



const Detail = ({
                    detailData, fetchDetail, proCount, proColor, proSize, match, openCartFunc, proSizeSelected,
                    fetchColorExist, proColorSelected, addCartSuccess, addCartFail, setLoading, loading
                }) => {

    let {proname} = useParams()
    const [sizeAlert, setSizeAlert] = useState(false)
    const [colorAlert, setColorAlert] = useState(false)
    const [countAlert, setCountAlert] = useState(false)
    useEffect(() => {
        axios.get(`https://api.mandegar-shop.ir/api/detail/product/${proname}`)
            .then(
                res => fetchDetail(res)
            )
            .then(proSizeSelected(null))
            .then(fetchColorExist(null))
            .then(proColorSelected(null))
            .then(
                () => {
                    setSizeAlert(false)
                    setColorAlert(false)
                    setCountAlert(false)
                }
            )
    }, [proname])
    const buyCheck = () => {
        // console.log(cartCookie)
        // console.log(proSize,proColor,proCount)

        if (proSize && proCount && proColor) {
            // console.log(proSize,proCount,proColor,detailData.name,)
            let formData = new FormData
            var discountPrice = detailData.price - (detailData.price * detailData.discount / 100)

            formData.append("effects", proSize)
            formData.append("color", proColor)
            formData.append("product", detailData.name)
            formData.append("price", detailData.price)
            formData.append("cal_discount", discountPrice)

            //Setting Cookie and posting the data
            if (localStorage.getItem("cart-cookie")) {
                // console.log("hasCookie")
                formData.append("cart", localStorage.getItem("cart-cookie"))
                axios.post(`https://api.mandegar-shop.ir/api/cart/store`, formData)
                    .then(
                        // res => console.log(res)
                        res => res.status = "200" ? addCartSuccess("محصول موردنظر با موفقیت به سبد شما اضافه شد") : addCartFail()
                    )
                    .then(openCartFunc)

            } else {
                axios.post(`https://api.mandegar-shop.ir/api/cart/store`, formData)
                    .then(res => localStorage.setItem("cart-cookie", res.data.cookie))
                    .then(
                        // res => console.log(res)
                        res => res.status = "200" ? addCartSuccess("محصول موردنظر با موفقیت به سبد شما اضافه شد") : addCartFail()
                    )
                    .then(openCartFunc)

            }
            console.log("post Cart Succeed")
        }
        if (!proSize) {
            setSizeAlert(true)
        } else if (proSize) {
            setSizeAlert(false)
        }
        if (!proColor) {
            // console.log("select color")
            setColorAlert(true)
        } else if (proColor) {
            setColorAlert(false)
        }
        if (proCount == 0) {
            // console.log("select count")
            setCountAlert(true)
        } else if (proCount > 0) {
            setCountAlert(false)
        }
    }

    return (
        detailData
            ?
            <>
                <section className="mt-lg-3 pt-lg-5 px-lg-5">
                    <div className="d-flex flex-row-reverse flex-wrap  position-relative">
                        <div className="product-gallery col-lg-7 px-0 px-lg-auto">
                            <ProductGallery/>
                            {
                                window.innerWidth < 992
                                    ?
                                    <div className="product-info col-lg-5">
                                        <Breadcrumb/>
                                        <ProductInfo/>
                                        <SelectSize/>
                                        <SelectColor/>
                                        <SelectCount/>
                                        <div className="col-lg-7 mt-5 mr-0 ml-auto px-0">
                                            <Button clickHandler={buyCheck} type="primary" icon="./buyCartIcon.png"
                                                    text="افزودن به سبد خرید "/>
                                        </div>
                                        <div className="col-lg-8 mr-0 ml-auto px-0">
                                            <Features page="detail"/>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            <ProductDesc/>
                        </div>
                        {
                            window.innerWidth > 992
                                ?
                                <div className="product-info col-lg-5">
                                    <Suspense fallback={<Loading/>}>
                                        <Breadcrumb/>
                                        <ProductInfo/>
                                        <div className="position-relative">
                                            <SelectSize/>
                                            <div className={`alert-container my-1 ${sizeAlert ? "d-block" : "d-none"}`}>
                                                <Alert type="error" text="لطفا سایز را انتخاب کنید"/>
                                            </div>
                                        </div>
                                        <div className="position-relative">
                                            <SelectColor/>
                                            <div
                                                className={`alert-container my-1 ${colorAlert ? "d-block" : "d-none"}`}>
                                                <Alert type="error" text="لطفا رنگ را انتخاب کنید"/>
                                            </div>
                                        </div>
                                        <div className="position-relative">
                                            <SelectCount/>
                                            <div
                                                className={`alert-container my-1 ${countAlert ? "d-block" : "d-none"}`}>
                                                <Alert type="error" text="لطفا تعداد را انتخاب کنید"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mt-5 mr-0 ml-auto px-0">
                                            <Button clickHandler={buyCheck} type="primary" icon="./buyCartIcon.png"
                                                    text="افزودن به سبد خرید "/>
                                        </div>
                                        <div className="col-lg-8 mr-0 ml-auto px-0">
                                            <Features page="detail"/>
                                        </div>
                                    </Suspense>
                                </div>
                                :
                                null
                        }
                    </div>
                    <div className="py-5">
                        <Suspense fallback={<Loading/>}>
                            <ProductSlider name="similar"/>
                            <ProductSlider/>
                        </Suspense>
                    </div>
                </section>
                {loading == "true" ? <Loading/> : null}
            </>
            :
            null
    )
}

const mapStateToProps = state => ({
    detailData: detailDataSelector(state),
    proSize: selectSizeSelected(state),
    proColor: selectColorSelected(state),
    proCount: selectCountSelector(state),
    loading: state.loading.loading
})

const mapDispatchToProps = dispatch => ({
    fetchDetail: (data) => dispatch(fetchDetail(data)),
    openCartFunc: () => dispatch(openCart()),
    proSizeSelected: (data) => dispatch(proSizeSelected(data)),
    fetchColorExist: (data) => dispatch(fetchColorExist(data)),
    proColorSelected: (data) => dispatch(proColorSelected(data)),
    addCartSuccess: (data) => dispatch(addCartSuccess(data)),
    addCartFail: () => dispatch(addCartFail()),
    setLoading: (data) => dispatch(fetchLoading(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail))