import React from "react"
import "./Footer.scss"
import Enamad from "./enamad.png"

const Footer=()=>{
    return(
        <footer className="  text-right pb-5 pb-lg-0">
            <div className="footer-curve"></div>
            <section className="d-flex flex-row-reverse flex-wrap justify-content-between pt-5 px-3 px-lg-5 mt-5 pb-5 pb-lg-0">
                <div className="col-6 px-0 col-lg-auto">
                    <h1>دسترسی ها </h1>
                    <ul className="mt-4">
                        <li >خانه</li>
                        <li>درباره ما</li>
                        <li>تماس با ما</li>
                    </ul>
                </div>
                <div className="contact px-0 col-6 col-lg-auto">
                    <h1>ارتباط با ما</h1>
                    <ul className="mt-4">
                        <li>
                            :آدرس
                            تهران،جمهوری،خیابان دانشگاه
                        </li>
                        <li>
                            :تلفن
                            021-888888
                        </li>
                        <li>
                            :تلفن همراه
                            091212121212
                        </li>
                        <div>
                            <li><img src="" alt=""/></li>
                            <li><img src="" alt=""/></li>
                            <li><img src="" alt=""/></li>
                        </div>
                    </ul>
                </div>
                <div className="col-12 col-lg-auto px-0">
                    <h1>عضویت</h1>
                    <form action="" className="mt-5 col-12 col-lg-auto d-flex ">
                        <button className="col-4 col-lg-3 py-3 px-5 py-lg-0 px-lg-4 text-center">ارسال</button>
                        <input className="text-right col-8 col-lg-9 py-2 " type="text" placeholder="ایمیل خود را وارد کنید"/>
                    </form>
                </div>
                <div className="mt-5 mt-lg-0"><img className="col-12 px-0" src={Enamad} alt=""/></div>
            </section>
        </footer>
    )
}

export default Footer