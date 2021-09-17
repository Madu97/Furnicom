import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useParams } from "react-router-dom";
import axios from 'axios';
import { AiOutlineTag } from 'react-icons/ai';
import { AiOutlineBranches } from 'react-icons/ai';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { MdDescription } from 'react-icons/md';
import { MdGrade } from 'react-icons/md';
import { GiCash } from 'react-icons/gi';
import { GrStar } from 'react-icons/gr'

const stylenone = { color: "grey", margin: "2px" }
const stylegold = { color: "gold", margin: "2px" }


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

    const [isOpened, setIsOpened] = useState(false);
    const [idd, setIdd] = useState();

    function toggle(id) {
        setIsOpened(wasOpened => !wasOpened);
        //kk = id;
        setIdd(id);

    }

    return (

        <div className="col-12  d-block pl-1 pr-1 ">
            <table className="table table-striped text-center">

                {Productdata.map((person) =>
                    <tbody>
                        <tr>
                            <td className=" align-middle"> <img src={person.thumb} width="100px" height="100px" className="m-2 rounded"></img></td>
                            <td >{person.name}</td>
                            <td><button onClick={() => toggle(person.id)} className="btn btn-success mx-1">More Details</button></td>
                        </tr>

                        <tr className="bg-theme-pale" >
                            {((idd == person.id) && isOpened) && (

                                <td colSpan="4" className="text-left " >
                                    <div className="d-flex fs-12 ">
                                        <img src={person.thumb} width="300px" height="300px" className="m-2 rounded d-flex"></img>
                                        <div className="align-items-center m-2 bg-light border rounded p-4 fc-blue">
                                            <div className="fs-16">
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><AiOutlineFieldNumber size={25} /><span>&nbsp;</span>Product ID :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.id}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><AiOutlineTag size={25} /><span>&nbsp;</span>Available Quantity :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.available_quantity}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><MdDescription size={25} /><span>&nbsp;</span>Description :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.description}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><GiCash size={25} /><span>&nbsp;</span>Timber Quality :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.timber_quality}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><AiOutlineBranches size={25} /><span>&nbsp;</span>Timber Type :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.timber_type}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><MdGrade size={25} /><span>&nbsp;</span>Rating :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>
                                                        <GrStar size={25} style={(person.total_ratings / person.total_people_rated) > 0 ? (stylegold) : stylenone} />
                                                        <GrStar size={25} style={(person.total_ratings / person.total_people_rated) - 1 > 0 ? (stylegold) : stylenone} />
                                                        <GrStar size={25} style={(person.total_ratings / person.total_people_rated) - 2 > 0 ? (stylegold) : stylenone} />
                                                        <GrStar size={25} style={(person.total_ratings / person.total_people_rated) - 3 > 0 ? (stylegold) : stylenone} />
                                                        <GrStar size={25} style={(person.total_ratings / person.total_people_rated) - 4 > 0 ? (stylegold) : stylenone} />
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </td>


                            )}
                        </tr>

                    </tbody>
                )}
            </table>
        </div>

    );
};

export default SupplierProducts;
