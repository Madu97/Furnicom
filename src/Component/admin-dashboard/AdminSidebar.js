import React from "react";
import { FaUserTie } from 'react-icons/fa';
import admin from "../../Assets/Images/customer.jpg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



const sidebar = () => {
    return (
        <div className="col-3 sidebar bg-side-bar">

            <div className="row  d-flex p-4 justify-content-center mb-1 ">
                <img src={admin} class="rounded-circle" width="150px" height="150px"></img>

            </div>

            <div className="row p-3 justify-content-center align-items-center bgc-theme fs-30 ">
                Admin
            </div>
            <div>

            </div>
            <div className="pl-3 m-4">


         <Link to="/admin/dashboard">
                    <a className="row d-block mb-3 fc-white "><i class="fa fa-home m-2  fa-lg" ></i>Dashboard</a>
                </Link>
                <Link to="/admin/notification"><a className="row d-block mb-3 fc-white" ><i class="fa fa-bell m-2 fa-lg" ></i>Notification</a></Link>
                <Link to="/admin/customerlist"><a className="row d-block mb-3 fc-white" ><i class="fa fa-user m-2 fa-lg" ></i>Customer</a></Link>
                <Link to="/admin/supplierlist"><a className="row d-block mb-3 fc-white" ><i class="fas fa-user-tie  m-2 fa-lg" ></i>Supplier</a></Link>
                <Link to="/admin/deliverymanlist"><a className="row d-block mb-3 fc-white" ><i class="fa fa-truck m-1 fa-lg" ></i>Deliver team</a></Link>
                <Link to="/admin/settings"><a className="row d-block mb-3 fc-white" ><i class="fa fa-cog m-2 fa-lg" ></i>Settings</a></Link>

            </div>


            <div className="row bg-theme d-flex justify-content-center fc-white  bgc-theme p-2 mb-2">
                <button class="btn d-flex justify-content-center fc-white align-items-center bgc-theme font-weight-bold"><i class="fa fa-sign-out m-2  fa-2x" aria-hidden="true" ></i>
                    <div className="dboard-text">
                        Log Out
                    </div>
                </button>
            </div>

        </div>

    )
}

export default sidebar;