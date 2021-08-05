import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import item1 from '../../Assets/Images/item1.jpg';
import item2 from '../../Assets/Images/item2.jpg';
import item3 from '../../Assets/Images/item3.png';
import { AiTwotoneStar } from 'react-icons/ai';
import axios from 'axios';
import Rating from "../customer-dashboard/Rating"


const stylenone = { color: "grey", margin: "2px" }
const stylegold = { color: "gold", margin: "2px" }

const CustomerMyReview = (userData) => {

    const userid = userData.userData.id;
    const [Orderdata, setOrderdata] = useState([])

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

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





    console.log(userData.userData);
    return (
        <div className="col-12  d-block pl-1 pr-1">
            {Orderdata.map((person, index) =>
                <div className="m-2">
                    <div className="d-flex justify-content-start align-items-center">
                        <img src={person.thumb} width="150px" height="150px" className="m-2 rounded border"></img>
                        <div className="d-block ml-5">
                            <p className="fs-30 font-weight-bold ">{person.name}</p>
                            <p className="">Karl Woodworks</p>
                            <div className=" d-flex justify-content-center justify-content-center align-items-center ">
                                <AiTwotoneStar size={35} style={person.rating > 0? (stylegold) : stylenone}/>
                                <AiTwotoneStar size={35} style={person.rating-1 > 0? (stylegold) : stylenone}/>
                                <AiTwotoneStar size={35} style={person.rating-2 > 0? (stylegold) : stylenone}/>
                                <AiTwotoneStar size={35} style={person.rating-3 > 0? (stylegold) : stylenone}/>
                                <AiTwotoneStar size={35} style={person.rating -4> 0? (stylegold) : stylenone}/>
                                <div className="fs-30 ml-5 font-weight-bold align-items-center">
                                    {person.rating}
                            </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            )}


        </div>
    );
};

export default CustomerMyReview;