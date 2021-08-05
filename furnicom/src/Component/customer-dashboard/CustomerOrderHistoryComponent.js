import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import item1 from '../../Assets/Images/item1.jpg';
import item2 from '../../Assets/Images/item2.jpg';
import item3 from '../../Assets/Images/item3.png';
import axios from 'axios';




const CustomerOrderHistory = (userData) => {

    const [Orderdata, setOrderdata] = useState([])

    const userid = userData.userData.id;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/ordersbycustomer_id', {
                params: {
                    id: userid
                }
            });

            setOrderdata(response.data);
        };
        fetchData();
    }, [userid]);

    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }

    return (
        <div className="col-12  d-block pl-1 pr-1 ">
            <div className="d-flex justify-content-center table-responsive table-striped  rounded">


                <table class="table  text-center align-items-center ">
                    <thead className="fs-30 text-center align-items-center">
                        <tr className="bg-dark fc-white">
                            <th scope="col">Order No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Status</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody className="align-items-center">
                        {Orderdata.map((person, index) =>
                            <tr>
                                <th scope="row" className="align-middle">{index + 1}</th>
                                <td>
                                    <div className="d-flex justify-content-start align-items-center">
                                        <img src={person.thumb} width="100px" height="100px" className="m-2 rounded"></img>
                                        <p className="fs-15 fc-blue">{person.name}</p>
                                    </div>
                                </td>
                                <td className=" align-middle"> John Woodworks</td>
                                <td className=" align-middle">{person.status}</td>
                                <td className=" align-middle"> <button className="btn btn-primary fc-white font-weight-bold">More Details</button></td>
                                
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

/*                                {isOpened && (
                                    <div className="boxContent">
                                        <p>{person.description}</p>
                                    </div>
                                    
                                )}
                    <tr>
                        <th scope="row" className="align-middle" >25</th>
                        <td>
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={item3} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-15 fc-blue">Round Table</p>
                            </div>
                        </td>
                        <td className=" align-middle"> John Woodworks</td>
                        <td className=" align-middle">On the way</td>
                        <td className=" align-middle"> <button className="btn btn-primary font-weight-bold fc-white">More Details</button></td>
                    </tr>
                    <tr>
                        <th scope="row" className="align-middle">25</th>
                        <td>
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={item2} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-15 fc-blue">Home Chair</p>
                            </div>
                        </td>
                        <td className=" align-middle"> Roy Woodworks</td>
                        <td className=" align-middle">Delivered</td>
                        <td className=" align-middle"> <button className="btn btn-primary font-weight-bold fc-white">More Details</button></td>
                    </tr>
                    <tr>
                        <th scope="row" className="align-middle">25</th>
                        <td>
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={item1} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-15 fc-blue">Home Chair</p>
                            </div>
                        </td>
                        <td className=" align-middle"> Karl Woodworks</td>
                        <td className=" align-middle">On the way</td>
                        <td className=" align-middle"><button className="btn btn-primary font-weight-bold fc-white">More Details</button></td>
                    </tr>
                    <tr>
                        <th scope="row" className="align-middle">25</th>
                        <td>
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={item2} width="100px" height="100px" className="m-2 rounded"></img>
                                <p className="fs-15 fc-blue">Home Chair</p>
                            </div>
                        </td>
                        <td className=" align-middle"> John Woodworks</td>
                        <td className=" align-middle">Preparing</td>
                        <td className=" align-middle"> <button className="btn btn-primary font-weight-bold fc-white">More Details</button></td>
                    </tr>*/
export default CustomerOrderHistory;