import React from "react";
import SupplierSalesHistoryComponent from "../../../Component/supplier-dashboard/SupplierSalesHistoryComponent";
import CustomizedOrderHistory from "../../../Component/supplier-dashboard/customizedOrderHistory";


const SupplierSalesHistory = (userData) => {
        const data = userData.userData;
    return (
        <div>
            <div className="row">
                   <SupplierSalesHistoryComponent userData={data}/>

            </div>
            <br></br>
            <div className="row">
                   <CustomizedOrderHistory userData={data}/>

            </div>
        </div>
    );
};

export default SupplierSalesHistory;
