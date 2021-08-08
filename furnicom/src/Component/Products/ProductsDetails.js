import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import { TiShoppingCart } from 'react-icons/ti';
import { CartProvider, useCart } from "react-use-cart"

import { BrowserRouter as Router, Route, Switch, Link, useParams } from "react-router-dom";

function ProductDetails() {

    const [Dt, setDt] = useState([])

    const { id } = useParams();

    const { addItem } = useCart();

    const [Customerid, setCustomerid] = useState();

    const [msg, setmsg] = useState();


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

                <div className="d-flex pt-3 pb-3 justify-content-center">
                    <img src={Dt.thumb} className="imgstyle2 img-fluid border p-2" />
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
                        </div>
                        <div className="row d-flex justify-content-start align-items-center p-1">
                            <button className="btn btn-lg btn-warning font-weight-bold d-flex" onClick={() => doit()}> ADD TO CART <TiShoppingCart size={30} /></button>
                            <Link to=""><button className="btn btn-lg btn-info m-2 font-weight-bold d-flex"> BUY IT NOW <TiShoppingCart size={30} /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default ProductDetails