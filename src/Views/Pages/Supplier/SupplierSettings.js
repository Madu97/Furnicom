import React from "react";
import SupplierSettingsComponent from "../../../Component/supplier-dashboard/SupplierSettingsComponent";



const SupplierSettings = (userData) => {
    const data = userData.userData;
    return (
        <div>
            <div className="row">
                   <SupplierSettingsComponent userData={data}/>
            </div>
        </div>
    );
};

export default SupplierSettings;
