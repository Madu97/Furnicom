//import React, { Component, useState, useEffect } from 'react';
//import React from "react";
import React, { useState, useEffect } from 'react';
import { FaEye } from "react-icons/fa";
import axios from 'axios';

/*
import {FaUserTie} from 'react-icons/fa';
import {AiOutlineFieldNumber} from 'react-icons/ai';
import {MdDescription} from 'react-icons/md';
import {RiShoppingBag3Fill} from 'react-icons/ri';
import {GiCash} from 'react-icons/gi';
import {MdDateRange} from 'react-icons/md';
import {FaAddressBook} from 'react-icons/fa';
import {FiPhoneCall} from 'react-icons/fi';
import {GrDeliver} from 'react-icons/gr';
*/
const RecentDeliveryComponent = (userData) => {
    const userid = userData.userData.id
    const [Deliverdata, setDeliverdata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/deliveryhistory', {
                params: {
                    id: userid
                }
            });

            setDeliverdata(response.data);
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

    console.log(Deliverdata)
    return (
        <div className="col-12  d-block pl-1 pr-1 ">
             <h2>Recent Deliveries</h2>
            <div className="d-flex justify-content-center table-responsive bg-order-his-color rounded">
                <table class="table fc-white text-center ">
                    <thead className="fs-29 text-center">
                        <tr>
                            <th scope="col">Delivery No:</th>
                            {/*<th scope="col">Order</th> */}
                            <th scope="col">Buyer</th>
                            <th scope="col">Address</th>
                            <th scope="col">Delivered Date</th>
                            <th scope="col">Delivery Charges</th>
                            <th scope="col">Delivery Status</th>
                        </tr>
                    </thead>

                    {Deliverdata.map((person) =>
                        <tbody className="align-items-center">
                            <tr>
                                <th scope="row">{person.deliver_id}</th>
                                {/*<td>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={person.thumb} width="100px" height="100px" className="m-2 rounded" alt=""></img>
                                    </div>
                                </td>*/}
                                {/*<td className=" align-middle">{person.order}</td>*/}
                                <td className=" align-middle">{person.customer_name}</td>
                                <td className=" align-middle">{person.address}</td>
                                <td className=" align-middle">{person.date}</td>
                                <td className=" align-middle">Rs: {person.delivery_charges}</td>
                                 <td className=" align-middle">{person.status}</td>
                               {/* <td className=" align-middle"><FaEye size={16} /><button onClick={() => toggle(person.deliver_id)} className="btn btn-primary fc-white font-weight-bold">More Details</button></td>  */} 
                            </tr>

                            {/*
                            <tr>
                                {((idd === person.id) && isOpened) && (

                                    <td colSpan="5" className="text-left  " >
                                        <div className="d-flex fs-16 ">
                                            <img src={person.thumb} width="600px" height="500px" className="m-2 rounded d-flex" alt="" ></img>
                                            <div className=" d-flex align-items-center m-2 bg-light border rounded p-5 fc-blue">
                                                <div className="m-2 fs-20">
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><FaUserTie size={22}/><span>&nbsp;</span>Buyer's Name :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.customer_name}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><AiOutlineFieldNumber size={25}/><span>&nbsp;</span>Deliver ID :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.deliver_id}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><MdDescription size={25}/><span>&nbsp;</span>Description :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.description}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><GiCash size={25}/><span>&nbsp;</span>Total Delivery Charges :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>Rs.{person.delivery_charges}</p>
                                                    </div>                                                    
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><FaAddressBook size={22}/><span>&nbsp;</span>Address :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.address}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><FiPhoneCall size={22}/><span>&nbsp;</span>Telephone No :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.telephone}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><MdDateRange size={25}/><span>&nbsp;</span>Date :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.date.substring(0, 10)}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><GrDeliver size={25}/><span>&nbsp;</span>Delivery Status :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.status}</p>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </td>


                                )}
                            </tr>
                                */}


                         </tbody>
                    )}
                </table>
            </div>

        </div>
    );

};



export default RecentDeliveryComponent;    

/*
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <h5 class="bgc-theme p-3">Recent Deliveries</h5>
                        <div class="card-body">
                            <table class="table table-striped text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Delivery No:</th>
                                        <th scope="col">Order</th>
                                        <th scope="col">Buyer</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Delivered Date</th>
                                        <th scope="col">View More</th>
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
                                            <FaEye />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>
                                            <FaEye />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>
                                            <FaEye />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>
                                            <FaEye />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>
                                            <FaEye />
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

export default RecentDeliveryComponent;
*/