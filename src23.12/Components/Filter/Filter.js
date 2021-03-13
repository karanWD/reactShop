import React from "react"
import "./Filter.scss"
import Sort from "../Sort/Sort";
import FilterCategory from "../FilterCategory/FilterCategory";

const Filter = ()=>{
    return(
        <section className="filter col-lg-3 d-none d-lg-block  text-right px-5">
            <h1 className="pr-0">فیلتر</h1>
            <Sort/>
            <FilterCategory/>
        </section>
    )
}
export default Filter