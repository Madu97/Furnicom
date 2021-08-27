//import React from "react";
import React, { useState, useEffect } from "react";
//import { FaShuttleVan, FaTimes } from "react-icons/fa";
import axios from 'axios';



const DeliveryStatusComponent = (userData) => {
    const userid = userData.userData.id
    const [Deliverydata, setDeliverydata] = useState([])
    const [Pendingdata, setPendingdata] = useState([])
    const [Canceldata, setCanceldata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/deliverycount', {
                params: {
                    id: userid
                }
            });

            setDeliverydata(response.data);
        };
        fetchData();
    }, [userid]);


      
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/pendingcount', {
                params: {
                    id: userid
                }
            });

            setPendingdata(response.data);
        };
        fetchData();
    }, [userid]);

  
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/cancelcount', {
                params: {
                    id: userid
                }
            });

           setCanceldata(response.data);
        };
        fetchData();
    }, [userid]);
    

    return (
       <div className="col-12">
            <div className="row justify-content-around">
                {Deliverydata.map((person) =>
                    <div className="col-md-5 col-sm-8 bg-success d-flex justify-content-around  m-2 rounded">
                        <div className="">
                            <i class="fa fa-suitcase m-2 fa-4x fc-white" ></i>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-center align-items-center font-weight-bold fs-30 fc-white">
                                Delivered Orders
                            </div>
                            <div className="  text-center fs-30 fc-white">
                                {person.delivercount}
                            </div>
                        </div>
                    </div>
                )}

                {Pendingdata.map((person) =>
                    <div className="col-md-5 col-sm-8 bg-danger d-flex justify-content-around  m-2 rounded">
                        <div className="">
                            <i class="fa fa-truck m-2 fa-4x fc-white" ></i>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-center align-items-center font-weight-bold fs-30 fc-white">
                                Pending Orders
                            </div>
                            <div className="  text-center fs-30 fc-white">
                            {person.pendingcount}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="row justify-content-around">
                {Canceldata.map((person) =>
                    <div className="col-md-5 col-sm-8 bg-warning d-flex justify-content-around  m-2 rounded">
                        <div className="">
                            <i class="fa fa-map m-2 fa-4x fc-white" ></i>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-center align-items-center font-weight-bold fs-30 fc-white">
                                Cancelled Orders
                            </div>
                            <div className="  text-center fs-30 fc-white">
                                {person.cancelcount}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export default DeliveryStatusComponent;


/*
const DeliveryStatusComponent = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="card bg-success fc-white">
                        <div class="card-body">
                            <div className="row">
                                <div className="col d-flex justify-content-between align-items-center">
                                    <FaShuttleVan size={50} />
                                    <div className="text-center">
                                        <h3>Delivered</h3>
                                        <h4>55</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="card bg-warning fc-white">
                        <div class="card-body">
                            <div className="row">
                                <div className="col d-flex justify-content-between align-items-center">
                                    <FaShuttleVan size={50} />
                                    <div className="text-center">
                                        <h3>Pending</h3>
                                        <h4>8</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mt-sm-4 mt-lg-0">
                    <div class="card bg-danger fc-white">
                        <div class="card-body">
                            <div className="row">
                                <div className="col d-flex justify-content-between align-items-center">
                                    <FaTimes size={50} />
                                    <div className="text-center">
                                        <h3>Cancelled</h3>
                                        <h4>7</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryStatusComponent;
*/