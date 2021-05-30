import React from "react"
import "./ProductContainer.scss"
import Banner from "../Banner/Banner";
import ProductSlider from "../ProductSlider/ProductSlider";
import {connect} from "react-redux";
import {selectOneBanner} from "../../redux/Category/category-selector";

const ProductContainer = ({oneBanners})=>{
    return(
        <section className="product-container col-lg-9 px-1 px-lg-auto pb-5">
            <ProductSlider name="news"/>
            <Banner count="one" data={oneBanners?.i11}/>
            <ProductSlider name="news"/>
            <Banner count="one" data={oneBanners?.i12}/>
        </section>
    )
};

const mapStateToProps = state => ({
    oneBanners:selectOneBanner(state),
})

export default connect(mapStateToProps,)(ProductContainer)