import React from "react";

import DeliveryStatusComponent from "../../../Component/delivery-dashboard/DeliveryStatusComponent";
import RecentDeliveryComponent from "../../../Component/delivery-dashboard/RecentDeliveryComponent";

const DeliveryDashboard = () => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <DeliveryStatusComponent />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <RecentDeliveryComponent />
                </div>
            </div>
        </div>
    );
};

export default DeliveryDashboard;
