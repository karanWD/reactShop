import React from "react"
import "./Filter.scss"
import Sort from "../Sort/Sort";
import FilterCategory from "../FilterCategory/FilterCategory";
import FilterBrand from "../FilterBrand/FilterBrand";
import FilterPrice from "../FilterPrice/FilterPrice";

const Filter = ()=>{
    return(
        <section className="filter col-lg-3 d-none d-lg-block mt-lg-2  text-right px-5">
            <h1 className="pr-0">فیلتر ها</h1>
            <div>
            </div>
            <hr/>
            <Sort/>
            <FilterCategory />
            <FilterBrand />
            <FilterPrice/>
        </section>
    )
}
export default Filter