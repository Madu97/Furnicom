import CustomerDashboard from "./Pages/Customer/CustomerDashboard";
import CustomerNotification from "./Pages/Customer/CustomerNotification";
import CustomerSidebar from "../Component/customer-dashboard/CustomerSidebar";

import { Route, Switch } from "react-router-dom";
import CustomerOrderHistory from "./Pages/Customer/CustomerOrderHistory";
import CustomerSettings from "./Pages/Customer/CustomerSettings";

const Customer = () => {
    return (
        <div className="row">
                <CustomerSidebar />
            <div className="col-9 p-5">
                <Switch>
                    <Route path="/customer/dashboard">
                        <CustomerDashboard/>
                    </Route>
                    <Route path="/customer/notification">
                        <CustomerNotification/>
                    </Route>
                    <Route path="/customer/orderhistory">
                        <CustomerOrderHistory/>
                    </Route>
                    <Route path="/customer/settings">
                        <CustomerSettings/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Customer;
