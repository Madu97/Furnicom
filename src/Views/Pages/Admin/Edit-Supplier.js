import React from "react";

import Head from "../../../Component/admin-dashboard/supplier-head";
import Editsupplier from "../../../Component/admin-dashboard/EditSupplier";

const EditSupplier = () => {
    return (
        <div>
            <div className="row justify-content-center"><Head/></div>
                <div className="row"><Editsupplier/></div>
        </div>
    );
};

export default EditSupplier;