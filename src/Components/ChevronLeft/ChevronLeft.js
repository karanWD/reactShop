import React from "react"
import "./ChevronLeft.css"
import Chevron from "./chevron-left.svg"

const BackIcon = ({clickHandler})=>{
    return(
        <div className="back-icon" onClick={clickHandler}>
            <img src={Chevron} alt=""/>
        </div>
    )
}

export default BackIcon