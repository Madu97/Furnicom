import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import { TiShoppingCart } from 'react-icons/ti';
import { BiCube } from 'react-icons/bi'
import { CartProvider, useCart } from "react-use-cart"
import Dviewer from '../Products/3Dviewer'

import { BrowserRouter as Router, Route, Switch, Link, useParams } from "react-router-dom";
import { GrStar } from 'react-icons/gr'
const stylenone = { color: "grey", margin: "2px" }
const stylegold = { color: "gold", margin: "2px" }

function ProductDetails() {

    const [Dt, setDt] = useState([])

    const { id } = useParams(); console.log(id)

    const { addItem } = useCart();

    const [Customerid, setCustomerid] = useState();

    const [msg, setmsg] = useState();

    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/productsdetails', {
                params: {
                    id: id
                }
            });

            setDt(response.data[0]);

        };
        fetchData();
    }, [id]);


    async function addtocart() {

        const response = await axios.get("http://localhost:3001/login");

        if (response.data.loggedIn) {
            const nm = response.data.user[0].username;

            const response1 = await axios.get('http://localhost:3001/getuser', {
                params: {
                    name: nm
                }
            });

            setCustomerid(response1.data[0].id)
        }
        return

    }

    addtocart()
    function doit() {


        if (Customerid) {
            axios.get('http://localhost:3001/addtocart', {
                params: {
                    cid: Customerid,
                    pid: id,
                }
            }).then((response) => {
                //console.log(response)
                setmsg("Item Added to the cart.")
            })
        }
        else {
            window.location.href = "/login";
        }

    }




    return (




        <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-8 col-md-7 m-3 justify-content-center border rounded d-flex">

                <div className="d-block pt-3 pb-3 justify-content-center">
                    <img src={Dt.thumb} className="imgstyle2 img-fluid border p-2" />
                    <div className="row m-1 p-1 d-flex justify-content-center">
                        <button onClick={() => toggle()} className="row btn btn-sm m-0 btn-primary align-items-center font-weight-bold "><BiCube size={30} /><span>&nbsp;</span>3D VIEW</button>
                    </div>
                </div>

                <div className="col-lg-5 col-md-5 ml-5 fs-20 d-flex align-items-center  ">
                    <div className="ml-2">
                        <div className="row d-block ">
                            <div className="text-center p-1 fc-blue">
                                <h3>{msg}</h3>
                            </div>
                            <p className="d-flex justify-content-start mb-3 fs-35 font-weight-bold">{Dt.name}</p>
                            <p className="d-flex justify-content-start">{Dt.description}</p>
                            <p className="price d-flex justify-content-start"><span>Rs.</span>{Dt.price}</p>
                            <p className="price d-flex justify-content-start">Available quantity :{Dt.available_quantity}</p>
                            <p>
                                <GrStar size={35} style={(Dt.total_ratings / Dt.total_people_rated) > 0 ? (stylegold) : stylenone} />
                                <GrStar size={35} style={(Dt.total_ratings / Dt.total_people_rated) - 1 > 0 ? (stylegold) : stylenone} />
                                <GrStar size={35} style={(Dt.total_ratings / Dt.total_people_rated) - 2 > 0 ? (stylegold) : stylenone} />
                                <GrStar size={35} style={(Dt.total_ratings / Dt.total_people_rated) - 3 > 0 ? (stylegold) : stylenone} />
                                <GrStar size={35} style={(Dt.total_ratings / Dt.total_people_rated) - 4 > 0 ? (stylegold) : stylenone} />
                            </p>
                        </div>
                        <div className="row d-flex justify-content-start align-items-center">
                            <button className="btn btn-lg btn-warning font-weight-bold d-flex" onClick={() => doit()}> ADD TO CART <TiShoppingCart size={30} /></button>
                            <Link to="/customer/cart"><button className="btn btn-lg btn-info m-2 font-weight-bold d-flex"> MY CART <TiShoppingCart size={30} /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {isOpened && (
                <div className="border">
                    <div className="d-flex justify-content-center align-items-center fs-30 bgc-theme fc-white font-weight-bold">
                        View in 3D
                    </div>
                    <Dviewer />
                </div>

            )}
        </div>
    )

}


export default ProductDetails