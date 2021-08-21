import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import item1 from '../../Assets/Images/item1.jpg';
import item2 from '../../Assets/Images/item2.jpg';
import item3 from '../../Assets/Images/item3.png';
import { AiTwotoneStar } from 'react-icons/ai';
import { GrStar } from 'react-icons/gr'
import axios from 'axios';
import Rating from "../customer-dashboard/Rating"
import { GiExitDoor } from 'react-icons/gi';


const stylenone = { color: "grey", margin: "2px" }
const stylegold = { color: "gold", margin: "2px" }

const CustomerMyReview = (userData) => {

    const userid = userData.userData.id;
    const [Orderdata, setOrderdata] = useState([])

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const [Productid, setProudctid] = useState()
    const [Orderid, setOrderid] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/ordersbycustomer_id', {
                params: {
                    id: userid
                }
            });

            setOrderdata(response.data);
        };
        fetchData();
    }, [userid]);


    function updateRating(rating, product_id, order_id, customer_id, item_number) {
        axios.get('http://localhost:3001/updaterating', {
            params: {
                rating: rating,
                cid: customer_id,
                pid: product_id,
                oid: order_id,
                item_no: item_number
            }
        }).then((response) => {
            window.location.reload();
        })
    }


    function getId(product_id, order_id) {
        setProudctid(product_id);
        setOrderid(order_id);
    }


    console.log(userData.userData);
    return (
        <div className="col-12  d-block pl-1 pr-1">
            {Orderdata.map((person, index) =>
                <div className="m-2">
                    <div className="d-flex justify-content-start align-items-center">
                        <p className="m-2">{index + 1}</p>
                        <img src={person.thumb} width="150px" height="150px" className="m-2 rounded border"></img>
                        <div className="d-block ml-5">
                            <p className="fs-30 font-weight-bold ">{person.name}</p>
                            <p className="">Karl Woodworks</p>
                            {(person.rating != 0) ? (
                                <div className=" d-flex justify-content-center justify-content-center align-items-center ">
                                    <GrStar size={39} style={person.rating > 0 ? (stylegold) : stylenone} />
                                    <GrStar size={39} style={person.rating - 1 > 0 ? (stylegold) : stylenone} />
                                    <GrStar size={39} style={person.rating - 2 > 0 ? (stylegold) : stylenone} />
                                    <GrStar size={39} style={person.rating - 3 > 0 ? (stylegold) : stylenone} />
                                    <GrStar size={39} style={person.rating - 4 > 0 ? (stylegold) : stylenone} />
                                    <div className="fs-30 ml-5 font-weight-bold align-items-center">
                                        {person.rating}
                                    </div>
                                </div>
                            ) : (
                                    <div>
                                        <button className="btn btn-info font-weight-bold" onClick={() => getId(person.id, person.order_id)}>Rate now</button>
                                        {((Productid == person.id) && (Orderid == person.order_id)) ? (
                                            <div className="d-flex justify-content-center justify-content-center align-items-center">
                                                {[...Array(5)].map((star, index) => {
                                                    index += 1;
                                                    return (
                                                        <button style={{ border: 'none', outline: 'none', cursor: 'pointer', backgroundColor: 'transparent' }}
                                                            type="button"
                                                            key={index}
                                                            className={index <= (hover || rating) ? "bon" : "boff"}
                                                            onClick={() => setRating(index)}
                                                            onMouseEnter={() => setHover(index)}
                                                            onMouseLeave={() => setHover(rating)}
                                                        >
                                                            <span style={{ fontSize: '45px' }} className="star fs-30">&#9733;</span>
                                                        </button>
                                                    );
                                                })}
                                                <div className="fs-30 ml-5 font-weight-bold align-items-center">
                                                    {(rating != 0) ? (
                                                        <div>
                                                            <button onClick={() => updateRating(rating, person.id, person.order_id, person.customer_id, person.item_number)} className="btn btn-primary font-weight-bold">Confirm Rating</button>
                                                        </div>
                                                    ) : ''}
                                                </div>
                                            </div>
                                        ) : ''}
                                    </div>


                                )}
                        </div>
                    </div>
                    <hr />
                </div>
            )}


        </div>
    );
};

export default CustomerMyReview;