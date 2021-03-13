import React,{useState} from "react"
import "./Delivery.scss"
import BackIcon from "../ChevronLeft/ChevronLeft";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {connect} from "react-redux";
import {openAccordion} from "../../redux/Checkout/Checkout-actions";
import Alert from "../Alert/Alert";

const Delivery = ({openAccordion,openedAccordion}) => {
    const [fname,setFname] = useState(null)
    const [lname,setLname] = useState(null)
    const [phone,setPhone] = useState(null)
    const [city,setCity] = useState(null)
    const [address,setAddress] = useState(null)
    const [error,setError] = useState(false)
    const setDelivery = ()=>{
        if(!fname || !lname || !phone || !city || !address){
            setError(true)
        }
        if(fname && lname && phone && city && address){
            openAccordion("payment")
            setError(false)
        }
    }
    return (
        <div className={`delivery-container ${openedAccordion == "delivery" ? "open-accordion":null}`}>
            <div className="title ">
                <h1 className="rtl">1. اطلاعات دریافت کننده </h1>
                <BackIcon/>
            </div>
            <div className={`form-container d-flex flex-row-reverse flex-wrap col-10 mr-0 ml-auto pr-0 `}>
                <div className="col-lg-6 mt-4">
                    <Input value={fname} type="text" name="fname" label="نام" changeHandler={(event) => setFname(event.target.value)}/>
                    {
                        !fname && error
                        ?
                            <Alert type="error" text={"لطفا نام خود را وارد کنید "}/>
                        :
                        null
                    }
                </div>
                <div className="col-lg-6 mt-4">
                    <Input value={lname} changeHandler={(event) => setLname(event.target.value)} type="text" name="lname" label=" نام خانوادگی"/>
                    {
                        !lname && error
                            ?
                            <Alert type="error" text={"لطفا نام خانوادگی خود را وارد کنید "}/>
                            :
                            null
                    }
                </div>
                <div className="col-lg-6 mt-4">
                    <Input value={phone} changeHandler={(event) => setPhone(event.target.value)} type="text" name="phone" label="شماره همراه"/>
                    {
                        !phone && error
                            ?
                            <Alert type="error" text={"لطفا شماره خود را وارد کنید "}/>
                            :
                            null
                    }
                </div>
                <div className="col-lg-6 mt-4">
                    <Input value={city} changeHandler={(event) => setCity(event.target.value)} type="text" name="city" label="شهر"/>
                    {
                        !city && error
                            ?
                            <Alert type="error" text={"لطفا شهر خود را وارد کنید "}/>
                            :
                            null
                    }
                </div>
                <div className="col-lg-12 mt-4">
                    <Input value={address} changeHandler={(event) => setAddress(event.target.value)} type="text" name="address" label="آدرس"/>
                    {
                        !address && error
                            ?
                            <Alert type="error" text={"لطفا آدرس خود را وارد کنید "}/>
                            :
                            null
                    }
                </div>
                <div className="col-12 mt-4 px-4 mr-0 ml-auto d-flex justify-content-between flex-row-reverse" style={{width: "fit-content"}}>
                    <Button clickHandler={setDelivery} type="secondary" text="ثبت و ادامه"/>
                    {
                        // error
                        // ?
                        //     <Alert type="error" text={"لطفا فیلد های خالی را پرکنید "}/>
                        // :
                        // null
                    }

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    openedAccordion : state.checkout.openedAccordion
})
const mapDispatchToProps = dispatch =>({
    openAccordion : (data) => dispatch(openAccordion(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Delivery)