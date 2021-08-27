//import React from "react";
import React, { useState, useEffect } from "react";
//import { FaEye } from "react-icons/fa";
import axios from 'axios';

const DeliveryNotificationComponent = (userData) => {
    const userid = userData.userData.id
    const [DeliveryNotifydata, setDeliveryNotifydata] = useState([])

     useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/getDeliverynotify', {
                params: {
                    id: userid
                }
            });

            setDeliveryNotifydata(response.data);
        };
        fetchData();
     }, [userid]);
    
    
    return (
        <div className="col-12 d-block bg-theme-pale">
            <div className="container-fluid p-1 ">
                <div className="row justify-content-center mb-5">
                    <h2 className="">Notifications</h2>

                </div>
                <div>
                    <div className="m-2">
                        <h3>Recent</h3>
                    </div>
                    
                    <div className="row d-block m-2 justify-content-between fc-white">
                    {DeliveryNotifydata.map((person) =>
                        <div className="col-lg-8 bg-order-his-color fc-white  d-flex justify-content-between align-items-center rounded">

                            <div className=" d-flex align-items-center ">
                                <i class="fa fa-spinner m-2 p-2  fa-2x mr-4 bg-warning fc-white rounded-circle" ></i>{person.Title}
                    </div>

                            <div className=" d-flex align-items-center  ">
                                <div className="mr-3 fc-grey">
                                {person.Time}
                        </div>
                                <button className="btn btn-info"> View</button>
                            </div>

                        </div>
                         )}
                    </div>
                   
              </div>

            </div>

        </div>
    );
                    };
                
export default DeliveryNotificationComponent;

    
    /*
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <h5 class="bgc-theme p-3">Notifications</h5>
                        <div class="card-body">
                            <table class="table table-striped text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Order</th>
                                        <th scope="col">Buyer</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Delivered Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>
                                            <div>
                                                <button className="btn btn-success mx-1">
                                                    Accept
                                                </button>
                                                <button className="btn btn-danger mx-1">
                                                    Decline
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>
                                            <div>
                                                <button className="btn btn-success mx-1">
                                                    Accept
                                                </button>
                                                <button className="btn btn-danger mx-1">
                                                    Decline
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Chair</td>
                                        <td>Mark</td>
                                        <td>California</td>
                                        <td>01/01/2021</td>
                                        <td>
                                            <div>
                                                <button className="btn btn-success mx-1">
                                                    Accept
                                                </button>
                                                <button className="btn btn-danger mx-1">
                                                    Decline
                                                </button>
                                            </div>
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

export default DeliveryNotificationComponent;
*/
