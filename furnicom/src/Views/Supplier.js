import SupplierDashboard from "./Pages/Supplier/SupplierDashboard";
import SupplierNotification from "./Pages/Supplier/SupplierNotification";
import SupplierSalesHistory from "./Pages/Supplier/SupplierSalesHistory";
import SupplierSettings from "./Pages/Supplier/SupplierSettings";

import SupplierSidebar from "../Component/supplier-dashboard/SupplierSidebar";
import SupplierProducts from "../Component/supplier-dashboard/SupplierProducts";
import { Route, Switch } from "react-router-dom";


const Supplier = () => {
    return (
        <div className="row">
                <SupplierSidebar />
            <div className="col-9 p-5">
                <Switch>
                    <Route path="/supplier/dashboard">
                        <SupplierDashboard/>
                    </Route>

                    <Route path="/supplier/products">
                        <SupplierProducts/>
                    </Route>

                    <Route path="/supplier/notification">
                        <SupplierNotification/>
                    </Route>

                    <Route path="/supplier/saleshistory">
                        <SupplierSalesHistory/>
                    </Route>
                    
                    <Route path="/supplier/settings">
                        <SupplierSettings/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Supplier;
