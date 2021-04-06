import React, {useState, useEffect, useRef} from "react"
import "./Search.scss"
import search from "./searching.svg"
import CloseIcon from "../CloseIcon/CloseIcon";
import axios from "axios"
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

const Search = ({history, location}) => {
    const inputValue = useRef(null);
    const [searchRes, setSearchRes] = useState(null)
    const [emptySearchRes, setEmptySearchRes] = useState(false)
    useEffect(() => {
        var target = document.querySelectorAll(".search-result-container ul ")
        if (searchRes) {
            if (searchRes.data.product.length > 0 || searchRes.data.category.length > 0 || searchRes.data.brand.length > 0) {
                var active = document.querySelectorAll(".search-active")
                if (active) {
                    active.forEach(item => item.classList.remove("search-active"))
                }
                target[0].firstElementChild.classList.add("search-active")
            }

            const checkKey = (event) => {
                if (event.keyCode == 38) {
                    inputValue.current.blur()

                    if (document.querySelector(".search-active").previousElementSibling ) {
                        document.querySelector(".search-active").previousElementSibling.classList.add("search-active")
                        document.querySelectorAll(".search-active")[1].classList.remove("search-active")
                        inputValue.current.value = document.querySelector(".search-active div").innerText
                    }
                }
                if (event.keyCode == 40) {
                    inputValue.current.blur()
                    if (document.querySelector(".search-active").nextElementSibling) {
                        document.querySelector(".search-active").nextElementSibling.classList.add("search-active")
                        document.querySelectorAll(".search-active")[0].classList.remove("search-active")
                        inputValue.current.value = document.querySelector(".search-active div").innerText
                    }
                }
                if (event.keyCode == 13) {
                    event.preventDefault()
                    if (document.querySelector(".search-active .search-temp-title")){
                        var target = document.querySelector(".search-active .search-temp-title")
                        var temp = document.querySelector(".search-active div")
                        if (target.innerText == "دسته") {

                            inputValue.current.value = ""
                            setSearchRes(null)
                            history.push(`/products/${temp.innerText}`)
                        }
                        else if (target.innerText == "محصول") {
                            inputValue.current.value = ""
                            setSearchRes(null)
                            history.push(`/detail/${temp.innerText.replace(/\s/g, '-')}`)
                        }
                    }
                }
            }

            document.onkeydown = checkKey
        }
    })

    const searchFunc = (e) => {
        if (e.target.value.length > 1) {
            axios.get(`https://api.mandegar-shop.ir/api/autocomplete/search?searchquery=${e.target.value}`)
                .then(res => {
                    // console.log(res.data.product)
                    setSearchRes(res)
                    if (res.data && res.data.product.length == 0 && res.data.category.length == 0 && res.data.brand.length == 0) {
                        setEmptySearchRes(true)
                    } else {
                        setEmptySearchRes(false)
                    }
                })
        }
        if (e.target.value.length == 0) {
            setSearchRes(null)
            // console.log("aaaaa",searchRes)
        }
    }

    return (
        <>
            {
                searchRes && searchRes.data ?
                    <div className="search-result-container">
                        <ul className="col-12 px-0 mb-0">
                            {
                                emptySearchRes ?
                                    <li className="search-active">نتیجه ای برای جستجوی شما یافت نشد </li>
                                    :
                                    null
                            }
                            {
                                searchRes.data.product
                                    ?
                                    searchRes.data.product.map(
                                        item =>
                                            <Link to={`/detail/${item.slug}`}>
                                                <li className="d-flex flex-row-reverse text-right"

                                                    key={item.id}
                                                >
                                                <span className="search-temp-title">
                                                    محصول
                                                </span>
                                                    <div className="mr-1">
                                                        <div>
                                                            {item.name}
                                                        </div>
                                                    </div>
                                                </li>
                                            </Link>
                                    )
                                    :
                                    null
                            }
                            {
                                searchRes.data.category
                                    ?
                                    searchRes.data.category.map(
                                        item =>
                                            <Link to={`/products/${item.name}`}>
                                                <li key={item.id}
                                                    className="d-flex flex-row-reverse text-right"
                                                    onClick={()=>inputValue.current.value=""}
                                                >
                                                <span className=" px-0 search-temp-title">
                                                    دسته
                                                </span>
                                                    <div className=" mr-1">
                                                        <div>
                                                            {item.name}
                                                        </div>
                                                    </div>
                                                </li>
                                            </Link>
                                    )
                                    :
                                    null
                            }
                            {
                                searchRes.data.brand
                                    ?
                                    searchRes.data.brand.map(
                                        item =>
                                            <Link to={`/products/${item.name}`}>
                                                <li className="d-flex flex-row-reverse text-right"

                                                    key={item.id}
                                                >
                                                <span className="search-temp-title">
                                                    برند
                                                </span>
                                                    <div className="mr-1">
                                                        <div>
                                                            {item.name}
                                                        </div>
                                                    </div>
                                                </li>
                                            </Link>
                                    )
                                    :
                                    null
                            }
                        </ul>
                    </div>
                    :
                    null
            }
            <div
                  className="search py-3 pl-4 d-flex flex-row-reverse justify-content-between align-items-center"
                  style={searchRes ? {backgroundColor: "white"} : null}
            >
                <input ref={inputValue} className="rtl col-11" type="text" placeholder="جستجوی محصول "
                       onChange={searchFunc}
                />
                {
                    searchRes
                        ?
                        <div className="col-1 px-0">
                            <CloseIcon clickHandler={
                                () => {
                                    inputValue.current.value = ""
                                    setSearchRes(null)
                                }
                            }/>
                        </div>
                        :
                        <div className="col-1 px-0">
                            <img style={{opacity: "0.7"}} className="w-75" src={search} alt=""/>
                        </div>
                }
            </div>
        </>
    )
}

export default withRouter(Search)