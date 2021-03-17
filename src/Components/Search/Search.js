import React, {useState, useEffect} from "react"
import "./Search.scss"
import search from "./searching.svg"
import CloseIcon from "../CloseIcon/CloseIcon";

let result = ""
const Search = () => {

    let suggestions = [
        "Channel",
        "کارن",
        "CodingNepal",
        "YouTube",
        "YouTuber",
        "YouTube Channel",
        "Blogger",
        "Bollywood",
        "Vlogger",
        "Vechiles",
        "Facebook",
        "Freelancer",
        "Facebook Page",
        "Designer",
        "Developer",
        "Web Designer",
        "Web Developer",
        "Login Form in HTML & CSS",
        "How to learn HTML & CSS",
        "How to learn JavaScript",
        "How to became Freelancer",
        "How to became Web Designer",
        "How to start Gaming Channel",
        "How to start YouTube Channel",
        "What does HTML stands for?",
        "What does CSS stands for?",
    ];

    useEffect(() => {
        var target = document.querySelectorAll(".search-result-container ul ")
        if (searchRes && searchRes.length > 0) {
            if (target.length > 0) {
                target[0].firstElementChild.classList.add("search-active")
            }
            const checkKey = (event) => {
                if (event.keyCode == 38) {
                    console.log("Up key is pressed.");
                    console.log(document.querySelector(".search-active").previousElementSibling);
                    if(document.querySelector(".search-active").previousElementSibling){
                        document.querySelector(".search-active").previousElementSibling.classList.add("search-active")
                        document.querySelectorAll(".search-active")[1].classList.remove("search-active")
                    }
                }
                if (event.keyCode == 40) {
                    console.log("Down key is pressed.");
                    if(document.querySelector(".search-active").nextElementSibling){
                        document.querySelector(".search-active").nextElementSibling.classList.add("search-active")
                        document.querySelectorAll(".search-active")[0].classList.remove("search-active")

                    }
                }
            }
            document.onkeydown = checkKey
        }
    })

    const [searchRes, setSearchRes] = useState()

    const searchFunc = (data) => {
        if (data) {
            console.log(data)
            setSearchRes(
                suggestions.filter(
                    (res) => res.toLowerCase().includes(data.toLowerCase())
                )
            )
        } else {
            setSearchRes(null)
        }
    }

    return (
        <>
            {
                searchRes ?
                    <div className="search-result-container">
                        <ul className="col-12 px-0">
                            {
                                searchRes.map(
                                    item => <li> {item} </li>
                                )
                            }
                        </ul>
                    </div>
                    :
                    null
            }
            <form action=""
                  className="search py-3 pl-4 d-flex flex-row-reverse justify-content-between align-items-center"
                  style={searchRes ? {backgroundColor: "white"} : null}
            >
                <input className="text-right col-11" type="text" placeholder="جستجوی محصول "
                       onKeyUp={(e) => {
                           if (e.keyCode >= 65 && e.keyCode <= 90) {
                               result = result + String.fromCharCode(e.which)
                               searchFunc(result)
                           }
                           result = result.substring(0, e.target.value.length);
                       }}
                />
                {
                    searchRes ?
                        <div className="col-1 px-0">
                            <CloseIcon clickHandler={(res) => res = "" }/>
                        </div>
                        :
                        <div className="col-1 px-0">
                            <img style={{opacity: "0.7"}} className="w-75" src={search} alt=""/>
                        </div>
                }


            </form>

        </>
    )
}

export default Search