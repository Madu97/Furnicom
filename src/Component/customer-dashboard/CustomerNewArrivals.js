import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import item1 from '../../Assets/Images/item1.jpg';
import item2 from '../../Assets/Images/item2.jpg';




const CustomerNewArrival = () => {
    return (
        <div className="bgc-theme">
            <div className="">
<<<<<<< HEAD
                <p className="d-flex justify-content-center fs-22 font-weight-bold">{item.product_name}</p>
                <p className="d-flex justify-content-center">{item.description}</p>
                <p className="price d-flex justify-content-center"><span>{item.currency}</span>{item.price}</p>
                <div className="font-weight-bold d-flex btn btn-sm btn-warning justify-content-center align-items-center">
                                ADD TO CART 
                                <div className="pl-2">
                                <TiShoppingCart size={30}/>
                                </div>
=======
                <div className="fc-white d-flex justify-content-center align-items-center">
                    <h2>New Arrivals...</h2>
>>>>>>> db0a97c3a19db93eadbf12b0e6259a8168e6da58
                </div>

                <div className="container  ">
                    <div className="row justify-content-center m-2">
                        <div className="col-lg-3 col-md-6 col-sm-12 m-2">
                            <img src={item1} class="img-fluid"></img>
                            <div class="product_details d-block text-center">
                                <h5><a href="">Home Chair</a></h5>
                                <ul class="product_price list-unstyled">
                                    <li class="old_price">$12.00</li>
                                </ul>
                                <div className="">
                                    <button className="btn btn-sm btn-info fc-white">Details</button>
                                    <button className="btn btn-sm btn-warning rounded-pill fc-white">Buy</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 m-2">
                            <img src={item1} class="img-fluid"></img>
                            <div class="product_details d-block text-center">
                                <h5><a href="">Home Chair</a></h5>
                                <ul class="product_price list-unstyled">
                                    <li class="old_price">$12.00</li>
                                </ul>
                                <div className="">
                                    <button className="btn btn-sm btn-info fc-white">Details</button>
                                    <button className="btn btn-sm btn-warning rounded-pill fc-white">Buy</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 m-2">
                            <img src={item1} class="img-fluid"></img>
                            <div class="product_details d-block text-center">
                                <h5><a href="">Home Chair</a></h5>
                                <ul class="product_price list-unstyled">
                                    <li class="old_price">$12.00</li>
                                </ul>
                                <div className="">
                                    <button className="btn btn-sm btn-info  fc-white">Details</button>
                                    <button className="btn btn-sm btn-warning rounded-pill fc-white">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CustomerNewArrival;