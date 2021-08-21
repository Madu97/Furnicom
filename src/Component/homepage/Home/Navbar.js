import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';



const Navbarr = () => {

    const [loggedIn, setloggedIn] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3001/login");

            console.log(response.data.loggedIn);
            setloggedIn(response.data.loggedIn);

        };
        fetchData();
    }, []);



    return (

        <div class="row  d-flex  justify-content-between align-items-center">
            <div class="col-6">
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav fs-15">
                            <li class="nav-item " className={(window.location.pathname === '/') ? ('active font-weight-bold rounded bg-grey'): ('')} >
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/allproducts">Products</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
            
            {(loggedIn != true) ? (
                <div class="col-2  p-2 d-flex justify-content-end align-items-end  ">
                    <Link to="/signupas"><button class="btn bg-success fc-white btn-sm ml-2 rounded font-weight-bold fs-20 popup "> Sign Up</button></Link>
                    <Link to="/login"><button class="btn bg-info fc-white btn-sm ml-2 mr-2 rounded font-weight-bold fs-20"> Log In</button></Link>
                </div>
            ) : 
            (
                <div class="col-2  p-2 d-flex justify-content-center align-items-center  ">
                    <Link to="/customer/dashboard"><div classname="btn bg-success fc-white btn-sm rounded font-weight-bold fs-20 "> <FaUserCircle size={40}/></div></Link>
                </div>
            )
            }


        </div>


    );


}

export default Navbarr;


