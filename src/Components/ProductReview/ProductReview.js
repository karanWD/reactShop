import React from "react"
import "./ProductReview.scss"
import {connect} from "react-redux";
import ProOne from "./pro1.png"
import ProTwo from "./pro4.png"
import ProThree from "./pro5.png"

import {detailDataSelector} from "../../redux/detail/detail-selector";


const ProductReview = ({proReview})=>{
    return(
        <div className="product-review text-right mt-4">
            {proReview.description}
            {/*<div className="d-flex flex-row-reverse flex-wrap align-items-center">*/}
            {/*    <div className="col-lg-8 mt-5 mt-lg-0">*/}
            {/*        <h4>*/}
            {/*            {proReview.name}*/}
            {/*        </h4>*/}
            {/*        <p dangerouslySetInnerHTML={{__html: proReview.description}}></p>*/}
            {/*    </div>*/}
            {/*    <div className="col-lg-4"><img className="col-12 px-0" src={ProOne} alt=""/></div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <img className="col-12 my-4" src={ProThree} alt=""/>*/}
            {/*</div>*/}
            {/*<div className="d-flex flex-row flex-wrap align-items-center">*/}
            {/*    <div className="col-lg-8">*/}
            {/*        <h4>*/}
            {/*            {proReview.name}*/}
            {/*        </h4>*/}
            {/*        <p dangerouslySetInnerHTML={{__html: proReview.description}}></p>*/}
            {/*    </div>*/}
            {/*        <div className="col-lg-4"><img className="col-12 px-0" src={ProTwo} alt=""/></div>*/}
            {/*</div>*/}
        </div>
    )
}

const mapStateToProps = state => ({
    proReview:detailDataSelector(state)
})

export default connect(mapStateToProps)(ProductReview)