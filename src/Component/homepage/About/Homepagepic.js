import React from 'react';
import pic from '../../../Assets/Images/about1.jpeg';
import '../../../Assets/CSS/about.css';


export default function Homepagepic() {
    return (
        <div class="container-image center">
            <div class="pic-bg">
            <img src={pic} width="100%" height="500px"></img>
            </div>
            <div class="d-flex justify-content-center align-items-center text-center fc-white text-above-pic">
                <p class="a">About Us</p> 
            </div>
        </div>


    );
}
