import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const CustomerRecentOrders = () => {
    return (
        <div className=" pb-1 p-1 border-5 border-w">
            <div className="d-flex  justify-content-center align-items-center border rounded table-responsive">
                <table class="table table-striped  text-left ">
                    <thead className="fs-30">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Status</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">25</th>
                            <td>Home Chair</td>
                            <td>John Woodworks</td>
                            <td>Delivered</td>
                            <td> <i class="fa fa-eye" ></i></td>
                        </tr>
                        <tr>
                            <th scope="row">26</th>
                            <td>Round table</td>
                            <td>John Woodworks</td>
                            <td>On the way</td>
                            <td><i class="fa fa-eye" ></i></td>
                        </tr>
                        <tr>
                            <th scope="row">27</th>
                            <td>Teak table</td>
                            <td>Roy Woodworks</td>
                            <td>Delivered</td>
                            <td><i class="fa fa-eye" ></i></td>
                        </tr>
                        <tr>
                            <th scope="row">28</th>
                            <td>School chair</td>
                            <td>Karl Woodworks</td>
                            <td>On the way</td>
                            <td><i class="fa fa-eye" ></i></td>
                        </tr>
                        <tr>
                            <th scope="row">29</th>
                            <td>Cuboard</td>
                            <td>John Woodworks</td>
                            <td>Preparing</td>
                            <td><i class="fa fa-eye" ></i></td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            <div className="mb-1 mt-2 d-flex justify-content-center">
                <button class="btn btn-lg col-lg-4 col-md-6 m-2 col-sm-6 col-xs-4 col bg-paleorange d-flex justify-content-center align-items-center fc-white fs-30 h-10 font-weight-bold">
                    Shop Now<i class="fa  fa-shopping-cart  ml-5 fa-3x mb-4 fc-orange side-bar-icon-size" ></i>
                </button>
            </div>
        </div>
    );
};

export default CustomerRecentOrders;
