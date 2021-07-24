import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Header from "./Component/shared-components/Header";
import Footer from "./Component/shared-components/Footer";
import Customer from "./Views/Customer";
import Supplier from "./Views/Supplier";
import Delivery from "./Views/Delivery";
import Home from "./Views/Pages/General/Home";
import About from "./Views/Pages/General/About";
import ContactUs from "./Views/Pages/General/ContactUs"
import Login from "./Views/Pages/Login/Login"
import SignUp from "./Views/Pages/SignUp/SignUp"

<<<<<<< HEAD
import PersonList from './Component/PersonList';
=======


>>>>>>> db0a97c3a19db93eadbf12b0e6259a8168e6da58
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
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                        <PersonList/>
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
