import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import axios from 'axios';
import { AiOutlineTag } from 'react-icons/ai';
import { AiOutlineBranches } from 'react-icons/ai';
import { M } from 'react-icons/md';
import { MdDescription } from 'react-icons/md';
import { MdGrade } from 'react-icons/md';
import { GiCash } from 'react-icons/gi';



const SupplierRecentSales = (userData) => {
    const userid = userData.userData.id
    const [Salesdata, setSalesdata] = useState([])
    const [status, setStatus] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/customizedorder', {
                params: {
                    id: userid
                }
            });

            setSalesdata(response.data);
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

    function UpdateStatus(status_code, supplier_id, order_id) {

        axios.get('http://localhost:3001/changeorderstatus', {
            params: {
                sid: supplier_id,
                status: status_code,
                oid: order_id,
            }
        }).then((response) => {
            window.location.reload();
        })
    }
    return (
        <div className="col-12  d-block pl-1 pr-1 ">
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">Order No</th>
                        <th scope="col">Item</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                {Salesdata.map((person) =>
                    <tbody>

                        <tr>
                            <th scope="row">{person.order_id}</th>
                            <td>{person.name}</td>
                            <td>{person.firstname} {person.lastname}</td>
                            <td>
                                {(person.status_code == 1) ? (
                                    <div>
                                        <p>Preparing</p>
                                    </div>) : ''}
                                {(person.status_code == 2) ? (
                                    <div>
                                        <p>Hand over to the company</p>
                                    </div>) : ''}
                                {(person.status_code == 3) ? (
                                    <div>
                                        <p>Order Dispatched</p>
                                    </div>) : ''}
                                {(person.status_code == 4) ? (
                                    <div>
                                        <p>On the way</p>
                                    </div>) : ''}
                                {(person.status_code == 5) ? (
                                    <div>
                                        <p>Delivered</p>
                                    </div>) : ''}

                            </td>
                            <td className=" align-middle">
                                <Button onClick={() => toggle(person.id)}>
                                    More Details
                                </Button>
                            </td>
                        </tr>

                        <tr>
                            {((idd == person.id) && isOpened) && (

                                <td colSpan="5" className="text-left " >
                                    <div className="d-flex fs-12 ">
                                        <img src={person.thumb} width="400px" height="360px" className="m-2 rounded d-flex"></img>
                                        <div className="align-items-center m-2 bg-light border rounded p-4 fc-black">
                                            <div className="fs-16">
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><AiOutlineTag size={25} /><span>&nbsp;</span>Product Name :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.name}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><MdDescription size={25} /><span>&nbsp;</span>Customer Address :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.address}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><GiCash size={25} /><span>&nbsp;</span>Features :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.features}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><AiOutlineBranches size={25} /><span>&nbsp;</span>Timber Type :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.timber_type}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><MdGrade size={25} /><span>&nbsp;</span>Timber Quality :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.timber_quality}</p>
                                                </div>

                                                {(person.status_code < 2) ? (
                                                    <div className="d-flex align-items-center">
                                                        <p className="d-flex font-weight-bold"><span>&nbsp;</span>Status:<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                        <select className="browser-default custom-select" onChange={e => setStatus(e.target.value)}>
                                                            <option></option>
                                                            <option value="1">Preparing</option>
                                                            <option value="2">Hand over to the company</option>
                                                        </select>
                                                    </div>
                                                ) : ''}
                                                {(person.status_code < 2) ? (
                                                    <div class="container my-3 bg-light">
                                                        <div class="col-md-12 text-center">
                                                            <button type="button" class="btn btn-success mx-1" onClick={() => UpdateStatus(status, person.supplier_id, person.order_id)}>Save</button>
                                                        </div>
                                                    </div>
                                                ) : ''}
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

export default SupplierRecentSales;