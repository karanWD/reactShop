import React, {useEffect} from "react"
import "./DetailNav.scss"
import {withRouter} from "react-router";

const DetailNav = ({location}) => {
    // if( location.pathname.includes("detail")){
    //     console.log(location)
    //     window.onscroll = function () {
    //         var hT = document.querySelector("#scroll-to").offsetTop,
    //             hH = document.querySelector("#scroll-to").offsetHeight,
    //             wH = window.innerHeight,
    //             wS = this.scrollY;
    //         if (wS - 250 > (hT + hH - wH)) {
    //             if (document.querySelectorAll(".active-detail-nav")[0]) {
    //                 document.querySelectorAll(".active-detail-nav")[0].classList.remove("active-detail-nav")
    //                 document.querySelector(".info-link").classList.add("active-detail-nav")
    //             }
    //         }
    //         else if (document.querySelectorAll(".active-detail-nav")[0]) {
    //             document.querySelectorAll(".active-detail-nav")[0].classList.remove("active-detail-nav")
    //             document.querySelector(".gallery-link").classList.add("active-detail-nav")
    //
    //         }
    //     };
    // }
    useEffect(() => {

    },)

    return (
        <div className="detail-nav mt-5 mt-lg-4" id="scroll-to">
            <ul className="d-flex flex-row-reverse px-2 ">
                <li className="px-4  gallery-link ">
                    <a href={window.innerWidth>768 ? "#gallery" : "#mobileGallery"}>
                        گالری
                    </a>
                </li>
                <li className="px-4  info-link active-detail-nav">
                    مشخصات
                </li>
                {/*<li className="px-4">نظرات</li>*/}
            </ul>
        </div>
    )
}

export default withRouter(DetailNav)