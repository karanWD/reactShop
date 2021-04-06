import React,{useEffect} from "react"
import "./SearchCat.scss"
//images
import Tshirt from "./tshirt.png"
import Suit from "./suit.png"
import Shoe from "./shoe.png"
import Watch from "./watch.png"
import Hoodie from "./hoodie.png"
import Sleeveless from "./sleeveless.png"
import axios from "axios";
import {connect} from "react-redux";
import {fetchCatList} from "../../redux/Category/category-actions";
import {selectCatList} from "../../redux/Category/category-selector";

const SearchCat = ({catList,fetchCatList}) => {
    useEffect(()=>{
        axios.get("http://api.mandegar-shop.ir/api/fetch/cats")
            .then(
                res => fetchCatList(res.data)
            )
    },[])
    return (
        <section className="search-cat px-2 px-lg-5 mt-5">
            {/*{console.log(catList)}*/}
            <ul className="d-flex flex-row-reverse flex-wrap col-12 mt-3 px-0">
                {
                    catList?.length > 0
                        ?
                            catList.map(
                                item =>
                                    <li className="d-flex flex-row-reverse procat-item-container">
                                        <div className="cat-img col-5 d-flex align-items-center justify-content-center">
                                            <img className="col-10  px-0" src={item.image} alt=""/>
                                        </div>
                                        <div className="cat-name col-7 px-0 d-flex align-items-center justify-content-end">
                                           {item.name}
                                        </div>
                                    </li>
                            )
                        :
                        null
                }

                {/*<li className="d-flex flex-row-reverse procat-item-container">*/}
                {/*    <div className="cat-img col-5 d-flex align-items-center justify-content-center">*/}
                {/*        <img className="col-10 px-0" src={Tshirt} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="cat-name col-7 px-0 d-flex align-items-center justify-content-end">*/}
                {/*        تی شرت*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li className="d-flex flex-row-reverse procat-item-container">*/}
                {/*    <div className="cat-img col-5 d-flex align-items-center justify-content-center">*/}
                {/*        <img className="col-10 px-0" src={Hoodie} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="cat-name col-7 px-0 d-flex align-items-center justify-content-end">*/}
                {/*        سوییشرت و هودی*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li className="d-flex flex-row-reverse procat-item-container">*/}
                {/*    <div className="cat-img col-5 d-flex align-items-center justify-content-center">*/}
                {/*        <img className="col-12 px-0" src={Shoe} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="cat-name col-7 px-0 d-flex align-items-center justify-content-end">*/}
                {/*        کفش*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li className="d-flex flex-row-reverse procat-item-container">*/}
                {/*    <div className="cat-img col-5 d-flex align-items-center justify-content-center">*/}
                {/*        <img className="col-10 px-0" src={Watch} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="cat-name col-7 px-0 d-flex align-items-center justify-content-end">*/}
                {/*        ساعت و زیورآلات*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li className="d-flex flex-row-reverse procat-item-container">*/}
                {/*    <div className="cat-img col-5 d-flex align-items-center justify-content-center">*/}
                {/*        <img className="col-10 px-0" src={Sleeveless} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="cat-name col-7 px-0 d-flex align-items-center justify-content-end">*/}
                {/*        لباس زیر و راحتی*/}
                {/*    </div>*/}
                {/*</li>*/}
            </ul>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCatList : (data) => dispatch(fetchCatList(data))
})

const mapStateToProps = state =>({
    catList : selectCatList(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(SearchCat)