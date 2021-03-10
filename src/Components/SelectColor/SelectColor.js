import React, {useEffect} from "react"
import {connect} from "react-redux";
import axios from "axios";
import "./SelectColor.scss"
import {detailColorsSelector} from "../../redux/detail/detail-selector";
import Check from "./check.svg"
import {selectSizeExistData, selectSizeSelected} from "../../redux/selectSize/selectSize-selector";
import {withRouter} from "react-router";
import {fetchColorExist, proColorSelected} from "../../redux/selectColor/selectColor-actions";
import {selectColorSelected} from "../../redux/selectColor/selectColor-selector";
import {fetchLoading} from "../../redux/Loading/Loading-actions";


const SelectColor = ({detailColor, sizeExist, match, fetchColorExist, proColorSelected , proColor,proSize,setLoading}) => {

    useEffect(() => {
        // if (sizeExist.length === 0) {
        //     var target = document.querySelectorAll(".colors li")
        //     target.forEach(item => {
        //         if (item.lastChild.classList.contains("selected-color")) {
        //             item.lastChild.classList.remove("selected-color")
        //         }
        //     })
        // }
    }, [match.params.proname])

    const selectColor = (e) => {
        var target = document.querySelectorAll(".sizes li")
        target.forEach(item => {
                        item.classList.add("color-non-exist")
                })
        axios
            .get(`https://api.mandegar-shop.ir/api/detail/product/exist/${match.params.proname}/0/${e.target.parentElement.getAttribute("id")}`)
            .then(res => fetchColorExist(res))
            .then(proColorSelected(e.target.parentElement.getAttribute("id")))
    }

    return (
        <div className="detail-color mt-4">
            {/*{console.log(colorExist)}*/}
            <h1>
                <div className="mr-3"></div>
                رنگ
            </h1>
            <ul className="colors d-flex flex-row-reverse mt-3">
                {
                    detailColor.map(item => {
                            if (sizeExist.length >= 0 && proSize != null) {
                                setLoading("false")
                                return (
                                    <li key={item.id} id={item.id}
                                        className={`col-3 col-lg-2 px-1 ${sizeExist.find(size => size.color_id === item.id) ? "exist-size" : "non-exist"}`}
                                        onClick={selectColor}>
                                        <img className="col-12 px-0"
                                             src={`https://api.mandegar-shop.ir/images/gallery/${item.image.image}`}
                                             alt={item.name}
                                             title={item.name}
                                        />
                                        <div className={`d-none justify-content-center align-items-center ${proColor ? proColor == item.id ? "selected-color" : null : null}`} >
                                            <img className="col-7 px-0" src={Check} alt=""/>
                                        </div>
                                    </li>
                                )
                            }
                            else {
                                return (
                                    <li key={item.id} id={item.id}
                                        className={`col-3 col-lg-2 px-1 `}
                                        onClick={selectColor}>
                                        <img className="col-12 px-0"
                                             src={`https://api.mandegar-shop.ir/images/gallery/${item.image.image}`}
                                             alt={item.name}
                                             title={item.name}
                                        />
                                        {console.log(item.id , proColor)}
                                        <div className={`d-none justify-content-center align-items-center ${proColor ? proColor == item.id ? "selected-color" : null : null}`}>
                                            <img className="col-7 px-0" src={Check} alt=""/>
                                        </div>
                                    </li>
                                )
                            }
                        }
                    )
                }
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchColorExist: (color) => dispatch(fetchColorExist(color)),
    proColorSelected: (colorSelected) => dispatch(proColorSelected(colorSelected)),
    setLoading: data => dispatch(fetchLoading(data))
})

const mapStateToProps = state => ({
    detailColor: detailColorsSelector(state),
    sizeExist: selectSizeExistData(state),
    proColor:selectColorSelected(state),
    proSize:selectSizeSelected(state)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectColor))