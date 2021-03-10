import React from "react"
import "./Button.scss"
import Icon from "./buyCartIcon.png"

const Button = ({type,icon,text,clickHandler})=>{
    return(
            <button className={type=="primary" ? "primary" : "secondary"}  onClick={clickHandler}>
                {text}
                <span className={type=="primary" ? "" : "d-none"}>
                    <img className="ml-2" src={Icon} alt=""/>
                </span>
            </button>
    )
}

export default Button