import React from "react";

import Barchart from "../../../Component/admin-dashboard/barchart";
import Detailbox from "../../../Component/admin-dashboard/detailbox";
import Navbar from "../../../Component/admin-dashboard/navbar";
import RecentOrder from "../../../Component/admin-dashboard/recentOrder";
import RecentSales from "../../../Component/admin-dashboard/recentcustomizedorders";


const AdminDashboard = () => {
    return (
        <div>
            <div className="row"><Detailbox /></div>
            <div className="row ">
                <div className="col">
                    <RecentOrder />
                </div>
            </div>

            <div classname="row">
                <div className="col">
                    <br></br>
                </div>
            </div>

            <div className="row ">
                <div className="col">
                    <RecentSales />
                </div>
            </div>
            <div className="row"><Barchart /></div>
        </div>
    );
};

export default AdminDashboard;
