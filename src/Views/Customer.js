import CustomerDashboard from "./Pages/Customer/CustomerDashboard";
import CustomerNotification from "./Pages/Customer/CustomerNotification";
import CustomerSidebar from "../Component/customer-dashboard/CustomerSidebar";

import { Route, Switch } from "react-router-dom";
import React, { Component, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import Axios from 'axios';
import {CartProvider} from 'react-use-cart'



import CustomerOrderHistory from "./Pages/Customer/CustomerOrderHistory";
import CustomerSettings from "./Pages/Customer/CustomerSettings";
import CustomerMyReview from "./Pages/Customer/CustomerMyReviews";
import CustomerMyReturn from "./Pages/Customer/CustomerMyReturns";
import CustomerCart from "../Component/customer-dashboard/CustomerMyCart";
import PoductDetails from "../Component/Products/ProductsDetails";

import Login from "./Pages/Login/Login";



const Customer = () => {
    const[LoginSt, setLoginSt] = useState();
    const[Name , setName] = useState();
    const[User , setUser] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            
            const response = await Axios.get("http://localhost:3001/login");

            if (response.data.loggedIn) {
               
                const nm = response.data.user[0].username;
                console.log(nm)

                const response1 = await Axios.get('http://localhost:3001/getuser', {
                    params: {
                        name: nm
                    }
                });
                
                setName(response.data.user)

                const element = (

                    <div className="row">
                    <CustomerSidebar userData={response.data.user} />
                        <div className="col-9 p-5">
                            <Switch>
                                <Route path="/customer/dashboard">
                                    <CustomerDashboard userData={response1.data[0]} />
                                </Route>
                                <Route path="/customer/notification">
                                    <CustomerNotification />
                                </Route>
                                <Route path="/customer/orderhistory">
                                    <CustomerOrderHistory userData={response1.data[0]} />
                                </Route>
                                <Route path="/customer/settings">
                                    <CustomerSettings userData={response1.data[0]} />
                                </Route>
                                <Route path="/customer/myreviews">
                                    <CustomerMyReview userData={response1.data[0]} />
                                </Route>
                                <Route path="/customer/myreturns">
                                    <CustomerMyReturn />
                                </Route>
                                <Route path="/customer/cart">
                                    <CartProvider><CustomerCart userData={response1.data[0]} /></CartProvider>
                                </Route>
                            </Switch>
                        </div>
                        </div>
                );

                setLoginSt(element);
            }
            else{
                const element = (<Login/>);
                setLoginSt(element);
            }

        };
        fetchData();
    },[id]);

    return (
        <div className="">

                {LoginSt}
            
        </div>
    );
};

export default Customer;
