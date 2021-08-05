import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import item1 from '../../Assets/Images/item1.jpg';
import item2 from '../../Assets/Images/item2.jpg';
import item3 from '../../Assets/Images/item3.png';

    
const SupplierProducts = () => {
    return (
        <div className="bg-theme-pale d-block  justify-content-center pb-3 p-3">
            <div className="d-flex justify-content-left">
                <button className="btn btn-lg btn-warning fc-white d-flex justify-content-center align-items-center">Add Items
            <div>
                        <i class="fa fa-plus-circle m-1 fa-1x fc-white" ></i>
                    </div></button>

            </div>
            <br></br>
            <div className="row justify-content-center fc-white">
                <div className="col-md-3 col-sm-7 d-block text-center">
                    <img src={item1} class="imgstyle img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">School Chair</div>
                        <div class="fc-theme ">Rs.4000</div>
                        <button className="btn btn-info"><i class="fa fa-edit fc-white mr-1" ></i>Edit<br></br></button>
                        <button className="btn btn-success mx-1">More Details</button>
                    </div>
                </div> 
                
                <div className="col-md-3 col-sm-7 d-block text-center">
                    <img src={item1} class="imgstyle img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">School Chair</div>
                        <div class="fc-theme ">Rs.4000</div>
                        <button className="btn btn-info"><i class="fa fa-edit fc-white mr-1" ></i>Edit<br></br></button>
                        <button className="btn btn-success mx-1">More Details</button>
                    </div>
                </div>
                <div className="col-md-3 col-sm-7 d-block text-center">
                    <img src={item1} class="imgstyle img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">School Chair</div>
                        <div class="fc-theme ">Rs.4000</div>
                        <button className="btn btn-info"><i class="fa fa-edit fc-white mr-1" ></i>Edit<br></br></button>
                        <button className="btn btn-success mx-1">More Details</button>
                    </div>
                </div>
                <div className="col-md-3 col-sm-7  d-block text-center">
                    <img src={item1} class="imgstyle img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">School Chair</div>
                        <div class="fc-theme ">Rs.4000</div>
                        <button className="btn btn-info"><i class="fa fa-edit fc-white mr-1" ></i>Edit<br></br></button>
                        <button className="btn btn-success mx-1">More Details</button>
                    </div>

                </div>
            </div>  
            <br></br><br></br>

            <div className="row justify-content-center fc-white">
                <div className="col-md-3 col-sm-7 d-block text-center">
                    <img src={item1} class="imgstyle img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">School Chair</div>
                        <div class="fc-theme ">Rs.4000</div>
                        <button className="btn btn-info"><i class="fa fa-edit fc-white mr-1" ></i>Edit<br></br></button>
                        <button className="btn btn-success mx-1">More Details</button>
                    </div>
                </div>
                <div className="col-md-3 col-sm-7 d-block text-center">
                    <img src={item1} class="imgstyle img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">School Chair</div>
                        <div class="fc-theme ">Rs.4000</div>
                        <button className="btn btn-info"><i class="fa fa-edit fc-white mr-1" ></i>Edit<br></br></button>
                        <button className="btn btn-success mx-1">More Details</button>
                    </div>
                </div>
                <div className="col-md-3 col-sm-7 d-block text-center">
                    <img src={item1} class="imgstyle img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">School Chair</div>
                        <div class="fc-theme ">Rs.4000</div>
                        <button className="btn btn-info"><i class="fa fa-edit fc-white mr-1" ></i>Edit<br></br></button>
                        <button className="btn btn-success mx-1">More Details</button>
                    </div>
                </div>
                <div className="col-md-3 col-sm-7  d-block text-center">
                    <img src={item1} class="imgstyle img-thumbnail"></img>
                    <div className="m-2">
                        <div class="fc-darkblue font-weight-bold">School Chair</div>
                        <div class="fc-theme ">Rs.4000</div>
                        <button className="btn btn-info"><i class="fa fa-edit fc-white mr-1" ></i>Edit<br></br></button>
                        <button className="btn btn-success mx-1">More Details</button>
                    </div>

                </div>
            </div> <br></br>
            

            <div className=" m-2 d-flex justify-content-center">
                <button className="btn btn-danger mx-1">Show all</button>
            </div>

            
        </div>

        
    );
};

export default SupplierProducts;
