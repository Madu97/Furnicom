import React from "react";
import CustomerOrderHistoryComponent from "../../../Component/customer-dashboard/CustomerOrderHistoryComponent";
import CustomerMyReview from "../../../Component/customer-dashboard/CustomerMyReview";



const CustomerMyReviews = (userData) => {
    const data = userData.userData;
    return (
        <div>
            <div className="row">
                   <CustomerMyReview userData={data}/>

            </div>
        </div>
    );
};

export default CustomerMyReviews;
