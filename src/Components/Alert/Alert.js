import React from "react"
import "./Alert.scss"
import Succeed from "./check-mark.svg"
import Fail from "./warning.svg"

const Alert = ({type,text})=>{
    return(
        <div className="my-alert">
            <div className={`${type==="success"?"success":"error"}`}>
                {text}
                <img src={type==="success"?Succeed:Fail} alt=""/>
            </div>
        </div>
    )
}

export default Alert