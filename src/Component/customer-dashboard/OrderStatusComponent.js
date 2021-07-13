import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const OrderStatusComponent = () => {
    return (
        <div className="">
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
        </div>
    );
};

export default OrderStatusComponent;