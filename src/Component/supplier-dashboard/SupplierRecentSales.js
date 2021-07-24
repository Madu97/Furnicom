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


            </div>
        );

    }
}
