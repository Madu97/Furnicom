import React from "react";
import CustomerOrderHistoryComponent from "../../../Component/customer-dashboard/CustomerOrderHistoryComponent";



const CustomerOrderHistory = (userData) => {
    const data = userData.userData;
    return (
        <div>
            <div className="row">
                   <CustomerOrderHistoryComponent userData={data}/>

            </div>
        </div>
    );
};

export default CustomerOrderHistory;
