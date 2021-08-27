import React from "react";
import DeliverySettingsComponent from "../../../Component/delivery-dashboard/DeliverySettingsComponent";



const DeliverySettings = (userData) => {
    const data = userData.userData;
    return (
        <div>
            <div className="row">
                   <DeliverySettingsComponent userData={data}/>
            </div>
        </div>
    );
};

export default DeliverySettings;
