import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const SupplierRecentSales = () => {
    return (
        <div className=" border-w row p-3 table-responsive rounded m-2">
            <table class="table table-striped text-left border ">
                <thead className="fs-30">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Status</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">25</th>
                        <td>Home Chair</td>
                        <td>John</td>
                        <td>Delivered</td>
                        <td> <i class="fa fa-eye" ></i></td>
                    </tr>
                    <tr>
                        <th scope="row">26</th>
                        <td>Round table</td>
                        <td>John</td>
                        <td>On the way</td>
                        <td><i class="fa fa-eye" ></i></td>
                    </tr>
                    <tr>
                        <th scope="row">27</th>
                        <td>Teak table</td>
                        <td>Roy</td>
                        <td>Delivered</td>
                        <td><i class="fa fa-eye" ></i></td>
                    </tr>
                    <tr>
                        <th scope="row">28</th>
                        <td>School chair</td>
                        <td>Karl</td>
                        <td>On the way</td>
                        <td><i class="fa fa-eye" ></i></td>
                    </tr>
                    <tr>
                        <th scope="row">29</th>
                        <td>Cuboard</td>
                        <td>John</td>
                        <td>Preparing</td>
                        <td><i class="fa fa-eye" ></i></td>
                    </tr>
                </tbody>
            </table>

            <div className="d-flex justify-content-center">
                <button className="btn btn-lg btn-warning fc-white d-flex justify-content-center align-items-center">Add Items
            <div>
                        <i class="fa fa-plus-circle m-2 fa-3x fc-white" ></i>
                    </div></button>

            </div>
        </div>
    );
};

export default SupplierRecentSales;
