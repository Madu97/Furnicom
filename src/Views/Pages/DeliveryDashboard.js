import React from "react";
import DeliveryStatusComponent from "../../../Component/delivery-dashboard/DeliveryStatusComponent";
import RecentDeliveryComponent from "../../../Component/delivery-dashboard/RecentDeliveryComponent";

const DeliveryDashboard = (userData) => {
    const data = userData.userData;
    return (
        <div>
            <div className="row">
                <div className="col">
                    <DeliveryStatusComponent  userData={data}/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <RecentDeliveryComponent  userData={data}/>
                </div>
            </div>
        </div>
    );
};

export default DeliveryDashboard;
