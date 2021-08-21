
import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import customer from '../../Assets/Images/customer.jpg';


const CustomerSettings = (userData) => {
   
    const [Info, setInfo] = useState({
        fname: userData.userData.firstname,
        lname: userData.userData.lastname,
        email: userData.userData.email,
        phone: userData.userData.phone_no,
        address: userData.userData.address

      });

      const handleChange = event => {
        setInfo({
          ...Info,
          [event.target.name]: event.target.value
        });
      };

      function updateCustomerInfo(id){
        axios.get('http://localhost:3001/updatecustomerinfo', {
            params: {
                fname: Info.fname ,
                lname: Info.lname ,
                email: Info.email ,
                phone: Info.phone,
                address: Info.address ,
                cust_id: id
            }
        }).then((response) => {
            window.location.reload();
            
        })
      }


    return (
        <div className="col-12 pb-3 d-block border">
            <div className="row m-2 p-2 ">
                <h3>Account</h3>
            </div>
            <div className="d-block">
                <div className="ml-5 font-weight-bold">
                    <p>Peter</p>
                </div>

                <div className="row align-items-center  ">
                    <div className="m-2 ml-4">
                        <img src={customer} class="rounded-circle" width="100px" height="100px"></img>
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
                    <input type="text" className="form-control" name="fname" value={Info.fname} onChange={handleChange}  />
                </div>

                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className="form-control" name="lname"value={Info.lname} onChange={handleChange} />
                </div>

            </div>

            <div className="row m-2 mt-4">
                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 d-block">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" name="email" value={Info.email} onChange={handleChange} />
                </div>

                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" className="form-control" name="phone" value={Info.phone} onChange={handleChange} />
                </div>

            </div>

            <div className="row m-2 mt-4">
                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 d-block">
                    <label htmlFor="">Address</label>
                    <input type="text" className="form-control justify-content-start align-items-start" name="address" value={Info.address} onChange={handleChange} />
                </div>

            </div>

            <div className="row m-2 mt-5 justify-content-end">
                <button className="btn btn-primary" onClick={() => updateCustomerInfo(userData.userData.id)}>Save Changes</button>
            </div>


        </div>
    );
};

export default CustomerSettings;
