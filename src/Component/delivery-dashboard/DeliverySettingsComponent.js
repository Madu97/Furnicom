import React from "react";
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import delivery from '../../Assets/Images/delivery.jpg';



const DeliverySettings = (userData) => {
    return (
        <div className="col-12 pb-3 d-block bg-theme-pale">
            <div className="row m-2 p-2 ">
                <h3>Account</h3>
            </div>

            <div className="d-block">
                <div className="ml-5 font-weight-bold">
                    <p>{userData.userData.firstname}</p>
                </div>

                <div className="row align-items-center  ">
                    <div className="m-2 ml-4">
                        <img src={delivery} class="rounded-circle" width="100px" height="100px" alt="img-abc"></img>
                    </div>

                    <div className="">
                        <button className="btn btn-sm btn-success m-2">Upload</button>

                        <button className="btn btn-sm btn-danger m-2">Remove</button>
                    </div>
                </div>
            </div>

            <div className="row m-2">
                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 d-block">
                    <label htmlFor="">First Name</label>
                    <input type="text" className="form-control" placeholder={userData.userData.firstname} />
                </div>

                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className="form-control" placeholder={userData.userData.lastname} />
                </div>

            </div>

            <div className="row m-2 mt-4">
                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 d-block">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" placeholder={userData.userData.email} />
                </div>

                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" className="form-control" placeholder={userData.userData.phone_no} />
                </div>

            </div>

            <div className="row m-2 mt-4">
                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 d-block">
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

            </div>

            <div className="row m-2 mt-4">
                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 d-block">
                    <label htmlFor="">Address</label>
                    <textarea name="Address" id="" cols="30" rows="5" className="form-control">{userData.userData.address}</textarea>
                </div>

            </div>

            <div className="row m-2 mt-5 justify-content-end">
                <button className="btn btn-primary">Save Changes</button>
            </div>


        </div>
    );
};

export default DeliverySettings;


/*
const DeliverySettings = () => {
    return (
        <div className="col-12 pb-3 d-block bg-theme-pale">
            <div className="row m-2 p-2 ">
                <h3>Account</h3>
            </div>

            <div className="d-block">
                <div className="ml-5 font-weight-bold">
                    <p>Michael</p>
                </div>

                <div className="row align-items-center  ">
                    <div className="m-2 ml-4">
                        <img src={delivery} class="rounded-circle" width="100px" height="100px" alt="img-abc"></img>
                    </div>

                    <div className="">
                        <button className="btn btn-sm btn-success m-2">Upload</button>

                        <button className="btn btn-sm btn-danger m-2">Remove</button>
                    </div>
                </div>
            </div>

            <div className="row m-2">
                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 d-block">
                    <label htmlFor="">First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" />
                </div>

                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>

            </div>

            <div className="row m-2 mt-4">
                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 d-block">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" placeholder="Email" />
                </div>

                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" className="form-control" placeholder="Phone Number" />
                </div>

            </div>

            <div className="row m-2 mt-4">
                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 d-block">
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

            </div>

            <div className="row m-2 mt-4">
                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 d-block">
                    <label htmlFor="">Address</label>
                    <textarea name="Address" id="" cols="30" rows="5" className="form-control"> Address</textarea>
                </div>

            </div>

            <div className="row m-2 mt-5 justify-content-end">
                <button className="btn btn-primary">Save Changes</button>
            </div>


        </div>
    );
};

export default DeliverySettings;
*/