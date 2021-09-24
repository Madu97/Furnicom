
import AdminSidebar from "../Component/admin-dashboard/AdminSidebar"
import { Route, Switch } from "react-router-dom";
import AdminDashboard from "../Views/Pages/Admin/Admin.Dashboard";
import AdminNotification from "../Views/Pages/Admin/AdminNotification"
import AdminCustomer from "../Views/Pages/Admin/AdminCustomer"
import AdminSupplier from "../Views/Pages/Admin/AdminSupplier"
import AdminDelivery from "../Views/Pages/Admin/AdminDelivery"
import AdminProduct from "../Views/Pages/Admin/AdminProducts"
import AdminOrdersCmp from "../Component/admin-dashboard/AdminOrderComponent" 


import AdddCustomer from "../Views/Pages/Admin/Add-Customer"
import AdddSupplier from "../Views/Pages/Admin/Add-Supplier"
import AdddProduct from "../Views/Pages/Admin/Add-Product"
import AdddDeliver from "../Views/Pages/Admin/Add-Delivery"

import EdittCustomer from "../Views/Pages/Admin/Edit-Customer"
import EditSupplier from "../Views/Pages/Admin/Edit-Supplier"
import EditDeliver from "../Views/Pages/Admin/Edit-deliver"
import EditProduct from "../Views/Pages/Admin/Edit-product"


const Admin = () => {
    return (
        <div className="row">
                <AdminSidebar />
            <div className="col-9 p-5">
                <Switch>
                <Route path="/admin/dashboard">
                        <AdminDashboard/>
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
                    <Route path="/admin/products">
                        <AdminProduct/>
                    </Route>

                    <Route path="/admin/addcustomer">
                        <AdddCustomer/>
                    </Route>
                    <Route path="/admin/addsupplier">
                        <AdddSupplier/>
                    </Route>
                    <Route path="/admin/addproduct">
                        <AdddProduct/>
                    </Route>
                    <Route path="/admin/adddeliver">
                        <AdddDeliver/>
                    </Route>

                    <Route path="/admin/editcustomer/:id">
                        <EdittCustomer/>
                    </Route>
                    <Route path="/admin/editsupplier/:id">
                        <EditSupplier/>
                    </Route>
                    <Route path="/admin/edit/:id">
                        <EditDeliver/>
                    </Route>
                    <Route path="/admin/editproduct/:id">
                        <EditProduct/>
                    </Route>

                    <Route path="/admin/orders">
                        <AdminOrdersCmp/>
                    </Route>

                </Switch>
            </div>
        </div>
    );
};

export default Admin;
