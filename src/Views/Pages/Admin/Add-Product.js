import React from "react";

import ProductHead from "../../../Component/admin-dashboard/product-head";
import AddProducts from "../../../Component/admin-dashboard/AddProduct";

const AdddProduct = () => {
    return (
        <div>
            <div className="row justify-content-center"><ProductHead/></div>
                <div className="row"><AddProducts/></div>
        </div>
    );
};

export default AdddProduct;