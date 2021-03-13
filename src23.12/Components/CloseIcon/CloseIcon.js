import React from "react"
import "./CloseIcon.css"
import Closeicon from "./close-red.svg"

const CloseIcon = ({clickHandler})=>{
    return(
        <div className="close-icon mr-0 ml-auto" onClick={clickHandler}>
            <img src={Closeicon} alt=""/>
        </div>
    )
}

export default CloseIcon