import React from "react"
import "./SideCat.scss"
//images
import Tshirt from "./tshirt.png"
import Suit from "./suit.png"
import Shoe from "./shoe.png"
import Watch  from "./watch.png"
import Hoodie from "./hoodie.png"
import Sleeveless from "./sleeveless.png"

const SideCat = ()=>{
    return(
        <section className="sidecat col-lg-3 mt-5 pt-2">
            <h1>دسته بندی محصولات</h1>
            <ul className="text-right mt-4">
                <li className="d-flex flex-row-reverse">
                    <div className="cat-img col-3 d-flex align-items-center justify-content-center">
                        <img className="col-7  px-0" src={Suit} alt=""/>
                    </div>
                    <div className="cat-name col-9 d-flex align-items-center justify-content-end">
                        کت و شلوار
                    </div>
                </li>
                <li className="d-flex flex-row-reverse">
                    <div className="cat-img col-3 d-flex align-items-center justify-content-center">
                        <img className="col-8 px-0" src={Tshirt} alt=""/>
                    </div>
                    <div className="cat-name col-9 d-flex align-items-center justify-content-end">
                        تی شرت
                    </div>
                </li>
                <li className="d-flex flex-row-reverse">
                    <div className="cat-img col-3 d-flex align-items-center justify-content-center">
                        <img className="col-8 px-0" src={Hoodie} alt=""/>
                    </div>
                    <div className="cat-name col-9 d-flex align-items-center justify-content-end">
                        سوییشرت و هودی
                    </div>
                </li>
                <li className="d-flex flex-row-reverse">
                    <div className="cat-img col-3 d-flex align-items-center justify-content-center">
                        <img className="col-10 px-0" src={Shoe} alt=""/>
                    </div>
                    <div className="cat-name col-9 d-flex align-items-center justify-content-end">
                        کفش
                    </div>
                </li>
                <li className="d-flex flex-row-reverse">
                    <div className="cat-img col-3 d-flex align-items-center justify-content-center">
                        <img className="col-5 px-0" src={Watch} alt=""/>
                    </div>
                    <div className="cat-name col-9 d-flex align-items-center justify-content-end">
                       ساعت و زیورآلات
                    </div>
                </li>
                <li className="d-flex flex-row-reverse">
                    <div className="cat-img col-3 d-flex align-items-center justify-content-center">
                        <img className="col-7 px-0" src={Sleeveless} alt=""/>
                    </div>
                    <div className="cat-name col-9 d-flex align-items-center justify-content-end">
                        لباس زیر و راحتی
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default SideCat