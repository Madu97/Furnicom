import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import item1 from '../../Assets/Images/item1.jpg';
import item2 from '../../Assets/Images/item2.jpg';
import item3 from '../../Assets/Images/item3.png';
import axios from 'axios';

export default class OrderList extends React.Component {
    state = {
        orders: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/getSales')
            .then(res => {
                console.log(res);
                this.setState({ orders: res.data });
            });
    }

    render() {
        return (
            <div className="col-12  d-block pl-1 pr-1 ">
            <div className="d-flex justify-content-center table-responsive bg-order-his-color rounded">
            <table class="table fc-white text-left ">
                <thead className="fs-30 text-left">
                    <tr>
                        <th scope="col">Order No</th>
                        <th scope="col">Item</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Status</th>
                        <th scope="col">View</th>
                    </tr>
                    </thead>
                    <tbody className="align-items-center">

                    {this.state.orders.map(order =>


                    <tr>
                    <th scope="row">{order.CompletedOrder_id}</th>
                    <td>
                    <div className="d-flex justify-content-start align-items-center">
                     <img src={item2} width="100px" height="100px" className="m-2 rounded"></img>
                     <p className="fs-22">{order.ItemName}</p>
                    </div>
                    </td>
                    <td className=" align-middle"> John Woodworks</td>
                    <td className=" align-middle">{order.Order_status}</td>
                    <td className=" align-middle"> <button className="btn btn-warning fc-white font-weight-bold">More Details</button></td>
                    </tr>
                    )}
                      </tbody>

                </table>
                </div>

            </div>
        );

    }
}

