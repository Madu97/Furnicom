import React from "react";
import SupplierNotificationComponent from "../../../Component/supplier-dashboard/SupplierNotificationComponent";



const SupplierNotification = (userData) => {
    const data = userData.userData;
    return (
        <div>
            <div className="row bg-danger">
                <SupplierNotificationComponent userData={data}/>
            </div>


        </div>
    );
};

export default SupplierNotification;
