import React, { Component,useState } from 'react'
import '../../Assets/CSS/login.css';
import '../../Assets/Images/furni.jpg'
import Axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import Customer from "../../Views/Pages/Customer/CustomerDashboard";
import { FaUserAlt } from 'react-icons/fa';


import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().required("Enter the Username"),
    password: yup.string().required("Enter the Password"),

})


function Login() {

    const[LoginStatus, setLoginStatus] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const logininfo = (data) => {

        Axios.post('http://localhost:3001/login', {
            username: data.username,
            password: data.password,
        }).then((response) => {
            if(response.data.message){
                setLoginStatus(response.data.message)
            }
            else{
                //setLoginStatus(response.data[0].username)
                //window.location.href = "/customer/dashboard";
                //alert(response.data[0].userrole);
                if(response.data[0].userrole == 'customer'){
                    window.location.href = "/customer/dashboard";  
                }
                else if(response.data[0].userrole == 'supplier'){
                    window.location.href = "/supplier/dashboard";
                }
            }
                console.log(response.data);
        })
        //console.log(data)
        
    }
    

        return (

            <div className=" row justify-content-center ">
                <div className="col-lg-4 fc-white border p-2 m-2 rounded fs-20">
                    <div className="d-flex justify-content-center">
                    <h2>Login</h2>
                    </div>
                    <form className="form-group" onSubmit={handleSubmit(logininfo)}>
                        <div className="inputBx">
                            <label>Username :</label> <input type="text" name="username" className="form-control"  placeholder="Username..." {...register('username')} /><br />
                            {errors.username?.message && <p className=" errormessage" >{errors.username?.message}</p>}

                        </div>
                        <div className="inputBx">
                            <label>Password :</label> <input type="password" className="form-control" name="password" placeholder="Password..." {...register('password')}/><br />
                            {errors.password?.message && <p className=" errormessage" >{errors.password?.message}</p>}

                        </div>
                        <h7 className="bg-danger fc-white">{LoginStatus}</h7>
                        <div className="remember mt-3">
                            <label>Remember me </label> <input type="checkbox" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" class="btn w-50 btn-lg btn-primary">Log In</button>
                            </div>
                        <div className="inputBx d-flex justify-content-center p-2">
                            <p>Don't have an account? <a href="">Sign up</a></p>
                        </div>
                    </form>

                </div>
            </div>
        )
    
}

export default Login