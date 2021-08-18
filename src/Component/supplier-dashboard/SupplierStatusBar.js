import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import supplier from '../../Assets/Images/supplier.jpg';
import axios from 'axios';


const SupplierStatusBar = (userData) => {

    const userid = userData.userData.id
    const [Productsdata, setProductsdata] = useState([])
    const [Orderdata, setOrderdata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/productcount', {
                params: {
                    id: userid
                }
            });

            setProductsdata(response.data);
        };
        fetchData();
    }, [userid]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/ordercount', {
                params: {
                    id: userid
                }
            });

            setOrderdata(response.data);
        };
        fetchData();
    }, [userid]);

    return (
        <div className="col-12">
            <div className="row justify-content-around">
                {Productsdata.map((person) =>
                    <div className="col-md-5 col-sm-8 bg-success d-flex justify-content-around  m-2 rounded">
                        <div className="">
                            <i class="fa fa-suitcase m-2 fa-4x fc-white" ></i>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-center align-items-center font-weight-bold fs-30 fc-white">
                                Total Products
                            </div>
                            <div className="  text-center fs-30 fc-white">
                                {person.rowcount}
                            </div>
                        </div>
                    </div>
                )}

                {Orderdata.map((person) =>
                    <div className="col-md-5 col-sm-8 bg-info d-flex justify-content-around  m-2 rounded">
                        <div className="">
                            <i class="fa fa-truck m-2 fa-4x fc-white" ></i>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-center align-items-center font-weight-bold fs-30 fc-white">
                                Total Orders
                            </div>
                            <div className="  text-center fs-30 fc-white">
                            {person.count}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SupplierStatusBar;
