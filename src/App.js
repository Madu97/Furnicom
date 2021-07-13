import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Header from "./Component/shared-components/Header";
import Footer from "./Component/shared-components/Footer";
import Customer from "./Views/Customer";
import Supplier from "./Views/Supplier";
import Delivery from "./Views/Delivery";
import Admin from "./Views/Admin";
import Home from "./Views/Pages/General/Home";
import About from "./Views/Pages/General/About";
import ContactUs from "./Views/Pages/General/ContactUs"
import Login from "./Views/Pages/Login/Login"
import SignUp from "./Views/Pages/SignUp/SignUp"
import SupplierSignUp from "./Views/Pages/SignUp/SupplierSignUp"
import SignUpAs from "./Views/Pages/SignUp/SignUpAs"

import PersonList from './Component/PersonList';


import "./Assets/CSS/main.css";



function App() {
  return (
    <Router>
    <div className="body">
        <div className="row">
            <div className="col-12">
                <Header />
            </div>
        </div>

        <div className="row">
            <div className="col">
                <Switch>
                    <Route path="/customer">
                        <Customer/>
                    </Route>
                    <Route path="/supplier">
                        <Supplier/>
                    </Route>
                    <Route path="/delivery">
                        <Delivery />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/suppliersignup">
                        <SupplierSignUp />
                    </Route>
                    <Route path="/signupas">
                        <SignUpAs />
                    </Route>
                </Switch>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <Footer />
            </div>
        </div>
    </div>
</Router>
  );
}

export default App;
