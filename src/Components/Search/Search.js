import React from "react"
import "./Search.scss"
import search from "./searching.svg"

const Search = () => {
    return (
        <form action="" className="search py-3 pl-4 d-flex flex-row-reverse justify-content-between align-items-center">
            <input className="text-right col-11" type="text" placeholder="جستجوی محصول "/>
            <div className="col-1 px-0">
                <img style={{opacity:"0.7"}} className="w-75" src={search} alt=""/>
            </div>
        </form>
    )
}

export default Search