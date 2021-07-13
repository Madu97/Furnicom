import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import supplier from '../../Assets/Images/supplier.jpg';


const SupplierStatusBar = () => {
    return (
        <div className="col-12">
            <div className="row justify-content-around">
                <div className="col-md-5 col-sm-8 bg-success d-flex justify-content-around m-2 rounded">
                    <div className="">
                        <i class="fa fa-dollar-sign m-2 fa-4x fc-white" ></i>
                    </div>
                    <div className="">
                        <div className="d-flex justify-content-center align-items-center font-weight-bold fs-30 fc-white">
                            Total Earnings
                                    </div>
                        <div className="  text-center fs-30 fc-white">
                            Rs.100,000
                                    </div>
                    </div>
                </div>

                <div className="col-md-5 col-sm-8 bg-info d-flex justify-content-around  m-2 rounded">
                    <div className="">
                        <i class="fa fa-truck m-2 fa-4x fc-white" ></i>
                    </div>
                    <div className="">
                        <div className="d-flex justify-content-center align-items-center font-weight-bold fs-30 fc-white">
                            Total Supplies
                                    </div>
                        <div className="  text-center fs-30 fc-white">
                            32
                                    </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-around">
                <div className="col-md-5 col-sm-8 bg-primary d-flex justify-content-around  m-2 rounded">
                    <div className="">
                        <i class="fa fa-suitcase m-2 fa-4x fc-white" ></i>
                    </div>
                    <div className="">
                        <div className="d-flex justify-content-center align-items-center font-weight-bold fs-30 fc-white">
                            Total Products
                                    </div>
                        <div className="  text-center fs-30 fc-white">
                            75
                                    </div>
                    </div>
                </div>

                <div className="col-md-5 col-sm-8 bg-danger d-flex justify-content-around  m-2 rounded">
                    <div className="">
                        <i class="fa fa-undo m-2 fa-4x fc-white" ></i>
                    </div>
                    <div className="">
                        <div className="d-flex justify-content-center align-items-center font-weight-bold fs-30 fc-white">
                            Total Returns
                                    </div>
                        <div className=" text-center fs-30 fc-white">
                            3
                                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplierStatusBar;
