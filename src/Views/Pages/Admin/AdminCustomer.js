import React from "react";

import CustomerList from "../../../Component/admin-dashboard/customer-list";
import CustomerHead from "../../../Component/admin-dashboard/customer-head";
import AddCustomer from "../../../Component/admin-dashboard/add-customers";





const AdminCustomer = () => {
    return (
        <div>
            <div className="row justify-content-center"><CustomerHead/></div>
                <div className="row"><CustomerList/></div>
                <div className="row"><AddCustomer/></div>

            

        </div>
    );
};

export default AdminCustomer;
