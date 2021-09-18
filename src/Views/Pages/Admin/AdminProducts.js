import React from "react";

import ProductList from "../../../Component/admin-dashboard/product-list";
import ProductHead from "../../../Component/admin-dashboard/product-head";

const AdminProduct = () => {
    return (
        <div>
            <div className="row justify-content-center"><ProductHead/></div>
                <div className="row"><ProductList/></div>
        </div>
    );
};

export default AdminProduct;