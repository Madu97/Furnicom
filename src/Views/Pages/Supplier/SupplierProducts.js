import React from "react";
import SupplierProducts from "../../../Component/supplier-dashboard/SupplierProducts";



const SupplierProducts = (userData) => {
    const data = userData.userData;
    return (
        <div>
            <div className="row bg-danger">
                <SupplierProducts userData={data}/>
            </div>


        </div>
    );
};

export default SupplierProducts;
