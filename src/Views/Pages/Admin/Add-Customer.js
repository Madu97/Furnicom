import React from "react";

import CustomerHead from "../../../Component/admin-dashboard/customer-head";
import AddCustomer from "../../../Component/admin-dashboard/AddCustomer";


const AdddCustomer = () => {
    return (
        <div>
            <div className="row justify-content-center"><CustomerHead/></div>
                <div className="row"><AddCustomer/></div>
        </div>
    );
};

export default AdddCustomer;