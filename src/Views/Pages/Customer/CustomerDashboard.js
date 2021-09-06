import React from "react";

import CustomerRecentOrdersComponent from "../../../Component/customer-dashboard/CustomerRecentOrders";
import OrderStatusComponent from "../../../Component/customer-dashboard/OrderStatusComponent";
import CustomerNewArrival from "../../../Component/customer-dashboard/CustomerNewArrivals";
import CustomerReviewTab from "../../../Component/customer-dashboard/CustomerReviewTab";
import CustomerRecentReviews from "../../../Component/customer-dashboard/CustomerRecentReview"

const CustomerDashboard = (userData) => {
    const data = userData.userData;
    return (
        <div>

            <div className="row rounded" style={{border: 'solid',borderWidth: '2px',borderColor: 'grey'}}>
                <div className="col">
                    <CustomerRecentOrdersComponent userData={data} />
                </div>
            </div>
            
            <div className="row rounded mt-5 " style={{border: 'solid',borderWidth: '2px',borderColor: 'grey'}}>
                <div className="col">
                    <CustomerRecentReviews userData={data} />
                </div>
            </div>
        </div>
    );
};

export default CustomerDashboard;
