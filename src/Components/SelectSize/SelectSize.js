import React,{useEffect} from "react"
import {connect} from "react-redux";
import "./SelectSize.scss"
import {fetchSelectSize, fetchSizeExist, proSizeSelected} from "../../redux/selectSize/selectSize-actions";
import {selectSizeData, selectSizeExistData, selectSizeSelected} from "../../redux/selectSize/selectSize-selector";
import axios from "axios";
import {withRouter} from "react-router";
import {selectColorData} from "../../redux/selectColor/selectColor-selector";
import {fetchLoading} from "../../redux/Loading/Loading-actions";

const SelectSize = ({selectSize,fetchSelectSize,fetchSizeExist,match,sizeExist,colorExist,proSizeSelected,proSize,setLoading})=>{
    const selecctSize = async (event)=>{
        await setLoading("true")
        await axios
            .get(`https://api.mandegar-shop.ir/api/detail/product/exist/${match.params.proname}/${event.target.getAttribute("id")}/0`)
            .then(res =>fetchSizeExist(res))
            .then(proSizeSelected(event.target.getAttribute("id")))
            .then(setLoading("false"))
    }
    useEffect(()=>{
        axios
            .get(`https://api.mandegar-shop.ir/api/detail/sizes/fetch/${match.params.proname}`)
            .then(res => fetchSelectSize(res))
    },[match.params.proname])

    if(colorExist){
        // console.log(colorExist)
        return(
            <div className="detail-size mt-4">
                <h1>
                    <div className="mr-3"></div>
                    سایز
                </h1>
                <ul className="sizes d-flex flex-row-reverse mt-3">
                    {
                        selectSize
                            ?
                            selectSize.map(item =>
                                (
                                    <li key={item.id} id={item.id} onClick={selecctSize} className={colorExist.find(color=>color.effect_spec_id === item.id) ? proSize == item.id ? "active-detail-size color-exist " : "color-exist" : "color-non-exist"}>{item.name}</li>
                                )
                            )
                            :
                            null
                    }
                </ul>
            </div>
        )
    }
    else{
        return(
            <div className="detail-size mt-4">
                <h1>
                    <div className="mr-3"></div>
                    سایز
                </h1>
                <ul className="sizes d-flex flex-row-reverse mt-3">
                    {
                        selectSize
                            ?
                            selectSize.map(item =>{
                                // console.log(proSize==item.id)
                                return(
                                    <li className={proSize ?  proSize == item.id ? "active-detail-size" : null : null } key={item.id} id={item.id} onClick={selecctSize}>{item.name}</li>
                                )
                            })
                            :
                            null
                    }
                </ul>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    fetchSelectSize:size => dispatch(fetchSelectSize(size)),
    fetchSizeExist:size => dispatch(fetchSizeExist(size)),
    proSizeSelected : size => dispatch(proSizeSelected(size)),
    setLoading: data => dispatch(fetchLoading(data))
})

const mapStateToProps = state => ({
    selectSize:selectSizeData(state),
    sizeExist: selectSizeExistData(state),
    colorExist:selectColorData(state),
    proSize:selectSizeSelected(state)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SelectSize))