import React from "react"
import "./MobileMenu.scss"
import {connect} from "react-redux";
import {openCart} from "../../redux/cart/cart-actions";
import {Link} from "react-router-dom";
import {searchMobileToggle} from "../../redux/search/search-actions";

const MobileMenu = ({openCart,openSearch}) => {
    return (
        <section className="menu d-lg-none">
            <ul className="d-flex flex-row-reverse px-2 py-2  mb-0">
                <Link to="/">
                    <li className="col home-btn active-page d-flex justify-content-center flex-wrap align-items-center">
                        <div className="d-block">
                            <svg version="1.1"
                                 x="0px" y="0px" width="20px" height="20px" viewBox="0 0 510.9 511"
                            >
                                <defs>
                                </defs>
                                <path d="M497.2,222.3C497.2,222.2,497.2,222.2,497.2,222.3L288.7,13.8C279.9,4.9,268,0,255.5,0s-24.4,4.9-33.3,13.8L13.9,222.1
                                c-0.1,0.1-0.1,0.1-0.2,0.2c-18.2,18.4-18.2,48.1,0.1,66.4c8.4,8.4,19.4,13.2,31.2,13.7c0.5,0,1,0.1,1.5,0.1h8.3v153.4
                                c0,30.4,24.7,55.1,55.1,55.1h81.6c8.3,0,15-6.7,15-15V375.8c0-13.9,11.3-25.1,25.1-25.1h48.1c13.9,0,25.1,11.3,25.1,25.1V496
                                c0,8.3,6.7,15,15,15h81.6c30.4,0,55.1-24.7,55.1-55.1V302.5h7.7c12.6,0,24.4-4.9,33.3-13.8C515.5,270.4,515.5,240.6,497.2,222.3z
                                 M476,267.6c-3.2,3.2-7.5,5-12.1,5h-22.7c-8.3,0-15,6.7-15,15v168.4c0,13.8-11.3,25.1-25.1,25.1h-66.6V375.8
                                c0-30.4-24.7-55.1-55.1-55.1h-48.1c-30.4,0-55.1,24.7-55.1,55.1v105.3h-66.6c-13.8,0-25.1-11.3-25.1-25.1V287.6c0-8.3-6.7-15-15-15
                                H47.4c-0.2,0-0.5,0-0.7,0c-4.5-0.1-8.6-1.8-11.8-5c-6.7-6.7-6.7-17.5,0-24.2c0,0,0,0,0,0l0,0L243.4,35c3.2-3.2,7.5-5,12.1-5
                                c4.6,0,8.9,1.8,12.1,5L476,243.3c0,0,0.1,0.1,0.1,0.1C482.7,250.1,482.7,260.9,476,267.6z"/>
                            </svg>
                        </div>
                        <p className="text-center mt-2 col-12">خانه</p>
                    </li>
                </Link>
                <li className="col d-flex justify-content-center flex-wrap align-items-center" onClick={openSearch}>
                    <div>
                        <svg version="1.1"
                             x="0px" y="0px" width="20px" height="20px" viewBox="0 0 512 512"
                        >
                            <defs>
                            </defs>
                            <g>
                                <g>
                                    <path d="M447.6,64.4C406.1,22.9,350.9,0,292.2,0S178.3,22.9,136.7,64.4c-41.5,41.5-64.4,96.7-64.4,155.4
                                        c0,53.7,19.1,104.4,54.1,144.5L4.4,486.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4s7.7-1.5,10.6-4.4l122.1-122.1
                                        c40,35,90.8,54.1,144.5,54.1c58.7,0,113.9-22.9,155.4-64.4c41.5-41.5,64.4-96.7,64.4-155.4S489.1,105.9,447.6,64.4z M426.4,354
                                        c-74,74-194.4,74-268.4,0c-74-74-74-194.4,0-268.4c37-37,85.6-55.5,134.2-55.5c48.6,0,97.2,18.5,134.2,55.5
                                        C500.4,159.6,500.4,280,426.4,354z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <p className="text-center mt-2 col-12 px-0">دسته بندی </p>

                </li>
                <li className="col d-flex justify-content-center align-items-center flex-wrap" onClick={openCart}>
                    <div>
                        <svg version="1.1"
                             x="0px" y="0px" width="20px" height="20px" viewBox="0 0 291.8 321.2">
                            <defs>
                            </defs>
                            <g>
                                <g>
                                    <path d="M291.7,313.2l-24-223.6c-0.4-3.6-3.6-6.4-7.2-6.4h-44.4V69.6c0-38.4-31.2-69.6-69.6-69.6S76.9,31.2,76.9,69.6v13.6H31.3
                                            c-3.6,0-6.8,2.8-7.2,6.4l-24,223.6c-0.4,2,0.4,4,1.6,5.6s3.2,2.4,5.2,2.4h278c2,0,4-0.8,5.2-2.4
                                            C291.3,317.2,292.1,315.2,291.7,313.2z M208.9,123.6c3.6,0,6.4,2.8,6.4,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.8-6.4-6.4
                                            C202.5,126.4,205.3,123.6,208.9,123.6z M91.3,69.6c0-30.4,24.8-55.2,55.2-55.2s55.2,24.8,55.2,55.2v13.6H91.3V69.6z M84.1,123.6
                                            c3.6,0,6.4,2.8,6.4,6.4c0,3.6-2.8,6.4-6.4,6.4s-6.4-2.8-6.4-6.4C77.7,126.4,80.5,123.6,84.1,123.6z M15.3,306.4L37.7,97.2h39.2
                                            v13.2c-8,2.8-13.6,10.4-13.6,19.2c0,11.2,9.2,20.4,20.4,20.4s20.4-9.2,20.4-20.4c0-8.8-5.6-16.4-13.6-19.2V97.2h110.4v13.2
                                            c-8,2.8-13.6,10.4-13.6,19.2c0,11.2,9.2,20.4,20.4,20.4s20.4-9.2,20.4-20.4c0-8.8-5.6-16.4-13.6-19.2V97.2h40.8l22.4,209.2H15.3z"
                                    />
                                </g>
                            </g>
                        </svg>

                    </div>
                    <p className="text-center mt-2 col-12 px-0">سبد خرید </p>
                </li>
                <li className="col d-flex justify-content-center align-items-center flex-wrap">
                    <div>
                        <svg version="1.1"
                             x="0px" y="0px" width="20px" height="20px" viewBox="0 0 427.2 512"
                        >
                            <defs>
                            </defs>
                            <path d="M210.4,246.6c33.9,0,63.2-12.2,87.2-36.1c24-24,36.1-53.3,36.1-87.2c0-33.9-12.2-63.2-36.1-87.2c-24-24-53.3-36.1-87.2-36.1
                                c-33.9,0-63.2,12.2-87.2,36.1S87,89.4,87,123.3c0,33.9,12.2,63.2,36.1,87.2C147.1,234.5,176.5,246.6,210.4,246.6z M144.4,57.3
                                c18.4-18.4,40-27.3,66-27.3c26,0,47.6,8.9,66,27.3c18.4,18.4,27.3,40,27.3,66c0,26-8.9,47.6-27.3,66c-18.4,18.4-40,27.3-66,27.3
                                c-26,0-47.6-8.9-66-27.3c-18.4-18.4-27.3-40-27.3-66C117,97.3,126,75.7,144.4,57.3z"/>
                            <path d="M426.1,393.7c-0.7-10-2.1-20.9-4.1-32.4c-2.1-11.6-4.8-22.5-8-32.5c-3.3-10.3-7.8-20.6-13.4-30.3
                                c-5.8-10.2-12.6-19-20.2-26.3c-8-7.6-17.7-13.7-29-18.2c-11.2-4.4-23.7-6.7-37-6.7c-5.2,0-10.3,2.1-20,8.5c-6,3.9-13,8.4-20.9,13.5
                                c-6.7,4.3-15.8,8.3-27,11.9c-10.9,3.5-22.1,5.3-33,5.3c-11,0-22.1-1.8-33-5.3c-11.2-3.6-20.3-7.6-27-11.9c-7.8-5-14.8-9.5-20.9-13.5
                                c-9.8-6.4-14.8-8.5-20-8.5c-13.3,0-25.8,2.3-37,6.7c-11.3,4.5-21,10.6-29,18.2c-7.6,7.3-14.4,16.1-20.2,26.3
                                c-5.6,9.8-10.1,20-13.4,30.3c-3.2,10-5.9,20.9-8,32.5c-2.1,11.5-3.5,22.4-4.1,32.4c-0.7,9.8-1,20-1,30.2c0,26.7,8.5,48.4,25.3,64.3
                                C41.8,504,63.7,512,90.3,512h246.5c26.6,0,48.5-8,65.1-23.7c16.8-15.9,25.3-37.6,25.3-64.3C427.2,413.6,426.8,403.5,426.1,393.7z
                                 M381.2,466.5c-10.9,10.4-25.4,15.5-44.4,15.5H90.3c-18.9,0-33.4-5.1-44.4-15.5C35.2,456.3,30,442.4,30,423.9
                                c0-9.6,0.3-19.1,0.9-28.2c0.6-8.9,1.9-18.7,3.8-29.1c1.8-10.3,4.2-19.9,7-28.7c2.7-8.4,6.3-16.7,10.9-24.7
                                c4.3-7.6,9.3-14.2,14.8-19.4c5.1-4.9,11.6-9,19.3-12c7.1-2.8,15-4.3,23.6-4.6c1.1,0.6,2.9,1.6,6,3.6c6.2,4,13.3,8.6,21.1,13.6
                                c8.9,5.6,20.3,10.8,33.9,15.2c13.9,4.5,28.2,6.8,42.3,6.8s28.3-2.3,42.3-6.8c13.6-4.4,25.1-9.5,33.9-15.2c8-5.1,15-9.6,21.1-13.6
                                c3-2,4.9-3,6-3.6c8.6,0.2,16.6,1.8,23.6,4.6c7.6,3,14.1,7.1,19.3,12c5.5,5.3,10.5,11.8,14.8,19.4c4.5,8,8.2,16.3,10.9,24.7
                                c2.8,8.8,5.2,18.4,7,28.7c1.9,10.4,3.1,20.2,3.8,29.1v0c0.6,9.1,1,18.5,1,28.1C397.2,442.4,391.9,456.3,381.2,466.5z"/>
                        </svg>


                    </div>
                    <p className="text-center mt-1 col-12 px-0">پروفایل</p>
                </li>
            </ul>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    openCart: () => dispatch(openCart()),
    openSearch:()=>dispatch(searchMobileToggle())
})

export default connect(null, mapDispatchToProps)(MobileMenu)