import React,{useEffect} from "react"
import "./DetailNav.scss"

const DetailNav = () =>{
    useEffect(()=>{

    })
    return(
        <div className="detail-nav mt-5 mt-lg-4">
            <ul className="d-flex flex-row-reverse px-2 " >
                <li className="px-4" >
                    <a href="#gallery">
                        گالری
                    </a>
                </li>
                <li className="px-4 active-detail-nav">مشخصات</li>
                <li className="px-4">نظرات</li>
            </ul>
        </div>
    )
}

export default DetailNav