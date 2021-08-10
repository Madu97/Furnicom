import React from 'react';
import '../../../Assets/CSS/main.css';
import '../../../Assets/CSS/contactUs.css';
import facebook from '../../../Assets/Images/facebook1.png';
import twitter from '../../../Assets/Images/twitter.png';
import whatsapp from '../../../Assets/Images//whatsapp.png';

export default function Content() {
    return (
        <div>
            <div class="root4 row md-5 fs-15 d-flex justify-content-center align-items-center font-weight-bold">
            </div>
                <div class="root col container-flex d-flex justify-content-around align-items-center">
                    <div class="root3 mt-5 container-flex justify-content-center m-2 p-5 my-1 text-white align-items-center">
                        <div class="top-icon d-flex justify-content-center align-items-center rounded-circle">
                            <i class="icon1 fas fa-map-marker-alt fa-2x"></i>
                        </div>
                        <div class="mt-5">
                            <p class='d-flex justify-content-center font1'>Colombo 08</p>
                            <p class='d-flex text-justify justify-content-center font1 '>Sri Lanka</p>
                        </div>
                    </div>
                    <div class="root3 mt-5 container-flex justify-content-center m-2 p-5 my-1 text-white align-items-center">
                        <div class="top-icon d-flex justify-content-center align-items-center rounded-circle">
                            <i class="icon1 far fa-envelope fa-2x"></i>
                        </div>
                        <div class='m-2'>
                            <p class='justify-content-left font2'>Support Email</p>
                            <p class='p1 text-justify justify-content-left font3'>support@gmail.com</p>
                        </div>
                        <div class='m-2 my-5'>
                            <p class='d-flex justify-content-left font2'>Support Email</p>
                            <p class='p1 d-flex text-justify justify-content-left font3'>support@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="root4 row md-5 fs-15 d-flex justify-content-center align-items-center font-weight-bold">
                </div>
                <div class="root col md-3 d-flex justify-content-around align-items-center">
                    <div class="root3 mt-5 mb-5 container-flex justify-content-center m-2 p-5 my-1 text-white align-items-center">
                        <div class="top-icon d-flex justify-content-center align-items-center rounded-circle">
                            <i class="icon1 far fa-comment-alt fa-2x"></i>
                        </div>
                        <div class='row ml-2 mt-3'>
                            <img src={facebook} width="10%" height="10%"></img>
                            <p class='d-flex justify-content-left font3 pl-4'>facebook.com/furnicom</p>
                        </div>
                        <div class='row ml-2 mt-3'>
                        <img src={whatsapp} width="10%" height="10%"></img>
                            <p class='d-flex justify-content-left font3 pl-4'>0771234567</p>
                        </div>
                        <div class='row ml-2 mt-3'>
                        <img src={twitter} width="12%" height="12%"></img>
                            <p class='d-flex justify-content-left font3 pl-3'>twitter.com/furnicom</p>
                        </div>
                    </div>
                    <div class="root3 mt-5 mb-5 container justify-content-center m-2 p-5 my-1 text-white align-items-center">
                    <div class="top-icon d-flex justify-content-center align-items-center rounded-circle">
                            <i class="icon1 fas fa-phone fa-2x"></i>
                        </div>
                        <div class='row ml-2 mt-5'>
                            <a href="#" class="icon1 fas fa-phone fa-2x"></a>
                            <p class='d-flex justify-content-left font3 pl-3'>0111234567</p>
                        </div>
                        <div class='row ml-2 mt-3'>
                            <a href="#" class="icon1 fab fa-whatsapp fa-2x"></a>
                            <p class='d-flex justify-content-left font3 pl-3'>0771234567</p>
                        </div>
                    </div>
                </div>
            <div class="root2 row md-5 fs-15 d-flex justify-content-center align-items-center font-weight-bold">
            </div>
        </div>
    );
}
