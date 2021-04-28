import React from "react"
import "./Alert.scss"
import Succeed from "./check-mark.svg"
import Fail from "./warning.svg"

const Alert = ({type,text})=>{
    return(
        <div className="my-alert">
            <div className={` d-flex flex-row-reverse justify-content-between ${type==="success"?"success":"error"}`}>
                <div className="d-flex justify-content-start p-3">
                    <span></span>
                    <div>
                        {text}
                    </div>
                    <img src={type==="success"?Succeed:Fail} alt=""/>
                </div>
            </div>
        </div>
    )
}


export default Alert