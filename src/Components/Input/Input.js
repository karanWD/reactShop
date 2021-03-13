import React from "react"
import "./Input.scss"


const Input = ({value,type,name,label,changeHandler})=>{
    return(
        <div className="input-container text-right d-flex flex-column-reverse">
            <input type={type} id={name} placeholder=" "  value={value} onChange={changeHandler} className="d-block col-12   text-right px-2 "/>
            <label className="mr-0 ml-auto" for={name}>{label}</label>
        </div>
    )
}

export default Input