import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import item1 from '../../Assets/Images/item1.jpg';
import item2 from '../../Assets/Images/item2.jpg';
import item3 from '../../Assets/Images/item3.png';

const CustomerRecentOrders = () => {
    return (
        <div className=" pb-1 p-1 mb-3 pt-2 ">
            <div className="d-flex justify-content-center">
                <h3>Recent Orders</h3>
            </div>
            <div className="d-flex pt-2 justify-content-center align-items-center  table-responsive">
                <table class="table table-striped  text-left ">
                    <thead className="fs-30">
                        <tr>
                            <th scope="col">Order No</th>
                            <th scope="col">Order</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Status</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className=" align-middle">25</th>
                            <td className=" align-middle">
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={item2} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-15 fc-blue">Home Chair</p>
                            </div>
                            </td >
                            <td className=" align-middle">John Woodworks</td>
                            <td className=" align-middle">Delivered</td>
                            <td className=" align-middle"> <button className="btn btn-primary">More Details</button></td>
                        </tr>
                        <tr>
                            <th scope="row" className=" align-middle">26</th>
                            <td className=" align-middle">
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={item3} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-15 fc-blue">Round Table</p>
                            </div>
                            </td>
                            <td className=" align-middle">John Woodworks</td>
                            <td className=" align-middle">On the way</td>
                            <td className=" align-middle"><button className="btn btn-primary">More Details</button></td>
                        </tr>
                        <tr>
                            <th scope="row" className=" align-middle">27</th>
                            <td className=" align-middle">
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={item1} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-15 fc-blue">Home Chair</p>
                            </div>
                            </td>
                            <td className=" align-middle">Roy Woodworks</td>
                            <td className=" align-middle">Delivered</td>
                            <td className=" align-middle"><button className="btn btn-primary">More Details</button></td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            <div className="mb-1 mt-2 d-flex justify-content-center">
                <button class="btn btn-lg col-lg-4 col-md-6 m-2 col-sm-6 col-xs-4 col bg-info d-flex justify-content-center align-items-center fc-white fs-30 h-10 font-weight-bold">
                    Shop Now<i class="fa  fa-shopping-cart  ml-5 fa-3x mb-4 fc-white side-bar-icon-size" ></i>
                </button>
            </div>
        </div>
    );
};

export default CustomerRecentOrders;
