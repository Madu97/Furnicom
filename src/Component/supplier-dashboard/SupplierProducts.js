import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import item1 from '../../Assets/Images/item1.jpg';
import item2 from '../../Assets/Images/item2.jpg';
import item3 from '../../Assets/Images/item3.png';


const SupplierProducts = () => {
    return (
        <div className="bg-theme-pale d-block  justify-content-center pb-3 p-1">
            <div className="row justify-content-center">
                <h2>Your Products</h2>
            </div>
            <div className="row justify-content-center fc-white">
                <div className="col-md-6 col-sm-10 d-block text-center">
                    <img src={item1} class="img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">School Chair</div>
                        <div class="fc-theme ">Rs.4000</div>
                        <button className="btn btn-info"><i class="fa fa-edit fc-white mr-1" ></i>Edit</button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-10  d-block text-center">
                    <img src={item1} class="img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">School Chair</div>
                        <div class="fc-theme ">Rs.4000</div>
                        <button className="btn btn-info"><i class="fa fa-edit fc-white mr-1" ></i>Edit</button>
                    </div>

                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-10 d-block text-center">
                    <img src={item1} class="img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">School Chair</div>
                        <div class="fc-theme ">Rs.4000</div>
                        <button className="btn btn-info"><i class="fa fa-edit fc-white mr-1" ></i>Edit</button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-10  d-block text-center">
                    <img src={item1} class="img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">School Chair</div>
                        <div class="fc-theme ">Rs.4000</div>
                        <button className="btn btn-info"><i class="fa fa-edit fc-white mr-1" ></i>Edit</button>
                    </div>

                </div>
            </div>

            <div className=" m-2 d-flex justify-content-center">
                <button className="btn btn-info">Show all</button>
            </div>
        </div>
    );
};

export default SupplierProducts;
