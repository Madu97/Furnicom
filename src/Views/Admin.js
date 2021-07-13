
import AdminSidebar from "../Component/admin-dashboard/AdminSidebar"
import { Route, Switch } from "react-router-dom";
import AdminDashboard from "../Views/Pages/Admin/Admin.Dashboard";
import AdminNotification from "../Views/Pages/Admin/AdminNotification"
import AdminCustomer from "../Views/Pages/Admin/AdminCustomer"
import AdminSupplier from "../Views/Pages/Admin/AdminSupplier"
import AdminDelivery from "../Views/Pages/Admin/AdminDelivery"
import AdminSettings from "../Views/Pages/Admin/AdminSettings"





const Admin = () => {
    return (
        <div className="row">
                <AdminSidebar />
            <div className="col-9 p-5">
                <Switch>
                <Route path="/admin/dashboard">
                        <AdminDashboard/>
                    </Route>
                    <Route path="/admin/notification">
                        <AdminNotification/>
                    </Route>
                    <Route path="/admin/customerlist">
                        <AdminCustomer/>
                    </Route>
                    <Route path="/admin/supplierlist">
                        <AdminSupplier/>
                    </Route>
                    <Route path="/admin/deliverymanlist">
                        <AdminDelivery/>
                    </Route>
                    <Route path="/admin/settings">
                        <AdminSettings/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Admin;
