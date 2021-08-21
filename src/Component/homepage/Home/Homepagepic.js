import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import homepagepic from '../../../Assets/Images/homepagepic.jpg';


export default function Homepagepic() {
    return (
        <div class="container-image mb-5">
            <img src={homepagepic} width="100%" height="500px"></img>
            <div class="col-5 h-60 d-flex justify-content-center align-items-center text-center fs-60 fc-white text-above-pic  border-hmpg ">
                <p class="">AT YOUR <br></br> DOOR STEP</p> 
            </div>

            <div class="text-above-button">
            <Link to="/signupas"><button class="btn btn-info btn-lg w-10 h-10 fs-60 font-weight-bold">Join Now</button></Link>
            </div>
        </div>

    );
}
