import React, { Component,useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AiOutlineInbox } from 'react-icons/ai';
import { AiOutlineStar} from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import {TiDeleteOutline} from 'react-icons/ti';
import {AiOutlineSetting} from 'react-icons/ai'
import {AiOutlineLogout} from 'react-icons/ai'
import customer from '../../Assets/Images/supplier.jpg';
import Axios from 'axios';
import { useParams } from "react-router-dom";

const CustomerSidebar = (userData) => {

    const { id } = useParams();
    const[Usernm, setUsernm] = useState();
    const[User, setUser] =useState([]);

        //console.log(userData.userData[0].username);
        //setUsernm(userData.userData[0].username)

        const nm = userData.userData[0].username;

    const logout = () => {
        
        Axios.post("http://localhost:3001/logout").then((response)=>{
            //console.log(response.data.info);
            /*if(response.data.info == 'success'){
                window.location.href = "/login";
            }*/
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios.get('http://localhost:3001/getuser', {
                params: {
                    name: nm
                }
            });
            //console.log(response.data[0]);
            setUser(response.data[0])

        };
        fetchData();
    }, [id]);

    return (
        <div className="col-3 rounded sidebar bg-side-bar">
            <div className="row  d-flex p-3 justify-content-center mb-3 ">
                <img src={customer} class="img-fluid imgstyle rounded-circle" width="200px" height="200px"></img>

            </div>

            <div className="p-2 row bgc-theme justify-content-center font-weight-bold fc-white ">
                <h4>{User.username}</h4>
            </div>

            <div className="mt-2">

                    <Link to="/customer/dashboard">
                    <a className="row dboard-icon mb-5 fc-white" href="CustomerDashboard"><div className="m-2"><AiOutlineHome size={35}/></div>
                        <div className="dboard-text pb-2">
                            Dashboard
                        </div>
                    </a>
                    </Link>

                    <Link to="/customer/cart">
                    <a className="row dboard-icon mb-5 fc-white" href="CustomerDashboard"><div className="m-2"><AiOutlineHome size={35}/></div>
                        <div className="dboard-text pb-2">
                            My Cart
                        </div>
                    </a>
                    </Link>

                    <Link to="/customer/orderhistory">
                        <a className="row dboard-icon mt-5 mb-5 fc-white" href=""><div className="m-2"><AiOutlineInbox size={35}/></div>
                            <div className="dboard-text pb-2">
                                My Orders
                            </div>
                        </a>
                    </Link>

                    <Link to="/customer/myreviews">
                    <a className="row dboard-icon mt-5 mb-5 fc-white" href=""><div className="m-2"><AiOutlineStar size={35}/></div>
                        <div className=" dboard-text pb-2">
                            My Reviews
                    </div>
                    </a>
                    </Link>

                    <Link to="/customer/myreturns">
                    <a className="row dboard-icon mt-5 mb-5 fc-white" href=""><div className="m-2"><TiDeleteOutline size={38}/></div>
                        <div className=" dboard-text pb-2">
                            My Returns
                    </div>
                    </a>
                    </Link>

                    <Link to="/customer/settings">
                    <a className="row dboard-icon  mt-5 mb-5 fc-white" href=""><div className="m-2 "><AiOutlineSetting size={34}/></div>
                        <div className="dboard-text pb-2">
                            Settings
                    </div>
                    </a>
                    </Link>

            </div>

                <div className="row bg-theme d-flex justify-content-center fc-white  bgc-theme p-2 mb-2">
                    <button class="btn d-flex justify-content-center fc-white align-items-center bgc-theme font-weight-bold" onClick={function(){logout()}}><div className="ml-2 mr-2"><AiOutlineLogout size={50}/></div>
                        <div className="dboard-text font-weight-bold fs-22">
                            Log Out
                    </div>
                    </button>
                </div>

            </div>
    );
};

export default CustomerSidebar;
