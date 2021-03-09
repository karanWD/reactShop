import React from "react"
import "./Alert.scss"

const Alert = ({type,text})=>{
    return(
        <div className="my-alert">
            <div className={`${type==="success"?"success":"error"}`}>
                {text}
            </div>
        </div>
    )
}

export default Alert