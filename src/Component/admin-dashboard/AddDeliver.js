/*import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddDelivers = () => {
  let history = useHistory();
  const [delivery_person, setDelivery_person] = useState({
    firstname: "",
    address: "",
    email: ""
  });

  const { firstname, address, email } = delivery_person;
  const onInputChange = e => {
    setDelivery_person({ ...delivery_person, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/adddeli", delivery_person);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Deliver</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="firstname"
              value={firstname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block">Add Deliver</button>
        </form>
      </div>
    </div>
  );
};

export default AddDelivers;*/




import React, { Component, useState } from 'react';
import Axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../../Assets/CSS/signup.css';



const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    availability: yup.string().required(),
    ic: yup.string().max(10, "Must be 10 Characters.").min(10, "Must be 10 Characters."),
    phone: yup.string().max(10, "Must be 10 Digits.").min(10, "Must be 10 Digits."),

    password: yup.string().required().min(8).max(15),
    confirmpassword: yup.string().when('password', (password, schema) => {
        if (password) return schema.required('Confirm Password is required');
    })
        .oneOf([yup.ref('password')], 'Passwords must match')
})

function AddDelivers() {

    const [LoginStatus, setLoginStatus] = useState();

    const [usernamemsg, setusernamemsg] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    const registerform = (data) => {

        Axios.get('http://localhost:3001/checkusername', {
            params: {
                username: data.username,
            }
        }).then((response1) => {
            if (response1.data[0]) {
                setusernamemsg("Username Already taken...");
            }
            else {
                setusernamemsg("");
                Axios.post('http://localhost:3001/adddel', {
                    username: data.username,
                    password: data.password,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    availability: data.availability,
                    ic: data.ic,
                    phone: data.phone,
                    email: data.email,

                }).then((response) => {
                    if (response.data.message) {
                        setLoginStatus(response.data.message)
                        document.getElementById("custmer-signup").reset();
                    }
                })
                //console.log(data)

            }
        })

        

    }



    return (
        <div className=" container">
            <div className="form-group">
                <div className="w-75 mx-auto shadow-lg p-5 ">
                    <div className="ui">
                        <form id="custmer-signup" className="form-group fs-15" onSubmit={handleSubmit(registerform)}>
                            <div className=" container">
                                <h2 className="text-center mb-4">Add a Deliver</h2>
                            </div>
                            <h5 className="d-flex bg-success fc-white  justify-content-center">{LoginStatus}</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>FirstName<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" placeholder="FirstName..." name="firstname" {...register('firstname')} /><br />
                                    {errors.firstname?.message && <p className=" errormessage" >{errors.firstname?.message}</p>}

                                </div>
                                <div className="col-lg-6">
                                    <label>LastName :</label> <input type="text" className="form-control" placeholder="LastName..." name="lastname" {...register('lastname')} /><br />
                                    {errors.lastname?.message && <p className=" errormessage" >{errors.lastname?.message}</p>}
                                </div>
                            </div>

                            

                            <label>Id Number<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" placeholder="Id Number..." name="ic"  {...register('ic')} /><br />
                            {errors.ic?.message && <p className=" errormessage" >{errors.ic?.message}</p>}

                            <label>Phone No<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" placeholder="Phone No..." name="phone" {...register('phone')} o /><br />
                            {errors.phone?.message && <p className=" errormessage" >{errors.phone?.message}</p>}

                            <label>Email<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" name="email" placeholder="Email..." {...register('email')} /><br />
                            {errors.email?.message && <p className=" errormessage" >{errors.email?.message}</p>}

                            <label>Username<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" name="username" placeholder="Username..." {...register('username')} /><br />
                            {errors.username?.message && <p className=" errormessage" >{errors.username?.message}</p>}
                            {(usernamemsg) ? (<p className="errormessage">{usernamemsg}</p>) : ('')}

                            <div className="row">
                                <div className="col-lg-6">
                                    <label>Password<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="password" className="form-control" name="password" {...register('password')} placeholder="Password..." /><br />
                                    {errors.password?.message && <p className=" errormessage" >{errors.password?.message}</p>}
                                </div>
                                <div className="col-lg-6">
                                    <label>Re-type Password<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="password" className="form-control" name="confirmpassword" {...register('confirmpassword')} placeholder="Password..." /><br />
                                    {errors.confirmpassword?.message && <p className=" errormessage" >{errors.confirmpassword?.message}</p>}
                                </div>
                            </div>
                            <label>Availability<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" placeholder="Availability..." name="availability" {...register('availability')} /><br />
                            {errors.availability?.message && <p className=" errormessage" >{errors.availability?.message}</p>}
                            <div className="d-flex justify-content-end">
                                <button type="submit" class="btn btn-lg btn-primary">Add Deliver</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>

    )

}

export default AddDelivers