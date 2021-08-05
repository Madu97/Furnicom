import DeliveryDashboard from "./Pages/Delivery/DeliveryDashboard";
import DeliveryNotification from "./Pages/Delivery/DeliveryNotification";
import DeliveryHitory from "./Pages/Delivery/DeliveryHistory";
import Sidebar from "../Component/delivery-dashboard/Sidebar";
import DeliverySettings from "../Component/delivery-dashboard/DeliverySettingsComponent"

import { Route, Switch } from "react-router-dom";

const Delivery = () => {
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

export default Delivery;
