import React,{useState,useEffect} from "react"
import "./SelectCount.scss"
import {connect} from "react-redux";
import axios from "axios";
import {withRouter} from "react-router";
import { selectSizeSelected} from "../../redux/selectSize/selectSize-selector";
import { selectColorSelected} from "../../redux/selectColor/selectColor-selector";
import {fetchSelectCount} from "../../redux/selectCount/selectCount-actions";
import {basicUrl} from "../../basicUrl";
import {fetchAlert} from "../../redux/Alert/Alert-actions";

const SelectCount = ({sizeExist,colorExist,match,proSize,proColor,fetchCount,setAlert})=>{
    const [count,setCount]=useState(0)
    const [maxCount,setMaxCount] = useState(null)
    
    const increaseCount = async (e) => {
       if (count<maxCount){
           await setCount(prevCount => prevCount + 1)
            fetchCount(e.target.previousElementSibling.value)
       }
       if(!proSize || !proColor){
           setAlert("count")
           setTimeout(() => setAlert(), 7000)
       }
    }
    const decreaseCount =  async (e)=>{
       if (count > 0){
            await setCount(prevCount => prevCount - 1)
           fetchCount(e.target.nextElementSibling.value)
       }
        if(!(proSize || proColor)){
            setAlert("count")
            setTimeout(() => setAlert(), 7000)
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
            axios.get(basicUrl+`/api/detail/product/exist/${match.params.proname}/${proSize}/${proColor}`)
                .then(res =>setMaxCount(res.data.num))
                .then(count > maxCount ? setCount(maxCount) : null)
        }
    })

    return(
        <div className="col-lg-6 select-count mt-5 mt-lg-4 rtl">
            <h1>
                تعداد
                <div className="mr-3"></div>
            </h1>
            <form action="" className="d-flex flex-row-reverse col-5 col-lg-7 px-2 mt-4">
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
    proColor:selectColorSelected(state),

})
const mapDispatchToProps = dispatch => ({
    fetchCount : (count) => dispatch(fetchSelectCount(count)),
    setAlert : (data) => dispatch(fetchAlert(data))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SelectCount))