import React,{useEffect,Suspense,lazy} from "react"
import axios from "axios"
import {connect} from "react-redux";

import Category from "../Components/Category/Category";
import Slider from "../Components/Slider/Slider";
import Banner from "../Components/Banner/Banner";
import SideCat from "../Components/SideCat/SideCat";
import ProductContainer from "../Components/ProductContainer/ProductContainer";
import Carousel from "../Components/Carousel/Carousel";
import Features from "../Components/Features/Features";
import {fetchCat} from "../redux/Category/category-actions";
import {selectCategory, selectThreeBanner} from "../redux/Category/category-selector";
import Loading from "../Components/Loading/Loading";

// const Category = lazy(()=> import("../Components/Category/Category"))
// const Slider = lazy(()=> import("../Components/Slider/Slider"))
// const Banner = lazy(()=> import("../Components/Banner/Banner"))
// const SideCat = lazy(()=> import("../Components/SideCat/SideCat"))
// const ProductContainer = lazy(()=> import("../Components/ProductContainer/ProductContainer"))
// const Carousel = lazy(()=> import("../Components/Carousel/Carousel"))
// const Features = lazy(()=> import("../Components/Features/Features"))


const Home = ({catFetch,categoryItems,threeBanners})=>{

    useEffect(()=>{
        axios.get("https://api.mandegar-shop.ir/api/banner/fetch/all")
            .then(
                // res => console.log(res)
                res => catFetch(res)
            )
    },[])

    // console.log(categoryItems)
    // console.log(threeBanners)
    return(
            // <Suspense fallback={<Loading/>}>
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
             // </Suspense>

    )
}

const mapDispatchToProps = dispatch => ({
    catFetch:(catApi) => dispatch(fetchCat(catApi))
})

const mapStateToProps = (state) => ({
    categoryItems:selectCategory(state),
    threeBanners:selectThreeBanner(state),
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)