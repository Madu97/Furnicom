import React, { Component, useState } from 'react';
import Axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../../Assets/CSS/signup.css';



const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    ic: yup.string().max(10, "Must be 10 Characters.").min(10, "Must be 10 Characters."),
    phone: yup.string().max(10, "Must be 10 Digits.").min(10, "Must be 10 Digits."),

    password: yup.string().required().min(8).max(15),
    confirmpassword: yup.string().when('password', (password, schema) => {
        if (password) return schema.required('Confirm Password is required');
    })
        .oneOf([yup.ref('password')], 'Passwords must match')
})

function Supplier_Signup() {

    const[LoginStatus, setLoginStatus] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    const registerform = (data) => {
        Axios.post('http://localhost:3001/supreg', {
            username: data.username,
            password: data.password,
            firstname: data.firstname,
            lastname: data.lastname,
            address: data.address,
            ic: data.ic,
            phone: data.phone,
            email: data.email,
            gender: data.gender,
        }).then((response) => {
            if(response.data.message){
                setLoginStatus(response.data.message)
                document.getElementById("supplier-signup").reset();
            }
        })
        console.log(data)
        //alert('Registration was successful...');
    }



    return (
        <div className="fc-white d-flex justify-content-center">
            <div className="row  ">
                <div className="col-log-3 "></div>
                <div className="col-log-6 fc-white border rounded p-5 m-2 rounded ">
                    <div className="ui">
                        <form id="supplier-signup" className="form-group" onSubmit={handleSubmit(registerform)}>
                            <div className="d-flex justify-content-center">
                            <h1 className="fc-white">Supplier Registration</h1>
                            </div>
                            <h5 className="d-flex bg-success fc-white justify-content-center">{LoginStatus}</h5>

                            <div className="row">
                                <div className="col-lg-6">
                                    <label>FirstName :</label> <input type="text" className="form-control" placeholder="FirstName..." name="firstname" {...register('firstname')} /><br />
                                    {errors.firstname?.message && <p className=" errormessage" >{errors.firstname?.message}</p>}

                                </div>
                                <div className="col-lg-6">
                                    <label>LastName :</label> <input type="text" className="form-control" placeholder="LastName..."  name="lastname" {...register('lastname')} /><br />
                                    {errors.lastname?.message && <p className=" errormessage" >{errors.lastname?.message}</p>}
                                </div>
                            </div>

                            <label>Address :</label> <input type="text" className="form-control" placeholder="Address..." name="address" {...register('address')} /><br />
                            {errors.address?.message && <p className=" errormessage" >{errors.address?.message}</p>}

                            <label>Id Number :</label> <input type="text" className="form-control" placeholder="Id Number..." name="ic"  {...register('ic')} /><br />
                            {errors.ic?.message && <p className=" errormessage" >{errors.ic?.message}</p>}

                            <label>Phone No :</label> <input type="text" className="form-control" placeholder="Phone No..." name="phone" {...register('phone')} o /><br />
                            {errors.phone?.message && <p className=" errormessage" >{errors.phone?.message}</p>}

                            <label>Email :</label> <input type="text" name="email" className="form-control" placeholder="Email..." {...register('email')} /><br />
                            {errors.email?.message && <p className=" errormessage" >{errors.email?.message}</p>}

                            <label>Username :</label> <input type="text" name="username" className="form-control" placeholder="Username..." {...register('username')} /><br />
                            {errors.username?.message && <p className=" errormessage" >{errors.username?.message}</p>}

                            <div className="row">
                                <div className="col-lg-6">
                                    <label>Password :</label> <input type="password" className="form-control" name="password" {...register('password')} placeholder="Password..." /><br />
                                    {errors.password?.message && <p className=" errormessage" >{errors.password?.message}</p>}
                                </div>
                                <div className="col-lg-6">
                                    <label>Re-type Password :</label> <input type="password" className="form-control" name="confirmpassword" {...register('confirmpassword')} placeholder="Password..." /><br />
                                    {errors.confirmpassword?.message && <p className=" errormessage" >{errors.confirmpassword?.message}</p>}
                                </div>
                            </div>
                            <label>Gender :</label><select defaultValue="Select Gender" className="form-control" name="gender" {...register('gender')} >
                                <option defaultValue>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select><br />
                            <div className="d-flex justify-content-end">
                            <button type="submit" class="btn btn-lg btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>

    )

}

export default Supplier_Signup