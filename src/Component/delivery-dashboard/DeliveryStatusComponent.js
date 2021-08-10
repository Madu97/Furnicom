import React from "react";
import { FaShuttleVan, FaTimes } from "react-icons/fa";
const DeliveryStatusComponent = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="card bg-success fc-white">
                        <div class="card-body">
                            <div className="row">
                                <div className="col d-flex justify-content-between align-items-center">
                                    <FaShuttleVan size={50} />
                                    <div className="text-center">
                                        <h3>Delivered</h3>
                                        <h4>55</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="card bg-warning fc-white">
                        <div class="card-body">
                            <div className="row">
                                <div className="col d-flex justify-content-between align-items-center">
                                    <FaShuttleVan size={50} />
                                    <div className="text-center">
                                        <h3>Pending</h3>
                                        <h4>8</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mt-sm-4 mt-lg-0">
                    <div class="card bg-danger fc-white">
                        <div class="card-body">
                            <div className="row">
                                <div className="col d-flex justify-content-between align-items-center">
                                    <FaTimes size={50} />
                                    <div className="text-center">
                                        <h3>Cancelled</h3>
                                        <h4>7</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryStatusComponent;
