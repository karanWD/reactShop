import React from "react"
import "./SearchMob.scss"
import {connect} from "react-redux";
import Search from "../Search/Search";
import BackIcon from "../ChevronLeft/ChevronLeft";
import SearchCat from "../SearchCat/SearchCat";
import {searchMobileToggle} from "../../redux/search/search-actions";


const SearchMob = ({closeSearch,openedSearch}) => {
    return (
        <section className={` search-mobile px-3 d-lg-none ${openedSearch ? `open-search` :null}`}>
            <div
                className=" d-flex flex-row-reverse justify-content-between align-items-center pt-4 px-3">
                <h4 className="title mb-0">دسته بندی</h4>
                <BackIcon clickHandler={closeSearch}/>
            </div>
            <div className="search-container mt-5">
                <Search/>
            </div>
            <SearchCat/>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    closeSearch : ()=>dispatch(searchMobileToggle())
})

const mapStateToProps = state =>({
    openedSearch : state.search.searchMobileToggle
})

export default connect(mapStateToProps,mapDispatchToProps)(SearchMob)