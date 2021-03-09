import React,{useState,useEffect} from "react"
import "./SelectCount.scss"
import {connect} from "react-redux";
import axios from "axios";
import {withRouter} from "react-router";
import { selectSizeSelected} from "../../redux/selectSize/selectSize-selector";
import { selectColorSelected} from "../../redux/selectColor/selectColor-selector";
import {fetchSelectCount} from "../../redux/selectCount/selectCount-actions";

const SelectCount = ({sizeExist,colorExist,match,proSize,proColor,fetchCount})=>{
   const [count,setCount]=useState(0)
    const [maxCount,setMaxCount] = useState()
    
    const increaseCount = async (e) => {

       if (count<maxCount){
           await setCount(prevCount => prevCount + 1)
            fetchCount(e.target.previousElementSibling.value)

       }
    }
    const decreaseCount =  async (e)=>{
       if (count > 0){
            await setCount(prevCount => prevCount - 1)
           fetchCount(e.target.nextElementSibling.value)
       }
    }
    const changeCount = async (event)=>{
       if(event.target.value>0 && event.target.value < maxCount){
           setCount(parseInt(event.target.value))
           fetchCount(event.target.value)

       }
    }
    useEffect(()=>{
        if(proColor&&proSize){
            axios.get(`https://api.mandegar-shop.ir/api/detail/product/exist/${match.params.proname}/${proSize}/${proColor}`)
                .then(res =>setMaxCount(res.data.num))
        }
    })
    return(
        <div className="select-count mt-4 rtl">
            <h1>
                تعداد
                <div className="mr-3"></div>
            </h1>
            <form action="" className="d-flex flex-row-reverse col-5 col-lg-3 px-2 mt-4">
                <span className="col-3 px-0 py-2   text-center" style={{cursor: "pointer"}}
                      onClick={decreaseCount}> - </span>
                <input type="text" className="col-6  text-center" value={count} onChange={changeCount} />
                <span className="col-3 px-0 py-2   text-center" style={{cursor: "pointer"}}
                      onClick={increaseCount}> + </span>
            </form>
        </div>
    )
}

const mapStateToProps = state =>({
    proSize:selectSizeSelected(state),
    proColor:selectColorSelected(state)
})
const mapDispatchToProps = dispatch => ({
    fetchCount : (count) => dispatch(fetchSelectCount(count))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SelectCount))