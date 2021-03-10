import React from "react"
import "./Delivery.scss"
import BackIcon from "../ChevronLeft/ChevronLeft";
import Input from "../Input/Input";
import Button from "../Button/Button";


const Delivery = () => {
    return(
        <div className="delivery-container">
            <div className="title ">
                <h1 className="rtl">1. اطلاعات دریافت کننده </h1>
                <BackIcon/>
            </div>
            <div className="form-container d-flex flex-row-reverse flex-wrap">
                <div className="col-lg-6 mt-4">
                    <Input type="text" name="fname" label="نام" />
                </div>
                <div className="col-lg-6 mt-4">
                    <Input type="text" name="lname" label=" نام خانوادگی" />
                </div>
                <div className="col-lg-6 mt-4">
                    <Input type="text" name="phone" label="شماره همراه" />
                </div>
                <div className="col-lg-6 mt-4">
                    <Input type="text" name="city" label="شهر" />
                </div>
                <div className="col-lg-12 mt-4">
                    <Input type="text" name="address" label="آدرس" />
                </div>
            </div>
            <div className="mt-4 px-4 mr-0 ml-auto" style={{width:"fit-content"}}>
                <Button type="secondary" text="ثبت و ادامه" />
            </div>
        </div>
    )
}

export default Delivery