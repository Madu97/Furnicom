import React from "react";

import SupplierList from "../../../Component/admin-dashboard/supplier-list";
import SupplierHead from "../../../Component/admin-dashboard/supplier-head";

const AdminSupplier = () => {
    return (
        <div>
            <div className="row justify-content-center"><SupplierHead/></div>
                <div className="row"><SupplierList/></div>
        </div>
    );
};

export default AdminSupplier;
