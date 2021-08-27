import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';

const SupplierNotification = (userData) => {
    const userid = userData.userData.id
    const [Notifydata, setNotifydata] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/getSnotify', {
                params: {
                    id: userid
                }
            });

            setNotifydata(response.data);
        };
        fetchData();
    }, [userid]);

    return (
        <div className="col-12 d-block bg-theme-pale">
            <div className="container-fluid p-1 ">
                <div className="row justify-content-center mb-5">
                    <h2 className="">Notifications</h2>

                </div>
                <div>
                    <div className="m-2">
                        <h3>Recent</h3>
                    </div>

                    <div className="row d-block m-2 justify-content-between fc-white">
                        {Notifydata.map((person) =>
                            <div className="col-lg-8 bg-order-his-color fc-white  d-flex justify-content-between align-items-center rounded">

                                <div className=" d-flex align-items-center ">
                                    <i class="fa fa-spinner m-2 p-2  fa-2x mr-4 bg-warning fc-white rounded-circle" ></i>{person.Title}
                                </div>

                                <div className=" d-flex align-items-center  ">
                                    <div className="mr-3 fc-grey">
                                        {person.Time}
                                    </div>
                                    <button className="btn btn-info"> View</button>
                                </div>

                            </div>
                        )}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SupplierNotification;