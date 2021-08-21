import axios from 'axios';
import React, { Component, useState, useEffect } from 'react'
import { CartProvider, useCart } from "react-use-cart"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import product_card from "../../../Data/Product_data"
import { TiShoppingCart } from 'react-icons/ti';
import NewArrivalhead from './NewArrivalhead';

import { GrStar } from 'react-icons/gr'
const stylenone = { color: "grey", margin: "2px" }
const stylegold = { color: "gold", margin: "2px" }

export default function NewArrival() {

    const [persons, setpersons] = useState([]);
    const { addItem } = useCart();

    useEffect(() => {

        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/getproducts');

            setpersons(response.data);

        };
        fetchData();
    }, []);


    return (
        <div className="container-fluid text-center ">
            <div className="row  pl-5 ml-5 justify-content-start align-items-center   flex-row">
                {persons.map(person =>
                    <div className="col-lg-2 col-md-4 col-sm-8 col-xs-12 m-5 justify-content-around align-items-center border rounded" key={person.id}>
                        <div className="d-flex pt-3 justify-content-center">
                            <img src={person.thumb} className="imgstyle img-thumbnail" />
                        </div>
                        <hr></hr>
                        <div className="">
                            <p className="d-flex justify-content-center fs-22 font-weight-bold">{person.name}</p>
                            <p className="d-flex justify-content-center">{person.description}</p>
                            <p className="price d-flex justify-content-center"><span>Rs.</span>{person.price}</p>
                            <p>
                                <GrStar size={25} style={(person.total_ratings / person.total_people_rated) > 0 ? (stylegold) : stylenone} />
                                <GrStar size={25} style={(person.total_ratings / person.total_people_rated) - 1 > 0 ? (stylegold) : stylenone} />
                                <GrStar size={25} style={(person.total_ratings / person.total_people_rated) - 2 > 0 ? (stylegold) : stylenone} />
                                <GrStar size={25} style={(person.total_ratings / person.total_people_rated) - 3 > 0 ? (stylegold) : stylenone} />
                                <GrStar size={25} style={(person.total_ratings / person.total_people_rated) - 4 > 0 ? (stylegold) : stylenone} />
                            </p>
                            <Link to={location => `/product/${person.id}`}><div /*onClick = {() =>addItem(person)}*/ className="row font-weight-bold d-flex btn btn-warning justify-content-center align-items-center">
                                BUY NOW

                                    </div></Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}

//export default NewArrival;
/*                                        <div className="pl-2">
                                            <TiShoppingCart size={30} />
                                        </div>*/
/* <div className="fs-30 ml-5 font-weight-bold align-items-center">
 {(person.total_ratings / person.total_people_rated)}
</div>*/