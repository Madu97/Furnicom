import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import item1 from '../../Assets/Images/item1.jpg';
import item2 from '../../Assets/Images/item2.jpg';
import item3 from '../../Assets/Images/item3.png';



const SupplierSalesHistoryComponent = () => {
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
                    <tr>
                        <th scope="row">25</th>
                        <td>
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={item2} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-22">Home Chair</p>
                            </div>
                        </td>
                        <td className=" align-middle"> John Woodworks</td>
                        <td className=" align-middle">Delivered</td>
                        <td className=" align-middle"> <button className="btn btn-warning fc-white font-weight-bold">More Details</button></td>
                    </tr>
                    <tr>
                        <th scope="row">25</th>
                        <td>
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={item3} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-22">Round Table</p>
                            </div>
                        </td>
                        <td className=" align-middle"> John Woodworks</td>
                        <td className=" align-middle">On the way</td>
                        <td className=" align-middle"> <button className="btn btn-warning font-weight-bold fc-white">More Details</button></td>
                    </tr>
                    <tr>
                        <th scope="row">25</th>
                        <td>
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={item2} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-22">Home Chair</p>
                            </div>
                        </td>
                        <td className=" align-middle"> Roy Woodworks</td>
                        <td className=" align-middle">Delivered</td>
                        <td className=" align-middle"> <button className="btn btn-warning font-weight-bold fc-white">More Details</button></td>
                    </tr>
                    <tr>
                        <th scope="row">25</th>
                        <td>
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={item1} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-22">Home Chair</p>
                            </div>
                        </td>
                        <td className=" align-middle"> Karl Woodworks</td>
                        <td className=" align-middle">On the way</td>
                        <td className=" align-middle"><button className="btn btn-warning font-weight-bold fc-white">More Details</button></td>
                    </tr>
                    <tr>
                        <th scope="row">25</th>
                        <td>
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={item2} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-22">Home Chair</p>
                            </div>
                        </td>
                        <td className=" align-middle"> John Woodworks</td>
                        <td className=" align-middle">Preparing</td>
                        <td className=" align-middle"> <button className="btn btn-warning font-weight-bold fc-white">More Details</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default SupplierSalesHistoryComponent;