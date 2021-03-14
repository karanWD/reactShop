import React, {useState} from "react"
import "./Login.scss"
import {connect} from "react-redux";
//Components
import BackIcon from "../ChevronLeft/ChevronLeft";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {openCode, openLogin} from "../../redux/Login/Login-actions";
import Alert from "../Alert/Alert";

const Login = ({openedLogin, openLogin}) => {
    const [countAlert, setCountAlert] = useState(false)
    const [codeCountAlert, setCodeCountAlert] = useState(false)
    const [formatAlert, setFormatAlert] = useState(false)
    const [phone, setPhone] = useState()
    const [code, setCode] = useState("")

    function checkPhone() {
        var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
        var result = regex.test(phone);
        // console.log(phone.length==11)
        if (phone && phone.length == 11 ) {
            setCountAlert(false)
            if (result) {
                setFormatAlert(false)
                openLogin("code")
            } else {
                setFormatAlert(true)
            }
        } else {
            setCountAlert(true)
        }
    }
    function checkCode() {
        if (code.length == 4 && code.length) {
            setCodeCountAlert(false)
           console.log("Done")
        }
        else {
            setCodeCountAlert(true)
        }
    }

    return (
        <section className="login-container ">
            <div className={`login px-0 ${openedLogin  ? "open-login" : ""}`}>
                <div className="bg-white h-100 pt-3">
                    <div
                        className=" login-header pt-4 px-3 d-flex flex-row align-items-center justify-content-between">
                        <BackIcon
                            clickHandler={
                                () => {
                                    openLogin("")
                                }
                            }/>
                        <h1 className="title mb-0">ورود به نیوشاپ</h1>
                    </div>
                    {
                        openedLogin == "code"
                            ?
                            <div className="login-article text-right px-3">
                                <p className="px-3 mt-3 text-secondary">
                                    لطفا کد 4 رقمی ارسال شده را برای ورود وارد کنید
                                </p>
                                <div className="login-form mt-5 px-4 pt-5">
                                    <Input type="text" label="کد تایید" name="code" value={code}
                                           changeHandler={(e) => {
                                               setCode(e.target.value)
                                           }}/>
                                    {
                                        codeCountAlert
                                            ?
                                            <Alert type="error" text="تعداد ارقام کد باید 4 رقم باشد"/>
                                            : null
                                    }
                                    <br/>
                                    <Button type="primary" text="ورود" clickHandler={checkCode}/>
                                </div>
                            </div>
                            :
                            <div className="login-article text-right px-3">
                                <p className="px-3 mt-3 text-secondary">
                                    لطفا برای ورود شماره همراه خود را وارد کنید
                                </p>
                                <div className="login-form mt-5 px-4 pt-5">
                                    <Input type="text" label="شماره همراه" name="phone" value={phone} placeholder="مثال: *******0912"
                                           changeHandler={(e) => {
                                               setPhone(e.target.value)
                                               setCountAlert(false)
                                               setFormatAlert(false)
                                           }}/>
                                    {
                                        countAlert
                                            ?
                                            <Alert type="error" text="تعداد ارقام شماره باید 11 رقم باشد"/>
                                            :
                                            formatAlert
                                                ?
                                                <Alert type="error" text="لطفا فقط از اعداد استفاده کنید"/>
                                                : null
                                    }
                                    <br/>
                                    <Button type="primary" text="ارسال" clickHandler={checkPhone}/>
                                </div>
                            </div>
                    }

                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    openedLogin: state.login.openedLogin
})

const mapDispatchTopProps = dispatch => ({
    openLogin: (data) => dispatch(openLogin(data)),
    // openCode : (data) => dispatch(openCode(data))
})

export default connect(mapStateToProps, mapDispatchTopProps)(Login)