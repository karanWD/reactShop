import React from "react"
import "./FilterCategory.scss"

const FilterCategory = ()=>{
    return(
        <section className="filter-category">
            <div className="d-flex flex-row-reverse align-items-center mt-4">
                <h4>دسته بندی </h4>
                <div className="seperator mr-3"></div>
            </div>
            <ul className="mt-2">
                <li className="my-2 active-filter">کت و شلوار</li>
                <li className="my-2">شلوار</li>
                <li className="my-2">پیراهن</li>
                <li className="my-2">کت</li>
                <li className="my-2">کفش</li>
            </ul>
        </section>
    )
}

export default FilterCategory