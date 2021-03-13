import React from "react"
import "./Category.scss"
import {Link} from "react-router-dom";
import Loading from "../Loading/Loading";

const Category = ({category}) => {
    console.log(category)
    return (
        category
            ?
            <section className="category d-flex flex-row flex-wrap px-1 px-lg-5 mt-5">
                <div className="col-lg-5 px-0">
                    <div className="col-12 px-0 py-1">
                        <div className="px-1">
                            <Link to={category.i5.url}>
                                <img className="w-100"
                                     src={`https://api.mandegar-shop.ir/images/index/${category.i5.image}`} alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 px-0 d-flex flex-row-reverse py-1">
                        <div className="col-6 px-1">
                            <Link to={category.i6.url}>
                                <img className="w-100"
                                     src={`https://api.mandegar-shop.ir/images/index/${category.i6.image}`}
                                     alt=""/>
                            </Link>
                        </div>

                        <div className="col-6 px-1">
                            <Link to={category.i7.url}>
                                <img className="w-100"
                                     src={`https://api.mandegar-shop.ir/images/index/${category.i7.image}`}
                                     alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 px-0">
                    <div className="col-12 px-0 d-flex flex-row-reverse py-1">
                        <div className="col-4 px-1">
                            <Link to={category.i1.url}>
                                <img style={{height: "100%", objectFit: "cover"}}
                                     className="w-100"
                                     src={`https://api.mandegar-shop.ir/images/index/${category.i1.image}`}
                                     alt=""/>
                            </Link>
                        </div>

                        <div className="col-8 px-1">
                            <Link to={category.i2.url}>
                                <img className="w-100"
                                     src={`https://api.mandegar-shop.ir/images/index/${category.i2.image}`}
                                     alt=""/>
                            </Link>
                        </div>

                    </div>
                    <div className="col-12 px-0 d-flex flex-row-reverse py-1" style={{height: "60%"}}>
                        <div className="col-8 px-1">
                            <Link to={category.i3.url}>
                                <img style={{height: "100%", objectFit: "cover"}}
                                     className="w-100"
                                     src={`https://api.mandegar-shop.ir/images/index/${category.i3.image}`}
                                     alt=""/>
                            </Link>
                        </div>

                        <div className="col-4 px-1">
                            <Link to={category.i4.url}>
                                <img style={{height: "100%", objectFit: "cover"}}
                                     className="w-100"
                                     src={`https://api.mandegar-shop.ir/images/index/${category.i4.image}`}
                                     alt=""/>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
            :
            // <Loading/>
            null
    )
}

export default Category