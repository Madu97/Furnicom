import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import customer from '../../Assets/Images/customer.jpg';


const CustomerSidebar = () => {
    return (
        <div className="col-3 sidebar bg-side-bar">
            <div className="h-25 d-flex p-3 justify-content-center mb-3 ">
                <img src={customer} class="img-fluid rounded-circle" width="200px" height="200px"></img>

            </div>

            <div className="p-2 row bgc-theme justify-content-center font-weight-bold fc-white ">
                <h4>David</h4>
            </div>

            <div className="mt-2">

                    <Link to="/customer/dashboard">
                    <a className="row dboard-icon mb-5 fc-white" href="CustomerDashboard"><i class="fa fa-home m-2  fa-2x" ></i>
                        <div className="dboard-text pb-2">
                            Dashboard
                        </div>
                    </a>
                    </Link>

                    <Link to="/customer/notification">
                        <a className="row dboard-icon mt-5 mb-5 fc-white" href="Customer_notification"><i class="fa fa-bell m-2 fa-2x" ></i>
                            <div className="dboard-text pb-2">
                                Notifications
                            </div>
                        </a>
                    </Link>

                    <Link to="/customer/orderhistory">
                    <a className="row dboard-icon mt-5 mb-5 fc-white" href="Customer_order_history"><i class="fa fa-history m-2 fa-2x" ></i>
                        <div className=" dboard-text pb-2">
                            Order History
                    </div>
                    </a>
                    </Link>

                    <Link to="/customer/settings">
                    <a className="row dboard-icon  mt-5 mb-5 fc-white" href="customer_settings"><i class="fa fa-cog m-2 fa-2x" ></i>
                        <div className="dboard-text pb-2">
                            Settings
                    </div>
                    </a>
                    </Link>

            </div>

                <div className="row bg-theme d-flex justify-content-center fc-white  bgc-theme p-2 mb-2">
                    <button class="btn d-flex justify-content-center fc-white align-items-center bgc-theme font-weight-bold"><i class="fa fa-sign-out m-2  fa-2x" aria-hidden="true" ></i>
                        <div className="dboard-text">
                            Log Out
                    </div>
                    </button>
                </div>

            </div>
    );
};

export default CustomerSidebar;
