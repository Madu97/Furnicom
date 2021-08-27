import React from "react";
import DeliveryNotificationComponent from "../../../Component/delivery-dashboard/DeliveryNotificationComponent";

const DeliveryNotification = (userData) => {
    const data = userData.userData;
    return (
        <div className="row mt-5">
            <div className="col">
                <DeliveryNotificationComponent userData={data}/>
            </div>
        </div>
    );
};

export default DeliveryNotification;
