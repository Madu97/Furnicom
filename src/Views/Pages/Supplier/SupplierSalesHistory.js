import React from "react";
import SupplierSalesHistoryComponent from "../../../Component/supplier-dashboard/SupplierSalesHistoryComponent";


const SupplierSalesHistory = (userData) => {
        const data = userData.userData;
    return (
        <div>
            <div className="row">
                   <SupplierSalesHistoryComponent userData={data}/>

            </div>
        </div>
    );
};

export default SupplierSalesHistory;
