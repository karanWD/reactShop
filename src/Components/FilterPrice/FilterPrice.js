import React, {useEffect,useState } from "react"
import "./FilterPrice.scss"
import {withRouter} from "react-router";
import ReactSlider from 'react-slider'
import Button from "../Button/Button";
const FilterPrice = () => {
    const [value, setValue] = React.useState([0, 50]);
    return (
        <section className="filter-category mt-5">
            <div className="d-flex flex-row-reverse align-items-center mt-4">
                <h4>
                    قیمت
                </h4>
                <div className="seperator mr-3"></div>
            </div>

            <ReactSlider
                value={value}
                max={"50"}
                // onBe foreChange={val => console.log('onBeforeChange value:', val)}
                // onChange={val => { console.log('onChange value:', val); setValue(val); }}
                onAfterChange={
                     val =>{
                        console.log('onAfterChange value:', val)
                         setValue(val)
                         console.log(value)
                    }
                }
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
            <br/>
            <div className="d-flex flex-row-reverse justify-content-between align-items-center mt-5" >
                <div className="  d-flex flex-row-reverse justify-content-start align-items-center flex-wrap">
                    <span className="mx-2" style={{color:"#777",fontSize:"13px"}}>از</span>
                    <div className="mt-4">
                        <div className="priceVal-container">
                            {value[0]}
                        </div>
                        <span className="toman d-block mt-1 text-center">میلیون تومان</span>
                    </div>

                    <span className="mx-2" style={{color:"#777",fontSize:"13px"}}>تا</span>
                    <div className="mt-4">
                        <div className="priceVal-container">
                            {value[1]}
                        </div>
                        <span className="toman d-block mt-1 text-center">میلیون تومان</span>
                    </div>

                </div>
                <Button text="فیلتر"></Button>
            </div>
        </section>
    )
}


export default withRouter(FilterPrice)