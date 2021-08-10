import React from 'react';
//import './main.css';

const Navbar = () => {
    return (

        <div class="row  d-flex  justify-content-center align-items-center">
            <div class="col-6">
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav fs-15">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>

            <div class="col-4 p-2 d-flex justify-content-end align-items-end">
                <input type="text" placeholder="Search Furniture"/>
                <button class="btn btn-secondary btn-sm ml-2 "> Search</button>
            </div>

            <div class="col-2  p-2 d-flex justify-content-end align-items-end  ">
                <button class="btn btn-success btn-sm ml-2 rounded-pill font-weight-bold fs-20"> Sign Up</button>
                <button class="btn btn-info btn-sm ml-2 mr-2 rounded-pill font-weight-bold fs-20"> Log In</button>
            </div>
        </div>


    );

}

export default Navbar;