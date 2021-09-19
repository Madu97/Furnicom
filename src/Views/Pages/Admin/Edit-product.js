import React from "react";

import Head from "../../../Component/admin-dashboard/product-head";
import Editproduct from "../../../Component/admin-dashboard/EditProducts";

const EditProduct = () => {
    return (
        <div>
            <div className="row justify-content-center"><Head/></div>
                <div className="row"><Editproduct/></div>
        </div>
    );
};

export default EditProduct;