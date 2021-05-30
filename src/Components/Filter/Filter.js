import React from "react"
import "./Filter.scss"
import Sort from "../Sort/Sort";
import FilterCategory from "../FilterCategory/FilterCategory";
import FilterPrice from "../FilterPrice/FilterPrice";
import FilterBadge from "../FilterBadge/FilterBadge";
import FilterBrand from "../FilterBrand/FilterBrand";

const Filter = ()=>{
    return(
        <section className="filter col-lg-3 d-none d-lg-block mt-lg-2  text-right px-5">
           <FilterBadge/>
            <hr/>
            <Sort/>
            <FilterCategory />
            <FilterBrand />
            <FilterPrice/>
        </section>
    )
}
export default Filter