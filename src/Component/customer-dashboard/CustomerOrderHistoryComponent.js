import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import item1 from '../../Assets/Images/item1.jpg';
import item2 from '../../Assets/Images/item2.jpg';
import item3 from '../../Assets/Images/item3.png';
import axios from 'axios';
import { FaUserTie } from 'react-icons/fa';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { MdDescription } from 'react-icons/md';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { GiCash } from 'react-icons/gi';
import { FaCreditCard } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { RiTimeFill } from 'react-icons/ri';

import { GrStar } from 'react-icons/gr'
const stylenone = { color: "grey", margin: "2px" }
const stylegold = { color: "gold", margin: "2px" }





const CustomerOrderHistory = (userData) => {

    const [Orderdata, setOrderdata] = useState([])
    var kk;
    const userid = userData.userData.id;
    const stylenone = { color: "grey" }
    const stylegold = { color: "gold" }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/ordersbycustomer_id', {
                params: {
                    id: userid
                }
            });

            setOrderdata(response.data);console.log('hello')
        };
        fetchData();
    }, [userid]);

    const [isOpened, setIsOpened] = useState(false);
    const [idd, setIdd] = useState();

    function toggle(id) {
        setIsOpened(wasOpened => !wasOpened);
        //kk = id;
        setIdd(id);

    }

    function bgcolor(str) {
        if (str == 'Delivered') {
            return { color: 'green' }
        }
        else if (str == 'Preparing') {
            return { color: 'orange' }
        }
    }
    console.log(Orderdata)
    return (
        <div className="col-12  d-block pl-1 pr-1 ">
            <div className="d-flex justify-content-center table-responsive  rounded">


                <table class="table text-center align-items-center ">
                    <thead className="fs-30 text-center align-items-center">
                        <tr className="bg-dark fc-white">
                            <th scope="col">Order No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Status</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>

                    {Orderdata.map((person, index) =>
                        <tbody className="align-items-center">
                            <tr>
                                <th scope="row" className="align-middle">{index + 1}</th>
                                <td style={{}}>
                                    <div className="d-flex justify-content-start align-items-center">
                                        <img src={person.thumb} width="100px" height="100px" className="m-2 rounded"></img>
                                        <p className="fs-15 fc-blue">{person.name}</p>
                                    </div>
                                </td>
                                <td className=" align-middle"> John Woodworks</td>
                                <td className=" align-middle p-3"  > <div className="fs-20 font-weight-bold" style={bgcolor(person.status)}>{person.status}</div></td>
                                <td className=" align-middle"> <button onClick={() => toggle(person.id)} className="btn btn-primary fc-white font-weight-bold">More Details</button></td>

                            </tr>
                            <tr>
                                {((idd == person.id) && isOpened) && (

                                    <td colSpan="5" className="text-left  " >
                                        <div className="d-flex fs-16 ">
                                            <img src={person.thumb} width="600px" height="500px" className="m-2 rounded d-flex"></img>
                                            <div className=" d-flex align-items-center m-2 bg-light border rounded p-5 fc-blue">
                                                <div className="m-2 fs-20">
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><FaUserTie size={22} /><span>&nbsp;</span>Supplier :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>Karl Woodworks</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><AiOutlineFieldNumber size={25} /><span>&nbsp;</span>Order ID :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.order_id}</p>{console.log(person.date)}
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><MdDescription size={25} /><span>&nbsp;</span>Description :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.description}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><RiShoppingBag3Fill size={25} /><span>&nbsp;</span>Quantity :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.quantity}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><GiCash size={25} /><span>&nbsp;</span>Price :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>Rs.{person.price}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><FaCreditCard size={22} /><span>&nbsp;</span>Card Method :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.ship_method}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><MdDateRange size={25} /><span>&nbsp;</span>Date :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.date.substring(0, 10)}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><RiTimeFill size={25} /><span>&nbsp;</span>Time :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.date.substring(11, 22)}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><GrStar size={25} /><span>&nbsp;</span>Rating :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>
                                                            <GrStar size={30} style={(person.total_ratings / person.total_people_rated) > 0 ? (stylegold) : stylenone} />
                                                            <GrStar size={30} style={(person.total_ratings / person.total_people_rated) - 1 > 0 ? (stylegold) : stylenone} />
                                                            <GrStar size={30} style={(person.total_ratings / person.total_people_rated) - 2 > 0 ? (stylegold) : stylenone} />
                                                            <GrStar size={30} style={(person.total_ratings / person.total_people_rated) - 3 > 0 ? (stylegold) : stylenone} />
                                                            <GrStar size={30} style={(person.total_ratings / person.total_people_rated) - 4 > 0 ? (stylegold) : stylenone} />
                                                        </p>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </td>


                                )}
                            </tr>



                        </tbody>
                    )}
                </table>
            </div>
            <Link to="/customer/customizedorder"><button className="btn btn-primary">Request Customized Order</button></Link>
        </div>
    );
};

export default CustomerOrderHistory;