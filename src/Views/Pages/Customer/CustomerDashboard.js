import React from "react";

import CustomerRecentOrdersComponent from "../../../Component/customer-dashboard/CustomerRecentOrders";
import OrderStatusComponent from "../../../Component/customer-dashboard/OrderStatusComponent";
import CustomerNewArrival from "../../../Component/customer-dashboard/CustomerNewArrivals";
import CustomerReviewTab from "../../../Component/customer-dashboard/CustomerReviewTab";

const CustomerDashboard = () => {
    return (
        <div>
            <div className="row">
                <div className="col">
                   <CustomerRecentOrdersComponent/>
                </div>
            </div>

            <div className="row">
                <div className="col">
                <OrderStatusComponent/>
                </div>
            </div>

            <div className="row">
                <CustomerNewArrival/>
                </div>

            <div className="row d-flex justify-content-start border mt-2">
                <div className="col-6 mt-3 ">
                <CustomerReviewTab/>
                </div>
            </div>
        </div>
    );
};

export default CustomerDashboard;
