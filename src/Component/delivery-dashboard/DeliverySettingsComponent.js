import React, { Component, useState, useEffect } from "react";
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import delivery from '../../Assets/Images/delivery.jpg';
import axios from 'axios'



const DeliverySettings = (userData) => {
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

    function updateDeliverInfo(id) {
        axios.get('http://localhost:3001/updatedeliverinfo', {
            params: {
                fname: Info.fname,
                lname: Info.lname,
                email: Info.email,
                phone: Info.phone,
                address: Info.address,
                d_id: id
            }
        }).then((response) => {
            window.location.reload();

        })
    }

    const [isOpened, setIsOpened] = useState(false);
    function toggle() {
        setIsOpened(wasOpened => !wasOpened);

    }
    
    const [imgdetails, setimgdetails] = useState([]);
    const [imgFile, setImgFile] = useState('');

    function uploadHandler(event) {


        const data = new FormData();
        data.append('file', event.target.files[0]);

        axios.post('http://localhost:3001/uploadpp', data)
            .then((res) => {

                setimgdetails(res.data.filename);

                axios
                .get("http://localhost:3001/updatepicture", {
                    params: {
                        name: res.data.filename,
                        id: userData.userData.id
                    },
                })
                .then((response) => {
                    
                });
            });
           

    }
    console.log(window.location.origin)

    return (
        <div className="col-12 pb-3 d-block bg-theme-pale">
            <div className="row m-2 p-2 ">
                <h3>My Profile</h3>
            </div>

            <div className="d-block">
                <div className="row align-items-center  ">
                    <div className="m-2 ml-4">
                        <img src={require('../../Assets/Images/'+ userData.userData.profile_picture).default}  class="rounded-circle" width="100px" height="100px"></img>
                    </div>

                    <div className="row pl-4 align-items-center">
                        <button style={(isOpened) ? ({ display: 'none' }) : ({ display: 'a' })} className="btn btn-sm btn-success m-2" onClick={() => toggle()}>Change</button>
                        {(isOpened) && (<div className="border p-2"><input type="file" name="file" onChange={e => uploadHandler(e)} /><button onClick={() => window.location.reload()} className="btn btn-sm btn-primary">OK</button></div>)}
                        <button className="btn btn-sm btn-danger ml-4 m-2">Remove</button>
                    </div>
                </div>
            </div>

            <div className="row m-2">
                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 d-block">
                    <label htmlFor="">First Name</label>
                    <input type="text" className="form-control" name="fname" value={Info.fname} onChange={handleChange} />
                </div>

                <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className="form-control" name="lname" value={Info.lname} onChange={handleChange} />
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
                <button className="btn btn-primary" onClick={() => updateDeliverInfo(userData.userData.id)}>Save Changes</button>
            </div>


        </div>
    );
};

export default DeliverySettings;