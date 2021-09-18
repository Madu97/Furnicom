import React from "react";

import DeliveryList from "../../../Component/admin-dashboard/deliver-list";
import DeliveryHead from "../../../Component/admin-dashboard/delivery-head";

const AdminDelivery = () => {
    return (
        <div>
            <div className="row justify-content-center"><DeliveryHead/></div>
                <div className="row"><DeliveryList/></div>
        </div>
    );
};

export default AdminDelivery;
