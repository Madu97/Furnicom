import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useParams} from "react-router-dom";
import axios from 'axios';

    
const SupplierProducts = (userData) => {

    const userid = userData.userData.id
    const [Productdata, setProductdata] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/supplierproduct', {
                params: {
                    id: userid
                }
            });

            setProductdata(response.data);
        };
        fetchData();
    }, [userid]);

    return (
        <div className="bg-theme-pale d-block  justify-content-center pb-3 p-3">
            
            <div className="row justify-content-center fc-white">
            {Productdata.map((person) =>
                <div className="col-md-4 col-sm-7 d-block text-center">
                    <img src={person.thumb} class="imgstyle img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">{person.name}</div>
                        <div class="fc-theme ">Rs.{person.price}</div>
                        <button className="btn btn-success mx-1">More Details</button>
                    </div>
                </div> 
                 )}
            </div> 
            

            <div className=" m-2 d-flex justify-content-center">
                <button className="btn btn-danger mx-1">Show all</button>
            </div>

            
        </div>

        
    );
    
};

export default SupplierProducts;
