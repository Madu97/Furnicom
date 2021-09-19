import React from "react";

import Head from "../../../Component/admin-dashboard/delivery-head";
import Editdeliver from "../../../Component/admin-dashboard/EditDeliver";

const EditDeliver = () => {
    return (
        <div>
            <div className="row justify-content-center"><Head/></div>
                <div className="row"><Editdeliver/></div>
        </div>
    );
};

export default EditDeliver;