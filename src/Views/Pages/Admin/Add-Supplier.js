import React from "react";

import SupplierHead from "../../../Component/admin-dashboard/supplier-head";
import AddSuppliers from "../../../Component/admin-dashboard/AddSupplier";

const AdddSupplier = () => {
    return (
        <div>
            <div className="row justify-content-center"><SupplierHead/></div>
                <div className="row"><AddSuppliers/></div>
        </div>
    );
};

export default AdddSupplier;