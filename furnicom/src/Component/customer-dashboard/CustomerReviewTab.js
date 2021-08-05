import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const CustomerReviewTab = () => {
    return (
        <div className="bg-theme-pale pb-3">
            <div className="mr-2 rounded">
                <div className="text-center">
                    <h3>Your Review for the past orders</h3>
                </div>

                <div className="d-block text-center border bgc-theme rounded pl-5 m-2 mb-3 ">
                    <div className="text-center">
                        <div className="d-flex text-left ">
                            <h6>Product:</h6>
                            <h6 className="pl-5 text-center"> Home chair</h6>
                        </div>

                        <div className="d-flex text-left">
                            <h6>Supplier:</h6>
                            <h6 className="pl-5"> John Woodworks</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star m-2 fa-2x fc-paleorange" ></i>
                        <i class="fa fa-star m-2 fa-2x fc-paleorange" ></i>
                        <i class="fa fa-star m-2 fa-2x fc-paleorange" ></i>
                        <i class="fa fa-star m-2 fa-2x fc-paleorange" ></i>
                        <i class="fa fa-star m-2 fa-2x fc-white" ></i>
                    </div>

                    <div className="d-flex justify-content-center align-items-end p-2">
                        <button class="btn bg-darktheme fc-white font-weight-bold">View</button>
                    </div>

                </div>

                <div className="d-block text-center border bgc-theme rounded pl-5 m-2 mt-3 ">
                    <div className="text-center ">
                        <div className="d-flex text-left ">
                            <h6>Product:</h6>
                            <h6 className="pl-5 text-center"> Teak Table</h6>
                        </div>

                        <div className="d-flex text-left">
                            <h6>Supplier:</h6>
                            <h6 className="pl-5"> Roy Woodworks</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star m-2 fa-2x fc-paleorange" ></i>
                        <i class="fa fa-star m-2 fa-2x fc-paleorange" ></i>
                        <i class="fa fa-star m-2 fa-2x fc-paleorange" ></i>
                        <i class="fa fa-star m-2 fa-2x fc-white" ></i>
                        <i class="fa fa-star m-2 fa-2x fc-white" ></i>
                    </div>

                    <div className="d-flex justify-content-center align-items-end p-2">
                        <button class="btn bg-darktheme fc-white font-weight-bold">View</button>
                    </div>

                </div>


                <div className="d-flex justify-content-center align-items-end mt-3">
                    <button class="btn btn-info fc-white font-weight-bold">Show All</button>
                </div>

            </div>
        </div>
    );
};

export default CustomerReviewTab;