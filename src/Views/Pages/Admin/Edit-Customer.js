import React from "react";

import CustomerHead from "../../../Component/admin-dashboard/customer-head";
import EditCustomer from "../../../Component/admin-dashboard/EditCustomer";

const EdittCustomer = () => {
    return (
        <div>
            <div className="row justify-content-center"><CustomerHead/></div>
                <div className="row"><EditCustomer/></div>
        </div>
    );
};

export default EdittCustomer;