import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import supplier from '../../Assets/Images/supplier.jpg';
import Axios from 'axios';
import { useParams } from "react-router-dom";


const SupplierSidebar = (userData) => {

    const { id } = useParams();
    const [Usernm, setUsernm] = useState();
    const [User, setUser] = useState([]);

    //console.log(userData.userData[0].username);
    //setUsernm(userData.userData[0].username)

    const nm = userData.userData[0].username;

    const logout = () => {

        Axios.post("http://localhost:3001/logout").then((response) => {
            console.log(response.data.info);
            if(response.data.info == 'success'){
                window.location.href = "/login";
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios.get('http://localhost:3001/getsupplier', {
                params: {
                    name: nm
                }
            });
            //console.log(response.data[0]);
            setUser(response.data[0])

        };
        fetchData();
    }, [id]);

    return (
        <div className="col-3 sidebar bg-side-bar">
            <div className="d-flex p-3 justify-content-center mb-3 ">
                <img src={supplier} class="img-fluid imgstyle rounded-circle " width="200px" height="200px"></img>

            </div>

            <div className="p-2 row bgc-theme justify-content-center font-weight-bold fc-white ">
                <h4>{User.firstname}</h4>
            </div>

            <div className="mt-2">

                <Link to="/supplier/dashboard">
                    <a className="row dboard-icon mb-3 fc-white" href="CustomerDashboard"><i class="fa fa-home m-2  fa-lg" ></i>
                        <div className="dboard-text pb-2">
                            Dashboard
                        </div>
                    </a>
                </Link>

                <Link to="/supplier/products">
                    <a className="row dboard-icon mb-3 fc-white" href="supplier_products"><i class="fa fa-suitcase m-2  fa-lg" ></i>
                        <div className="dboard-text pb-2">
                            Products
                        </div>
                    </a>
                </Link>

                {/* <Link to="/supplier/notification">
                        <a className="row dboard-icon mt-5 mb-5 fc-white" href="Customer_notification"><i class="fa fa-bell m-2 fa-2x" ></i>
                            <div className="dboard-text pb-2">
                                Notifications
                            </div>
                        </a>
                    </Link> */}

                <Link to="/supplier/saleshistory">
                    <a className="row dboard-icon mb-3 fc-white" href="Customer_order_history"><i class="fa fa-history m-2 fa-lg" ></i>
                        <div className=" dboard-text pb-2">
                            Sales History
                        </div>
                    </a>
                </Link>

                <Link to="/supplier/settings">
                    <a className="row dboard-icon  mb-3 fc-white" href="customer_settings"><i class="fa fa-cog m-2 fa-lg" ></i>
                        <div className="dboard-text pb-2">
                            Settings
                        </div>
                    </a>
                </Link>

            </div>

            <div className="row bg-theme d-flex justify-content-center fc-white  bgc-theme p-2 mb-2">
                <button class="btn d-flex justify-content-center fc-white align-items-center bgc-theme font-weight-bold" onClick={function () { logout() }}><i class="fa fa-sign-out m-2  fa-lg" aria-hidden="true" ></i>
                    <div className="dboard-text">
                        Log Out
                    </div>
                </button>
            </div>

        </div>
    );
};

export default SupplierSidebar;
