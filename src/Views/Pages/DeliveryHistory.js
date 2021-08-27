import React from "react";
import DeliveryHistoryComponent from "../../../Component/delivery-dashboard/DeliveryHistoryComponent";

const DeliveryDashboard = (userData) => {
    const data = userData.userData;
    return (
        <div className="row mt-5">
            <div className="col">
                <DeliveryHistoryComponent userData={data}/>
            </div>
        </div>
    );
};

export default DeliveryDashboard;
