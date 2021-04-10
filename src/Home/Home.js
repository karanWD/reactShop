import React,{useEffect,Suspense,lazy} from "react"
import axios from "axios"
import {connect} from "react-redux";

// import Category from "../Components/Category/Category";
// import Slider from "../Components/Slider/Slider";
// import Banner from "../Components/Banner/Banner";
// import SideCat from "../Components/SideCat/SideCat";
// import ProductContainer from "../Components/ProductContainer/ProductContainer";
// import Carousel from "../Components/Carousel/Carousel";
// import Features from "../Components/Features/Features";
import {fetchCat} from "../redux/Category/category-actions";
import {selectCategory, selectThreeBanner} from "../redux/Category/category-selector";
import {searchMobileToggle} from "../redux/search/search-actions";
// import Loading from "../Components/Loading/Loading";

const Category = lazy(() => {
    return Promise.all([
        import("../Components/Category/Category"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const Slider = lazy(() => {
    return Promise.all([
        import("../Components/Slider/Slider"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const Banner = lazy(() => {
    return Promise.all([
        import("../Components/Banner/Banner"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const SideCat = lazy(() => {
    return Promise.all([
        import("../Components/SideCat/SideCat"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const ProductContainer = lazy(() => {
    return Promise.all([
        import("../Components/ProductContainer/ProductContainer"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const Carousel = lazy(() => {
    return Promise.all([
        import("../Components/Carousel/Carousel"),
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
const Loading = lazy(() => {
    return Promise.all([
        import("../Components/Loading/Loading"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})

const Home = ({catFetch,categoryItems,threeBanners,closeSearch,searchMobileToggle})=>{

    useEffect(()=>{
        if(window.innerWidth < 768 && searchMobileToggle) { closeSearch()}
        window.scrollTo(0,0)
        axios.get("https://api.mandegar-shop.ir/api/banner/fetch/all")
            .then(
                // res => console.log(res)
                res => catFetch(res)
            )
    },[])

    // console.log(categoryItems)
    // console.log(threeBanners)
    return(
            <Suspense fallback={<Loading/>}>
                <section className="home">
                    {/*{console.log(categoryItems)}*/}
                    <Carousel/>
                    <Features page="home"/>
                    <Category category={categoryItems}/>
                    <Slider/>
                    <Banner count="three" data={threeBanners}/>
                    <div className="d-flex flex-row-reverse flex-wrap pb-lg-5">
                        <SideCat/>
                        <ProductContainer/>
                    </div>
                </section>
            </Suspense>
    )
}

const mapDispatchToProps = dispatch => ({
    catFetch:(catApi) => dispatch(fetchCat(catApi)),
    closeSearch : ()=>dispatch(searchMobileToggle())
})

const mapStateToProps = (state) => ({
    categoryItems:selectCategory(state),
    threeBanners:selectThreeBanner(state),
    searchMobileToggle : state.search.searchMobileToggle
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)