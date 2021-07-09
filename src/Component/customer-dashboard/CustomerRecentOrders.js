import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const CustomerRecentOrders = () => {
    return (
        <div className="bg-order-his-color pb-1 p-1">
            <div className="d-flex fc-white justify-content-center align-items-center border rounded table-responsive">
                <table class="table fc-white text-left ">
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
        </div>
    );
};

export default CustomerRecentOrders;
