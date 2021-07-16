import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const OrderStatusComponent = () => {
    return (
        <div className="bg-theme-pale">
            <div className="fc-white fs-30 mb-2 mt-2 ">
                <div className="row d-flex justify-content-around">
                    <div className=" col-md-3 col-sm-10 col-xs-12 bg-paleyellow rounded d-block text-center  m-2">
                        <p>1</p>
                        <p>Preparing</p>
                    </div >

                    <div className=" col-md-3 col-sm-10 col-xs-12 bg-paleblue rounded d-block text-center m-2">
                        <p>1</p>
                        <p>On the Way</p>

                    </div>

                    <div className="col-md-3 col-sm-10  col-xs-12 bg-palegreen rounded d-block text-center  m-2">
                        <p>24</p>
                        <p>Delivered</p>

                    </div>
                </div>
            </div>

            <div className="mb-1 mt-2 d-flex justify-content-center">
                <button class="btn btn-lg col-lg-4 col-md-6 m-2 col-sm-6 col-xs-4 col bg-paleorange d-flex justify-content-center align-items-center fc-white fs-30 h-10 font-weight-bold">
                    Shop Now<i class="fa  fa-shopping-cart  ml-5 fa-3x mb-4 fc-orange side-bar-icon-size" ></i>
                </button>
            </div>
        </div>
    );
};

export default OrderStatusComponent;