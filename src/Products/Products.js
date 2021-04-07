import React, {useEffect, useState} from "react"
import "./Products.scss"
import Carousel from "../Components/Carousel/Carousel";
import Features from "../Components/Features/Features";
import ProCat from "../Components/ProCat/ProCat";
import Filter from "../Components/Filter/Filter";
import ProductsPageContainer from "../Components/ProductsPageContainer/ProductsPageContainer";
import axios from "axios";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {fetchProducts} from "../redux/Products/products-actions";
import {productsSelectorData} from "../redux/Products/products-selector";
import Pagination from 'rc-pagination'
import BackIcon from "../Components/ChevronLeft/ChevronLeft";
import {fetchLoading} from "../redux/Loading/Loading-actions";
import Loading from "../Components/Loading/Loading";

const Products = ({match, fetchProducts, products, setLoading, loading}) => {
    const [pageIndex, setPageIndex] = useState(0)

    useEffect(() => {
        axios.get(`https://api.mandegar-shop.ir/api/products/fetch/${match.params.catname}`)
            .then(res => fetchProducts(res))
    }, [match.params.catname])

    const changePage = (current) => {
        setLoading("true")
        axios.get(`https://api.mandegar-shop.ir/api/products/fetch/${match.params.catname}?page=${current}`)
            .then(res => fetchProducts(res))
            .then(setPageIndex(current))
    }
    const setLoadingFunc = () => {
        setLoading("false")
    }
    return (
        products
            ?
            <section>
                {
                    products.current_page == pageIndex ? setLoadingFunc() : null
                }
                <Carousel/>
                <Features/>
                <ProCat/>
                <div className="d-flex flex-row-reverse mt-lg-5 pt-5">
                    <Filter/>
                    <ProductsPageContainer/>
                </div>
                <div className="mt-5">
                    <Pagination
                        onChange={changePage}
                        current={products.current_page}
                        total={products.total}
                        pageSize={products.per_page}
                        hideOnSinglePage={true}
                        showTitle={false}
                        defaultCurrent={1}
                        className={"products-pagination"}
                        prevIcon={BackIcon}
                        nextIcon={
                            () =>
                                <div style={{transform: "rotate(180deg)", paddingBottom: "6px"}}>
                                    <BackIcon/>
                                </div>
                            }
                    />
                </div>
                {loading === "true" ? <Loading/> : null}
            </section>
            :
            null
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (data) => dispatch(fetchProducts(data)),
    setLoading: (data) => dispatch(fetchLoading(data))
})

const mapStateToProps = state => ({
    products: productsSelectorData(state),
    loading: state.loading.loading
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products))