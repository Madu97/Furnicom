import React from "react";
import { FaEye } from "react-icons/fa";
const DeliveryNotificationComponent = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <h5 class="bgc-theme p-3">Notifications</h5>
                        <div class="card-body">
                            <table class="table table-striped text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Order</th>
                                        <th scope="col">Buyer</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Delivered Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>
                                            <div>
                                                <button className="btn btn-success mx-1">
                                                    Accept
                                                </button>
                                                <button className="btn btn-danger mx-1">
                                                    Decline
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>
                                            <div>
                                                <button className="btn btn-success mx-1">
                                                    Accept
                                                </button>
                                                <button className="btn btn-danger mx-1">
                                                    Decline
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>
                                            <div>
                                                <button className="btn btn-success mx-1">
                                                    Accept
                                                </button>
                                                <button className="btn btn-danger mx-1">
                                                    Decline
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryNotificationComponent;