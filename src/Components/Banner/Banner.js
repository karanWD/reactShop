import React from "react"
import "./Banner.scss"
import Banner1 from "./banner1.png"
import Banner2 from "./banner2.png"
import Banner3 from "./banner3.png"
import BannerOne from "./bannerOne.png"
import Loading from "../Loading/Loading";
import {basicUrl} from "../../basicUrl";


const Banner =({count,data})=>{
    // console.log(count)
    // console.log(data)
    if(data){
        if(count != "one" ){
            return(
                <section className="banner-container mt-5">
                    <div className="d-flex flex-row-reverse flex-wrap">
                        <div className="col-12 col-lg px-2 mt-2 mt-lg-0"><img className="col-12 px-0" src={`${basicUrl}/images/index/${data.i8.image}`} alt=""/></div>
                        <div className="col-12 col-lg px-2 mt-2 mt-lg-0"><img className="col-12 px-0" src={`${basicUrl}/images/index/${data.i9.image}`} alt=""/></div>
                        <div className="col-12 col-lg px-2 mt-2 mt-lg-0"><img className="col-12 px-0" src={`${basicUrl}/images/index/${data.i10.image}`} alt=""/></div>
                    </div>
                </section>
            )
        }
        else {
            return(
                <section className="banner-container mt-5">
                    <div className="d-flex flex-row-reverse">
                        <div className="col px-2"><img className="col-12 px-0" src={`${basicUrl}/images/index/${data.i11.image}`} alt=""/></div>
                    </div>
                </section>
            )
        }
    }
    else{
        // return <Loading/>
        return null
    }

}

export  default Banner