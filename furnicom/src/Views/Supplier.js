import SupplierDashboard from "./Pages/Supplier/SupplierDashboard";
// import SupplierNotification from "./Pages/Supplier/SupplierNotification";
import SupplierSalesHistory from "./Pages/Supplier/SupplierSalesHistory";
import SupplierSettings from "./Pages/Supplier/SupplierSettings";

import SupplierSidebar from "../Component/supplier-dashboard/SupplierSidebar";
import SupplierNotification from "../Component/supplier-dashboard/SupplierNotificationComponent";
import SupplierProducts from "../Component/supplier-dashboard/SupplierProducts";
import { Route, Switch } from "react-router-dom";

import Axios from 'axios';
import React, { Component, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Login from "./Pages/Login/Login";


const Supplier = () => {
    const[LoginSt, setLoginSt] = useState();
    const[Name , setName] = useState();
    const[User , setUser] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            
            const response = await Axios.get("http://localhost:3001/login");

            //console.log(response.data.user[0].username);


            //setUser(response1.data[0]);
            //console.log(response1.data[0]);

            if (response.data.loggedIn) {

                const nm = response.data.user[0].username;

                const response1 = await Axios.get('http://localhost:3001/getsupplier', {
                    params: {
                        name: nm
                    }
                });
                
                setName(response.data.user)

    const element = (
        <div className="row">
                <SupplierSidebar userData={response.data.user} />
            <div className="col-9 p-5">
                <Switch>
                    <Route path="/supplier/dashboard">
                        <SupplierDashboard/>
                    </Route>

                    <Route path="/supplier/products">
                        <SupplierProducts userData={response1.data[0]}/>
                    </Route>

                    {/* <Route path="/supplier/notification">
                        <SupplierNotification userData={response1.data[0]}/>
                    </Route> */}

                    <Route path="/supplier/saleshistory">
                        <SupplierSalesHistory userData={response1.data[0]}/>
                    </Route>
                    
                    <Route path="/supplier/settings">
                        <SupplierSettings userData={response1.data[0]}/>
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

export default Supplier;
