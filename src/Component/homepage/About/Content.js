import React from 'react';
import '../../../Assets/CSS/main.css';
import pic from '../../../Assets/Images/about2.jpeg';
import '../../../Assets/CSS/about.css';

export default function Content() {
    return (
        <div>
            <div class="root1 col md-3 d-flex justify-content-center align-items-center">
                <div class="container-image"><img src={pic} width="85%" height="85%"></img></div>
                <div class="root5 container justify-content-center m-2 p-5 my-1 text-white align-items-center">
                    <h1 class='d-flex justify-content-center'>Innovative Business</h1>
                    <p class='d-flex text-justify justify-content-center '>Innovative businesses have new and exciting ideas that are more likely to attract venture capital investment. ... The innovation could include making the same product with better components or a new product that's more user-friendly. Process innovation refers to new ways a business can deliver its product or service.</p>
                    <p class='d-flex text-justify justify-content-center '>Innovative businesses have new and exciting ideas that are more likely to attract venture capital investment. ... The innovation could include making the same product with better components or a new product that's more user-friendly. Process innovation refers to new ways a business can deliver its product or service.</p>
                    <div class="d-flex justify-content-center align-items-center">
                                <div><button class="btn1 m-2">Learn More</button></div>
                            </div>
                </div>
            </div>
            <div class="root2 row md-5 fs-15 d-flex justify-content-center align-items-center font-weight-bold">
            </div>
        </div>
    );
}
