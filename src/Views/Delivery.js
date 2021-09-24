import DeliveryDashboard from "./Pages/Delivery/DeliveryDashboard";
import DeliveryNotification from "./Pages/Delivery/DeliveryNotification";
//import DeliveryHistory from "./Pages/Delivery/DeliveryHistory";
import DeliverySettings from "./Pages/Delivery/DeliverySettings";
import Sidebar from "../Component/delivery-dashboard/Sidebar";
//import DeliverySettings from "../Component/delivery-dashboard/DeliverySettingsComponent";
import DeliveryStatus from "../Component/delivery-dashboard/DeliveryStatusComponent";
import RecentDelivery from "../Component/delivery-dashboard/RecentDeliveryComponent";
import DeliveryHistory from "../Component/delivery-dashboard/DeliveryHistoryComponent";
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Login from "./Pages/Login/Login";
import { useParams, Route, Switch } from "react-router-dom";




const Delivery = () => {
    const[LoginSt, setLoginSt] = useState();
    const[Name , setName] = useState();
    //const[User , setUser] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            
            const response = await Axios.get("http://localhost:3001/login");

            //console.log(response.data.user[0].username);


            //setUser(response1.data[0]);
            //console.log(response1.data[0]);

            if (response.data.loggedIn) {

                const nm = response.data.user[0].username;

                const response1 = await Axios.get('http://localhost:3001/getdelivery', {
                    params: {
                        name: nm
                    }
                });
                
                setName(response.data.user)

                const element = (

                    <div className="row">
                    <Sidebar userData={response1.data[0]} />
                        <div className="col-9 p-5">
                            <Switch>
                                <Route path="/delivery/dashboard">
                                    <DeliveryDashboard userData={response1.data[0]}/>
                                </Route>
                                <Route path="/delivery/notifications">
                                    <DeliveryNotification userData={response1.data[0]}/>
                                </Route>
                                <Route path="/delivery/history">
                                    <DeliveryHistory userData={response1.data[0]} />
                                </Route>
                                <Route path="/delivery/settings">
                                    <DeliverySettings userData={response1.data[0]} />
                                </Route>
                                <Route path="/delivery/status">
                                    <DeliveryStatus userData={response1.data[0]} />
                                </Route>
                                <Route path="/delivery/recentdelivery">
                                    <RecentDelivery userData={response1.data[0]}/>
                                </Route>
                            </Switch>
                        </div>
                        </div>
                );

                setLoginSt(element);
            }
            else{
                const element = (<Login/>);
                setLoginSt(element);
            }

        };
        fetchData();
    },[id]);

    return (
        <div className="">

                {LoginSt}
            
        </div>
    );
};

export default Delivery;



/*

    return (
        <div className="row">
                <Sidebar />
            <div className="col-9 p-5">
                <Switch>
                    <Route path="/delivery/dashboard">
                        <DeliveryDashboard />
                    </Route>
                    <Route path="/delivery/notifications">
                        <DeliveryNotification />
                    </Route>
                    <Route path="/delivery/history">
                        <DeliveryHitory />
                    </Route>
                    <Route path="/delivery/settings">
                        <DeliverySettings />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};


*/