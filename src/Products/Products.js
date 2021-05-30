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
import {searchMobileToggle, searchToggle} from "../redux/search/search-actions";
import {basicUrl} from "../basicUrl";
import {fetchFilterBrand, fetchFilterPrice} from "../redux/Filter/filter-actions";

const Products = ({match, fetchProducts, products, setLoading, loading,openSearchRes,closeSearch,searchMobileToggle,filterPrice,filterBrand,fetchFilterPrice,fetchFilterBrand}) => {
    const [pageIndex, setPageIndex] = useState(0)
    useEffect(async () =>
    {
        openSearchRes(false)
        // window.scrollTo(0,0)


        if(searchMobileToggle) {
            closeSearch()
        }
        let formData = new FormData()
        filterPrice && await formData.append("min_price",filterPrice[0]*1000000)
        filterPrice && await formData.append("max_price",filterPrice[1]*1000000)
        filterBrand  && await formData.append("brand_id",filterBrand)
        await formData.append("cat_name",match.params.catname)
        await formData.append("order_by","desc")
        await axios.post(`${basicUrl}/api/filter`,formData)
            .then(res=>fetchProducts(res))
    }, [filterPrice,filterBrand])

    useEffect(async () =>
    {
        openSearchRes(false)
        window.scrollTo(0,0)

        fetchFilterBrand(null)
        fetchFilterPrice(null)
        if(searchMobileToggle) {
            closeSearch()
        }
        let formData = new FormData()
        filterPrice && await formData.append("min_price",filterPrice[0]*1000000)
        filterPrice && await formData.append("max_price",filterPrice[1]*1000000)
        filterBrand  && await formData.append("brand_id",filterBrand)
        await formData.append("cat_name",match.params.catname)
        await formData.append("order_by","desc")
        await axios.post(`${basicUrl}/api/filter`,formData)
            .then(res=>fetchProducts(res))
    }, [match.params.catname])

    const changePage =async (current) => {
        window.scrollTo(0,0)
        setLoading("true")

        let formData = new FormData()
        filterPrice && await formData.append("min_price",filterPrice[0]*1000000)
        filterPrice && await formData.append("max_price",filterPrice[1]*1000000)
        filterBrand  && await formData.append("brand_id",filterBrand)
        await formData.append("cat_name",match.params.catname)
        await formData.append("order_by","desc")
        await axios.post(`${basicUrl}/api/filter?page=${current}`,formData)
            .then( async  res=>
                {
                    await fetchProducts(res)
                    await setPageIndex(current)
                }
            )


        // axios.get(basicUrl+`/api/products/fetch/${match.params.catname}?page=${current}`)
        //     .then(res => fetchProducts(res))
        //     .then()
    }

    const setLoadingFunc = () => {
        setLoading("false")
    }

    return (
        products
            ?
            <section className="product-page">
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
                                <div style={{transform: "rotate(180deg)"}}>
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
    setLoading: (data) => dispatch(fetchLoading(data)),
    openSearchRes:(data)=>dispatch(searchToggle(data)),
    closeSearch : ()=>dispatch(searchMobileToggle()),
    fetchFilterPrice:(data)=>dispatch(fetchFilterPrice(data)),
    fetchFilterBrand: (data)=>dispatch(fetchFilterBrand(data))
})

const mapStateToProps = state => ({
    products: productsSelectorData(state),
    loading: state.loading.loading,
    searchMobileToggle : state.search.searchMobileToggle,
    filterPrice:state.filter.price,
    filterBrand:state.filter.brand,

})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Products))