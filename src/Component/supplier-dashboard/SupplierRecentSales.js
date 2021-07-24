import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {Button} from 'react-bootstrap'
import { SupervisedUserCircle } from "@material-ui/icons";
import axios from 'axios';


<<<<<<< HEAD
export default class OrderList extends React.Component {
    state = {
        orders: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/getorder')
            .then(res => {
                console.log(res);
                this.setState({ orders: res.data });
            });
    }

    render() {
        return (
            <div className="col-12  d-block pl-1 pr-1 ">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">Order No</th>
                            <th scope="col">Item</th>
                            <th scope="col">Buyer</th>
                            <th scope="col">Status</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>

                    {this.state.orders.map(order =>


                        <tr>
                            <th scope="row">{order.Order_id}</th>
                            <td>{order.ItemName}</td>
                            <td>{order.CustomerName}</td>
                            <td>{order.Order_status}</td>
                            <td className=" align-middle"><Button>More Details</Button></td>
                        </tr>
                    )}
                      </tbody>

                </table>
=======
const SupplierRecentSales = () => {
    return (
        <div className=" row p-3 table-responsive bg-order-his-color rounded m-2">
            <table class="table fc-white text-left border ">
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
>>>>>>> db0a97c3a19db93eadbf12b0e6259a8168e6da58


            </div>
        );

    }
}
