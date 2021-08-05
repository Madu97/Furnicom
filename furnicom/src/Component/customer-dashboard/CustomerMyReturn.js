import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import item1 from '../../Assets/Images/item1.jpg';
import item2 from '../../Assets/Images/item2.jpg';
import item3 from '../../Assets/Images/item3.png';
import { AiTwotoneStar} from 'react-icons/ai';


const stylenone = { color: "grey",margin:"2px"}
const stylegold = { color: "gold",margin:"2px"}

const CustomerMyReturn = () => {
    return (
        <div className="col-12  d-block pl-1 pr-1">
            <table class="table  text-center align-items-center table-striped ">
                <thead className="fs-30 text-center align-items-center">
                    <tr>
                        <th scope="col">Items(s)</th>
                        <th scope="col">Reason for return</th>
                        <th scope="col">View </th>
                    </tr>
                </thead>
                <tbody className="align-items-center">
                    <tr>
                        <td>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={item2} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-15 fc-blue">Home Chair</p>
                            </div>
                        </td>
                        <td className=" align-middle"> Damage in the item</td>
                        <td className=" align-middle"> <button className="btn btn-primary fc-white font-weight-bold">More Details</button></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={item3} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-15 fc-blue">Round Table</p>
                            </div>
                        </td>
                        <td className=" align-middle"> Damage in the item</td>
                        <td className=" align-middle"> <button className="btn btn-primary font-weight-bold fc-white">More Details</button></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={item2} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-15 fc-blue">Home Chair</p>
                            </div>
                        </td>
                        <td className=" align-middle"> Damage in the item</td>
                        <td className=" align-middle"> <button className="btn btn-primary font-weight-bold fc-white">More Details</button></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={item1} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-15 fc-blue">Home Chair</p>
                            </div>
                        </td>
                        <td className=" align-middle"> Damage in the item</td>
                        <td className=" align-middle"><button className="btn btn-primary font-weight-bold fc-white">More Details</button></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={item2} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-15 fc-blue">Home Chair</p>
                            </div>
                        </td>
                        <td className=" align-middle"> Damage in the item</td>
                        <td className=" align-middle"> <button className="btn btn-primary font-weight-bold fc-white">More Details</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CustomerMyReturn;