import React from "react";

import SupplierStatusBar from "../../../Component/supplier-dashboard/SupplierStatusBar";
import SupplierRecentSales from "../../../Component/supplier-dashboard/SupplierRecentSales";
import SupplierReviewTab from "../../../Component/supplier-dashboard/SupplierReviewTab";
import SupplierProducts from "../../../Component/supplier-dashboard/SupplierProducts";
import Data from "../../../Component/supplier-dashboard/SupplierRecentSales";




const SupplierDashboard = () => {
    return (
        <div>
            <div className="row">
                <SupplierStatusBar/>
            </div>
            <br></br>
            <div className="row">
                <SupplierRecentSales/>
            </div>

            {/* <div className="row">
                <div className="col bg-theme-pale">
                    <SupplierReviewTab/>
                </div>
                <div className="col">
                    <SupplierProducts/>
                </div>
            </div> */}
        </div>
    );
};

export default SupplierDashboard;
