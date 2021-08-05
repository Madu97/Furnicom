import React from "react";
import CustomerSettingsComponent from "../../../Component/customer-dashboard/CustomerSettingsComponent";



const CustomerSettings = (userData) => {
    const data = userData.userData;
   //console.log(userData.userData);
    return (
        <div>
            <div className="row">
                   <CustomerSettingsComponent userData={data}/>
            </div>
        </div>
    );
};

export default CustomerSettings;
