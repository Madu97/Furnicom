import React from "react";

import DeliveryHead from "../../../Component/admin-dashboard/delivery-head";
import AddDelivers from "../../../Component/admin-dashboard/AddDeliver";

const AdddDeliver = () => {
    return (
        <div>
            <div className="row justify-content-center"><DeliveryHead/></div>
                <div className="row"><AddDelivers/></div>
        </div>
    );
};

export default AdddDeliver;