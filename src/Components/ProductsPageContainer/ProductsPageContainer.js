import React, {useState} from "react"
import "./ProductPageContainer.scss"
import {connect} from "react-redux";
import {productsSelectorData} from "../../redux/Products/products-selector";
import Item from "../Item/Item";
import Pagination from "rc-pagination";
import BackIcon from "../ChevronLeft/ChevronLeft";
import axios from "axios";
import {fetchProducts} from "../../redux/Products/products-actions";
import {withRouter} from "react-router";
import Loading from "../Loading/Loading";
import {fetchLoading} from "../../redux/Loading/Loading-actions";
import {basicUrl} from "../../basicUrl";
import {fetchFilterBrand, fetchFilterPrice} from "../../redux/Filter/filter-actions";

const ProductsPageContainer = ({products,match,fetchProducts,setLoading, loading,filterPrice,filterBrand}) =>{
    const [pageIndex, setPageIndex] = useState(0)
    const changePage = async(current) => {
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
    }

    const setLoadingFunc = () => {
        setLoading("false")
    }

    return(
        products
        ?
        <section className="products-container col-lg-9">
            {
                products.current_page == pageIndex ? setLoadingFunc() : null
            }
            <div className="d-flex flex-row-reverse justify-content-between align-items-center px-3 products-title">
                <h1>
                    {match.params.catname}
                    <span className="pr-3 products-title-count">
                        (
                        <span className="px-1">
                            {products.total}
                        </span>
                        محصول
                        )

                    </span>
                </h1>
                {/*{console.log(products)}*/}
                <div className="d-none d-lg-block">
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
                        nextIcon={()=><div style={{transform:"rotate(180deg)"}}>
                            <BackIcon/>
                        </div>}
                    />
                </div>

            </div>

            <div className="d-flex flex-row-reverse flex-wrap">
                {
                    products.data.map(
                        productItems =>
                            <div className="col-6 col-lg-3 px-0 rtl">
                                <Item data={productItems}/>
                            </div>
                    )
                }
            </div>
            {loading === "true" ? <Loading/> : null}
        </section>
        :
        null
    )
}

const mapStateToProps = state => ({
    products:productsSelectorData(state),
    loading: state.loading.loading,
    filterPrice:state.filter.price,
    filterBrand:state.filter.brand
})
const mapDispatchToProps = (dispatch)=>({
    fetchProducts:(data) => dispatch(fetchProducts(data)),
    setLoading: (data) => dispatch(fetchLoading(data)),
    fetchFilterPrice:(data)=>dispatch(fetchFilterPrice(data)),
    fetchFilterBrand: (data)=>dispatch(fetchFilterBrand(data))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductsPageContainer))