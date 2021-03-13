import React from "react"
import "./Input.scss"


const Input = ({type,name,label})=>{
    return(
        <div className="input-container text-right d-flex flex-column-reverse">
            <input type={type} id={name} placeholder=" "  className="d-block col-12   text-right px-2 "/>
            <label className="mr-0 ml-auto" for={name}>{label}</label>
        </div>
    )
}

export default Input