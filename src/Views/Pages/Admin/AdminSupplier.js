import React from "react";

import SupplierList from "../../../Component/admin-dashboard/supplier-list";
import SupplierHead from "../../../Component/admin-dashboard/supplier-head";
import AddSupplier from "../../../Component/admin-dashboard/add-suppliers";





const AdminSupplier = () => {
    return (
        <div>
            <div className="row justify-content-center"><SupplierHead/></div>
                <div className="row"><SupplierList/></div>
                <div className="row"><AddSupplier/></div>

            

        </div>
    );
};

export default AdminSupplier;
