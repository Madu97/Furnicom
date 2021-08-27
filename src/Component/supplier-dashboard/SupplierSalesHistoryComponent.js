import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import { FaUserTie } from 'react-icons/fa';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { MdDescription } from 'react-icons/md';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { GiCash } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa';


const SupplierSales = (userData) => {

    const userid = userData.userData.id
    const [Salesdata, setSalesdata] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/suppliersales', {
                params: {
                    id: userid
                }
            });

            setSalesdata(response.data);
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

    return (
        <div className="col-12  d-block pl-1 pr-1 ">
            <div className="d-flex justify-content-center table-responsive bg-order-his-color rounded">
                <table class="table fc-white text-center ">
                    <thead className="fs-30 text-center">
                        <tr>
                            <th scope="col">Order No</th>
                            <th scope="col">Item</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>

                    {Salesdata.map((person) =>
                        <tbody className="align-items-center">
                            <tr>
                                <th scope="row">{person.order_id}</th>
                                <td>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={person.thumb} width="100px" height="100px" className="m-2 rounded"></img>
                                    </div>
                                </td>
                                <td className=" align-middle">{person.name}</td>
                                <td className=" align-middle">Rs.{person.price}</td>
                                <td className=" align-middle">{person.quantity}</td>

                            </tr>

                            {/* <tr className="bg-theme-pale" >
                                {((idd == person.id) && isOpened) && (

                                    <td colSpan="4" className="text-left  " >
                                        <div className="d-flex fs-12 ">
                                            <img src={person.thumb} width="400px" height="400px" className="m-2 rounded d-flex"></img>
                                            <div className="align-items-center m-2 bg-light border rounded p-5 fc-blue">
                                                <div className="fs-16">
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><AiOutlineFieldNumber size={25} /><span>&nbsp;</span>Order ID :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.order_id}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><MdDescription size={25} /><span>&nbsp;</span>Description :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.description}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><GiCash size={25} /><span>&nbsp;</span>Price :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>Rs.{person.price}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><RiShoppingBag3Fill size={25} /><span>&nbsp;</span>Quantity :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.quantity}</p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><FaStar size={22} /><span>&nbsp;</span>Rating :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <p>{person.rating}</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </td>


                                )}
                            </tr> */}
                        </tbody>
                    )}
                </table>
            </div>

        </div>
    );

};

export default SupplierSales;


