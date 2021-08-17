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
            const response = await axios.get('http://localhost:3001/getCustomOrder', {
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
            <div className="d-flex justify-content-center">
                <h3>Customized Order</h3>
            </div>
            <div className="d-flex justify-content-center table-responsive bg-secondary rounded">
                <table class="table fc-white text-center ">
                    <thead className="fs-30 text-center">
                        <tr>
                            <th scope="col">Order No</th>
                            <th scope="col">Item</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Features</th>
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
                                <td className=" align-middle">{person.features}</td>
                                <td className=" align-middle">{person.quantity}</td>
                                                            
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>

        </div>
    );

};

export default SupplierSales;


