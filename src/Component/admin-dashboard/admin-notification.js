import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const AdminNotificationComponent = () => {
    return (
        <div className="col-12 d-block bg-theme-pale">
        <div className="container-fluid p-1 ">
            <div className="row justify-content-center mb-5">
                <h2 className="">Notifications</h2>

            </div>
            <div>
                <div className="m-2">
                    <h3>New</h3>
                </div>
                <div className="row d-block m-2 justify-content-between fc-white">
                    <div className="col-lg-8 bg-order-his-color fc-white  d-flex justify-content-between align-items-center rounded">

                        <div className=" d-flex align-items-center ">
                            <i class="fa fa-user-o m-2 p-2  fa-2x mr-4 bg-warning fc-white rounded-circle" ></i>The new customer was registered...
                    </div>

                        <div className=" d-flex align-items-center  ">
                            <div className="mr-3 fc-grey">
                                9.04 PM
                        </div>
                            <button className="btn btn-info"> View</button>
                        </div>

                    </div>
                </div>
                <div className="row d-block m-2 justify-content-between fc-white">
                    <div className="col-lg-8 bg-order-his-color  fc-white  d-flex justify-content-between align-items-center rounded">

                        <div className=" d-flex align-items-center ">
                            <i class="fa fa-user-o m-2 p-2  fa-2x mr-4 bg-primary fc-white rounded-circle" ></i>The new supplier was registered....
                    </div>

                        <div className=" d-flex align-items-center  ">
                            <div className="mr-3 fc-grey">
                                9.04 PM
                        </div>
                            <button className="btn btn-info"> View</button>
                        </div>

                    </div>
                </div>
                <div className="row d-block m-2 justify-content-between fc-white">
                    <div className="col-lg-8 bg-order-his-color  fc-white  d-flex justify-content-between align-items-center rounded">

                        <div className=" d-flex align-items-center ">
                            <i class="fa fa-user p-2 m-2  fa-2x mr-4 bg-success fc-white rounded-circle" ></i>Kamal is login.
                    </div>

                        <div className=" d-flex align-items-center  ">
                            <div className="mr-3 fc-grey">
                                9.04 PM
                        </div>
                            <button className="btn btn-info"> View</button>
                        </div>

                    </div>
                </div>

                <div className="row d-block m-2 justify-content-between fc-white">
                    <div className="col-lg-8 bg-order-his-color  fc-white  d-flex justify-content-between align-items-center rounded">

                        <div className=" d-flex align-items-center ">
                            <i class="fa fa-user m-2 p-2 fa-2x mr-4 bg-warning fc-white rounded-circle" ></i>Saman is signup...
                    </div>

                        <div className=" d-flex align-items-center  ">
                            <div className="mr-3 fc-grey">
                                9.04 PM
                        </div>
                            <button className="btn btn-info"> View</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <div className="container-fluid p-1 mt-5">
            <div>
                <div className="m-2">
                    <h3>Earlier</h3>
                </div>
                <div className="row d-block m-2 justify-content-between fc-white">
                    <div className="col-lg-8 bg-order-his-color fc-white  d-flex justify-content-between align-items-center rounded">

                        <div className=" d-flex align-items-center ">
                            <i class="fa fa-user-o m-2 p-2  fa-2x mr-4 bg-warning fc-white rounded-circle" ></i>The new customer was registered...
                    </div>

                        <div className=" d-flex align-items-center  ">
                            <div className="mr-3 fc-grey">
                                5.3.2021
                        </div>
                            <button className="btn btn-info"> View</button>
                        </div>

                    </div>
                </div>
                <div className="row d-block m-2 justify-content-between fc-white">
                    <div className="col-lg-8 bg-order-his-color  fc-white  d-flex justify-content-between align-items-center rounded">

                        <div className=" d-flex align-items-center ">
                            <i class="fa fa-user-o m-2 p-2  fa-2x mr-4 bg-primary fc-white rounded-circle" ></i>The new supplier was registered....
                    </div>

                        <div className=" d-flex align-items-center  ">
                            <div className="mr-3 fc-grey">
                                5.3.2021
                        </div>
                            <button className="btn btn-info"> View</button>
                        </div>

                    </div>
                </div>
                <div className="row d-block m-2 justify-content-between fc-white">
                    <div className="col-lg-8 bg-order-his-color  fc-white  d-flex justify-content-between align-items-center rounded">

                        <div className=" d-flex align-items-center ">
                            <i class="fa fa-user p-2 m-2  fa-2x mr-4 bg-success fc-white rounded-circle" ></i>Kamal is login....
                    </div>

                        <div className=" d-flex align-items-center  ">
                            <div className="mr-3 fc-grey">
                                5.3.2021
                        </div>
                            <button className="btn btn-info"> View</button>
                        </div>

                    </div>
                </div>

                <div className="row d-block m-2 justify-content-between fc-white">
                    <div className="col-lg-8 bg-order-his-color  fc-white  d-flex justify-content-between align-items-center rounded">

                        <div className=" d-flex align-items-center ">
                            <i class="fa fa-user m-2 p-2  fa-2x mr-4 bg-warning fc-white rounded-circle" ></i>Saman is signup...
                    </div>

                        <div className=" d-flex align-items-center  ">
                            <div className="mr-3 fc-grey">
                                5.3.2021
                        </div>
                            <button className="btn btn-info"> View</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default AdminNotificationComponent;