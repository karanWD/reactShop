import React from "react"
import "./Sort.scss"

const Sort = ()=>{
    return(
        <section className="filter-sort mt-5">
            <div className="d-flex flex-row-reverse align-items-center mt-4">
                <h4>مرتب سازی </h4>
                <div className="seperator mr-3"></div>
            </div>
            <ul className="mt-2 d-flex flex-row-reverse flex-wrap pl-0">
                <li className="my-2 ">پر بازدیدترین</li>
                <li className="my-2">گران ترین ها</li>
                <li className="my-2">ارزان ترین ها</li>
            </ul>
        </section>
    )
}
export default Sort