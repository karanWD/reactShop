import React, {Component, Suspense, lazy} from "react"
import {BrowserRouter as Router} from "react-router-dom";
import {Switch, Route, Redirect} from "react-router"
import "./bootstrap.min.css"
import Nav from "./Components/Nav/Nav";
// import Home from "./Home/Home";
import Footer from "./Components/Footer/Footer";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
// import Detail from "./Detail/Detail";
import Cart from "./Components/Cart/Cart";
// import Products from "./Products/Products";
import {connect} from "react-redux";
import {cartSelector} from "./redux/cart/cart-selector";
import Loading from "./Components/Loading/Loading";
import Checkout from "./Checkout/Checkout";

const Home = lazy(() => {
    return Promise.all([
        import("./Home/Home"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const Detail = lazy(() => {
    return Promise.all([
        import("./Detail/Detail"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})
const Products = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("./Products/Products")), 300);
    });
})


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Suspense fallback={<Loading/>}>
                <div className="container-fluid px-0">
                    <Router basename="/">
                        <Nav/>
                        <Suspense fallback={<Loading/>}>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/products/:catname" component={Products}/>
                                <Route exact path="/detail/:proname" component={Detail}/>
                                <Route exact path="/detail/:proname" component={Detail}/>
                                <Route exact path="/checkout" component={Checkout} />
                                <Route path="/*" component={Home}/>
                            </Switch>
                        </Suspense>
                        <MobileMenu/>
                        {this.props.cartOpen.openCart ? <Cart/> : null}

                        <Footer/>
                    </Router>
                </div>
            </Suspense>
        )
    }
}


const mapStateToProps = state => ({
    cartOpen: cartSelector(state),
})
export default connect(mapStateToProps)(App)
