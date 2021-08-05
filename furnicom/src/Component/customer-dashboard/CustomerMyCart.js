import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import { useCart } from "react-use-cart"
import { TiShoppingCart } from 'react-icons/ti';


const CustomerMyCart = (userData) => {
    const [Cartdata, setCartdata] = useState([])
    const [Productdata, setProductdata] = useState([])

    const userid = userData.userData.id

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/getcart', {
                params: {
                    id: userid
                }
            });

            setCartdata(response.data);
        };
        fetchData();
    }, [userid]);

    function increaseQuantity(customer_id, product_id) {

        axios.get('http://localhost:3001/increasequantity', {
            params: {
                cid: customer_id,
                pid: product_id,
            }
        }).then((response) => {
            window.location.reload();
        })
    }

    function decreaseQuantity(customer_id, product_id) {

        axios.get('http://localhost:3001/decreasequantity', {
            params: {
                cid: customer_id,
                pid: product_id,
            }
        }).then((response) => {
            window.location.reload();
        })
    }

    function removeItem(customer_id, product_id) {

        axios.get('http://localhost:3001/removeitem', {
            params: {
                cid: customer_id,
                pid: product_id,
            }
        }).then((response) => {
            window.location.reload();
        })
    }

    var totalprice = 0;
    var totalitems = 0;
    var cart = 0;

    Cartdata.map(function (a) { return totalprice += a.price * a.quantity }, 0);
    Cartdata.map(function (a) { return totalitems += a.quantity }, 0);
    Cartdata.map(function (a) { return cart += 1 }, 0);

    return (
        <div>
            <div className="bg-palegreen font-weight-bold pl-3  fs-22 d-flex d-block justify-content-start pt-2 align-items-center mb-2 ">
                <p>< TiShoppingCart size={55}/>Cart:({cart})  Total Items:({totalitems})</p>
                    
            </div>
            {Cartdata.map((person, index) =>
                <div className="border">
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            <tr >
                                <td>
                                    <img src={person.thumb} style={{ height: '6rem', width: '8rem' }} />
                                </td>
                                <td className=" align-middle">{person.name}</td>
                                <td className=" align-middle">{person.price}.00</td>
                                <td className=" align-middle">Quantity: {person.quantity}</td>
                                <td className=" align-middle">
                                    <button className="btn bgc-theme  fc-white btn-circle font-weight-bold  m-2 " onClick={() => decreaseQuantity(person.customer_id, person.product_id)} >-</button>
                                    <button className="btn bgc-theme fc-white btn-circle m-2 font-weight-bold fs-22" onClick={() => increaseQuantity(person.customer_id, person.product_id)}>+</button>
                                    <button className="btn btn-danger btn-md rounded-pill m-2 ml-5" onClick={() => removeItem(person.customer_id, person.product_id)}>Remove Item</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            <div className="container-fluid mt-2  bg-warning mb-1 font-weight-bold p-1 d-flex mr-5 justify-content-end">
                <p className="fs-30">Total Price: Rs.{totalprice}.00</p>
            </div>

            <div className="d-flex mr-5 m-2 justify-content-end">
                <button className="btn btn-lg btn-primary rounded-pill pl-5 pr-5 font-weight-bold" >Pay Now</button>
            </div>
        </div>
    );
};

/*            <div className="d-flex mr-5 m-1 justify-content-end">
                <button className="btn btn-danger" >Clear Cart</button>
            </div>*/

export default CustomerMyCart;
