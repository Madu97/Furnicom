import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';

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

        return (
            <div className="col-12  d-block pl-1 pr-1 ">
            <div className="d-flex justify-content-center table-responsive bg-order-his-color rounded">
            <table class="table fc-white text-center ">
                <thead className="fs-30 text-center">
                    <tr>
                        <th scope="col">Order No</th>
                        <th scope="col">Item</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">View</th>
                    </tr>
                 </thead>
                    <tbody className="align-items-center">

                    {Salesdata.map((person) =>
                    <tr>
                    <th scope="row">{person.order_id}</th>
                    <td>
                    <div className="d-flex justify-content-center align-items-center">
                     <img src={person.thumb} width="100px" height="100px" className="m-2 rounded"></img>
                    </div>
                    </td>
                    <td className=" align-middle">{person.name}</td>
                    <td className=" align-middle"> <button className="btn btn-warning fc-white font-weight-bold">More Details</button></td>
                    </tr>
                    )}
                    </tbody>

                </table>
                </div>

            </div>
        );

    };

    export default SupplierSales;


