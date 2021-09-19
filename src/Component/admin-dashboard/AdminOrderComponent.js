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

import { FaUserTie } from 'react-icons/fa';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { MdDescription } from 'react-icons/md';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { GiCash } from 'react-icons/gi';
import { FaCreditCard } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { RiTimeFill } from 'react-icons/ri';



const stylenone = { color: "grey", margin: "2px" }
const stylegold = { color: "gold", margin: "2px" }

const bordertype = { borderTop: '2px ridge ' }
const bnone = { borderTop: 'none' }

const AdminOrderComponent = () => {

    const [Orderdata, setOrderdata] = useState([])
    const [Deliveryperson, setDeliveryperson] = useState([])
    const [CustomizedOrder, setCustomizedOrder] = useState([])

    const [isOpened, setIsOpened] = useState(false);
    const [isOpened1, setIsOpened1] = useState(false);
    const [isOpened3, setIsOpened3] = useState(false);
    const [idd, setIdd] = useState();
    const [idd3, setIdd3] = useState();
    const [mid, setmid] = useState();

    const [deliperson, setdeliperson] = useState();
    const [Suppliers, setSuppliers] = useState();

    const [supp, setsupp] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/allorders');

            setOrderdata(response.data);
        };

        const fetchData1 = async () => {
            const response1 = await axios.get('http://localhost:3001/getavailabledelivery');

            setDeliveryperson(response1.data);
        };

        const fetchData2 = async () => {
            const response2 = await axios.get('http://localhost:3001/getcustumizedorders');

            setCustomizedOrder(response2.data);
        };

        const fetchData3 = async () => {
            const response3 = await axios.get('http://localhost:3001/getallsuppliers');

            setSuppliers(response3.data);
        };

        fetchData();
        fetchData1();
        fetchData2();
        fetchData3();
    }, []);

    console.log(Orderdata)

    function toggle(id) {
        setIsOpened(wasOpened => !wasOpened);
        setIdd(id);

    }

    function toggle1(id) {
        setIsOpened1(wwasOpened => !wwasOpened);
        setmid(id);

    }

    function toggle3(id) {
        setIsOpened3(wwasOpened3 => !wwasOpened3);
        setIdd3(id);

    }

    function assigndperson(dperson_id, order_id) {
        axios
            .get("http://localhost:3001/assigndeliveryperson", {
                params: {
                    d_id: dperson_id,
                    o_id: order_id
                },
            })
            .then((response) => {
                window.location.reload();
            });
    }

    function assignsupplier(supplier_id, order_id) {
        axios
            .get("http://localhost:3001/assignsupplier", {
                params: {
                    s_id: supplier_id,
                    o_id: order_id
                },
            })
            .then((response) => {
                window.location.reload();
            });
    }

    let selectedperson = React.createRef();

    let abc;
    return (
        <div className="">

            <table class="col-12 text-center align-items-center table-responsive ">
                <thead className="text-center align-items-center ml-5 pl-5" style={{ fontSize: '20px' }}>
                    <tr className="bg-dark fc-white ">
                        <th className=" align-middle ml-3 pl-3" scope="col">Order No</th>
                        <th className=" align-middle ml-3 pl-3" scope="col">Order ID</th>
                        <th className=" align-middle ml-3 pl-3" scope="col">Name</th>
                        <th className=" align-middle ml-3 pl-3" scope="col">Supplier ID</th>
                        <th className=" align-middle ml-3 pl-3" scope="col">Customer ID</th>
                        <th className=" align-middle ml-3 pl-3" scope="col">Status</th>
                        <th className=" align-middle ml-3 pl-3" scope="col">View</th>
                        <th className=" align-middle ml-3 pl-3" scope="col">Delivery Person</th>
                    </tr>
                </thead>

                {Orderdata.map((person, index) =>
                    <tbody className="align-items-center">
                        <tr style={(abc == person.o_id) ? (bnone) : (bordertype)} >
                            <th className="pt-4 pb-4" scope="row" className="align-middle">{(abc == person.o_id) ? ('') : (index + 1)}</th>
                            <td className="align-middle pt-4 pb-4">{person.o_id}</td>
                            <td style={{}} className="pt-4 pb-4">
                                <div className="d-flex justify-content-start align-items-center">
                                    <img src={person.thumb} width="100px" height="100px" className="m-2 rounded"></img>
                                    <p className="fc-blue">{person.name}</p>
                                </div>
                            </td>
                            <td className=" align-middle pt-4 pb-4"> {person.supplier_id}</td>
                            <td className=" align-middle pt-4 pb-4"> {person.customer_id}</td>
                            <td className=" align-middle p-3 pt-4 pb-4"  > <div className="fs-20 font-weight-bold">{person.status}</div></td>
                            <td className=" align-middle pt-4 pb-4"  > <button onClick={() => toggle1(person.order_id)} className="btn btn-primary btn-sm"> More Details</button></td>
                            <td className="pt-4 pb-4 " style={((idd == person.order_id) && isOpened) ? ({ display: 'none' }) : ({ display: '' })}> {(person.delivery_person_id) ? (<p style={{ marginTop: '42px' }}>{person.delivery_person_id}</p>) : ((abc == person.o_id) ? ('') : (<button style={{ marginTop: '2px' }} onClick={() => toggle(person.order_id)} className="btn btn-primary fc-white font-weight-bold"> Assign</button>))} </td>
                            {((idd == person.order_id) && isOpened) && (
                                <td className=" align-middle">
                                    <div className=" d-flex align-items-center">
                                        <select className=" custom-select mr-2" onChange={(e) => setdeliperson(e.target.value)}>
                                            <option></option>
                                            {Deliveryperson.map((dperson, index) => <option value={dperson.id} >{dperson.username}</option>)}
                                        </select>
                                        <button className="btn btn-primary btn-sm" onClick={() => assigndperson(deliperson, person.o_id)}>Confirm</button>
                                    </div>
                                </td>
                            )}

                        </tr>
                        <p className="d-none">{abc = person.o_id}</p>
                        <tr>
                            {((mid == person.order_id) && isOpened1) && (
                                <td colSpan="8" className="text-left  " >
                                    <div className="d-flex fs-16 ">
                                        <img src={person.thumb} width="600px" height="500px" className="m-2 rounded d-flex"></img>
                                        <div className=" d-flex align-items-center m-2 bg-light border rounded p-5 fc-blue">
                                            <div className="m-2 fs-20">
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><FaUserTie size={22} /><span>&nbsp;</span>Supplier ID :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.supplier_id}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><AiOutlineFieldNumber size={25} /><span>&nbsp;</span>Order ID :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.order_id}</p>{console.log(person.date)}
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><MdDescription size={25} /><span>&nbsp;</span>Description :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.description}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><RiShoppingBag3Fill size={25} /><span>&nbsp;</span>Quantity :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.quantity}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><GiCash size={25} /><span>&nbsp;</span>Price :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>Rs.{person.price}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><FaCreditCard size={22} /><span>&nbsp;</span>Card Method :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.ship_method}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><MdDateRange size={25} /><span>&nbsp;</span>Date :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.date.substring(0, 10)}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><RiTimeFill size={25} /><span>&nbsp;</span>Time :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.date.substring(11, 22)}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><GrStar size={25} /><span>&nbsp;</span>Rating :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>
                                                        <GrStar size={30} style={(person.total_ratings / person.total_people_rated) > 0 ? (stylegold) : stylenone} />
                                                        <GrStar size={30} style={(person.total_ratings / person.total_people_rated) - 1 > 0 ? (stylegold) : stylenone} />
                                                        <GrStar size={30} style={(person.total_ratings / person.total_people_rated) - 2 > 0 ? (stylegold) : stylenone} />
                                                        <GrStar size={30} style={(person.total_ratings / person.total_people_rated) - 3 > 0 ? (stylegold) : stylenone} />
                                                        <GrStar size={30} style={(person.total_ratings / person.total_people_rated) - 4 > 0 ? (stylegold) : stylenone} />
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

            <div>
                <div className="d-flex justify-content-center mt-5 pt-5">
                    <h2>Customized Orders</h2>
                </div>

                <div>
                    <table class="table text-center align-items-center ">
                        <thead className="fs-30 text-center align-items-center">
                            <tr className="bg-dark fc-white">
                                <th scope="col">Order ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">CustomerID</th>
                                <th scope="col">Timber Type</th>
                                <th scope="col">Timber Quality</th>
                                <th scope="col">Image</th>
                                <th scope="col">Supplier</th>
                            </tr>
                        </thead>

                        {CustomizedOrder.map((data, index) =>
                            <tbody className="align-items-center">
                                <tr>
                                    <td className=" align-middle">{data.order_id}</td>
                                    <td style={{}}  className=" align-middle">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <p className="fs-15 fc-blue">{data.name}</p>
                                        </div>
                                    </td>
                                    <td className=" align-middle">{data.customer_id}</td>
                                    <td className=" align-middle">{data.timber_type}</td>
                                    <td className=" align-middle">{data.timber_quality}</td>
                                    <td className="align-middle"><a href={require('../../Assets/Images/'+ data.thumb).default} download="myimage"><img src={require('../../Assets/Images/'+ data.thumb).default} style={{height:50,width:50}} /></a></td>
                                    <td className="pt-4 pb-4 "> {(data.status_code == 'Accepted') ? (<p style={{ marginTop: '42px' }}>{data.supplier_id}</p>) : (<button style={{ marginTop: '2px' }} onClick={() => assignsupplier('a',data.order_id)} className="btn btn-primary fc-white font-weight-bold"> Assign</button>)} </td>

                                </tr>
                                <tr>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminOrderComponent;


/*

                                    {((idd3 == data.order_id) && isOpened3) && (
                                        <td className=" align-middle">
                                            <div className=" d-flex align-items-center">
                                                <select className=" custom-select mr-2" onChange={(e) => setsupp(e.target.value)}>
                                                    <option></option>
                                                    {Suppliers.map((dperson, index) => <option value={dperson.id} >{dperson.username}-{dperson.id}</option>)}
                                                </select>
                                                <button className="btn btn-primary btn-sm" onClick={() => assignsupplier(supp, data.order_id)} >Confirm</button>
                                            </div>
                                        </td>
                                    )}

*/