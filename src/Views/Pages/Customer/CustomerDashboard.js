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

<<<<<<< HEAD

            <div className="row border-w">
=======
            <div className="row">
>>>>>>> db0a97c3a19db93eadbf12b0e6259a8168e6da58
                <div className="col">
                <OrderStatusComponent/>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col bgc-theme">
                <CustomerNewArrival/>
                </div>
                <div className="col ">
                <CustomerReviewTab/>
                </div>
            </div>
        </div>
    );
};

export default CustomerDashboard;
