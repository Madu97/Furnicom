//import React from "react";
import React, { useState, useEffect } from "react";
//import { FaEye } from "react-icons/fa";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { GoListOrdered } from 'react-icons/go';
import { MdDescription } from 'react-icons/md';
import { CgCalendarDates } from 'react-icons/cg';
//import { AiOutlineBranches } from 'react-icons/ai';
//import { GrDeliver } from 'react-icons/gr';


const RecentDeliveryComponent = (userData) => {
    const userid = userData.userData.id
    const [OrderDeliverydata, setOrderDeliverydata] = useState([])
    const [status, setStatus] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/deliverydata', {
                params: {
                    id: userid
                }
            });

            setOrderDeliverydata(response.data);
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

    function UpdateStatus(status, dperson_id) {

        axios.get('http://localhost:3001/changedeliverystatus', {
            params: {
                dperson_id: dperson_id,
                status: status,
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
                        <th scope="col">Delivery ID</th>
                        <th scope="col">Order ID</th> 
                        <th scope="col">Buyer</th>
                        <th scope="col">Address</th>
                        {/*<th scope="col">Delivered Date</th>*/}
                        <th scope="col">Status</th>
                        <th scope="col">View More</th>

                    </tr>
                </thead>
                {OrderDeliverydata.map((person) =>
                    <tbody>

                        <tr>
                            <th scope="row">{person.deliver_id}</th>
                            <td>{person.order_id}</td>
                            <td>{person.customer_name}</td>
                            <td>{person.address}</td>
                            {/*<td>{person.firstname} {person.lastname}</td>*/}
                            <td>
                            {(person.status === 1) ? (
                            <div>
                               <p>Delivered</p>
                            </div> ): ''}
                            {(person.status === 2) ? (
                            <div>
                               <p>Pending</p>
                            </div> ): ''}
                            {(person.status === 3) ? (
                            <div>
                               <p>Cancelled</p>
                            </div> ): ''}
                            
                            </td>
                            <td className=" align-middle">
                                    <Button onClick={() => toggle(person.id)}>
                                        More Details
                                    </Button>
                            </td>
                        </tr>

                        <tr>
                            {((idd === person.id) && isOpened) && (

                                <td colSpan="5" className="text-left " >
                                    <div className="d-flex fs-12 ">
                                        {/*<img src={person.thumb} width="400px" height="360px" className="m-2 rounded d-flex" alt="img-abc"></img>*/}
                                        <div className="align-items-center m-2 bg-light border rounded p-4 fc-black">
                                            <div className="fs-16">
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><GoListOrdered size={25} /><span>&nbsp;</span>Delivery ID :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.deliver_id}</p>
                                                </div>
                                                {/*<div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><GrDeliver size={25} /><span>&nbsp;</span>Order Description :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.description}</p>
                                                </div>*/}
                                                 <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><FaUser size={25} /><span>&nbsp;</span>Buyer :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.customer_name}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><MdDescription size={25} /><span>&nbsp;</span>Customer Address :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.address}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><CgCalendarDates size={25} /><span>&nbsp;</span>Delivered Date :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.date}</p>
                                                </div>
                                                {/*<div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><AiOutlineBranches size={25} /><span>&nbsp;</span>Status :<span>&nbsp;&nbsp;&nbsp;</span></p>
                                                    <p>{person.timber_type}</p>
                                                </div>*/}
                                                <div className="d-flex align-items-center">
                                                    <p className="d-flex font-weight-bold"><span>&nbsp;</span>Status:<span>&nbsp;&nbsp;&nbsp;</span></p>

                                                    <select className="browser-default custom-select" onChange={e => setStatus(e.target.value)}>
                                                        <option value="1">Delivered</option>
                                                        <option value="2">Pending</option>
                                                        <option value="3">Cancelled</option>
                                                    </select>
                                                </div>
                                                <div class="container my-3 bg-light">
                                                    <div class="col-md-12 text-center">
                                                        <button type="button" class="btn btn-success mx-1" onClick={() => UpdateStatus(status, person.dperson_id)}>Save</button>
                                                    </div>
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

export default RecentDeliveryComponent;

    /*
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <h5 class="bgc-theme p-3">Recent Deliveries</h5>
                        <div class="card-body">
                            <table class="table table-striped text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Order</th>
                                        <th scope="col">Buyer</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Delivered Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>Delivered</td>
                                        <td>
                                            <FaEye />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>Delivered</td>
                                        <td>
                                            <FaEye />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>Delivered</td>
                                        <td>
                                            <FaEye />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentDeliveryComponent;

*/