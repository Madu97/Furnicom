import React from "react";

import CustomerRecentOrdersComponent from "../../../Component/customer-dashboard/CustomerRecentOrders";
import OrderStatusComponent from "../../../Component/customer-dashboard/OrderStatusComponent";
import CustomerNewArrival from "../../../Component/customer-dashboard/CustomerNewArrivals";
import CustomerReviewTab from "../../../Component/customer-dashboard/CustomerReviewTab";
import CustomerRecentReviews from "../../../Component/customer-dashboard/CustomerRecentReview"

const CustomerDashboard = () => {
    return (
        <div>

            <div className="row ">
                <div className="col">
                    <CustomerRecentOrdersComponent />
                </div>
            </div>

            <div className="row ">
                <div className="col">
                    <CustomerRecentReviews />
                </div>
            </div>
        </div>
    );
};

export default CustomerDashboard;
