import React from 'react';
import furnicom from '../../Assets/Images/furnicom.jpg';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import '../../Assets/CSS/main.css';

const Header = () => {
    return (
        <header>
            <div className="container-fluid mb-1">
                <div className="row header-row theme-color justify-content-between align-items-center pl-1 ">
                    <div className="d-flex align-items-center">
                    <Link to="/"><img src={furnicom} width="80" height="50" class="rounded-sm"></img></Link>
                        <div className="fs-30 pl-3">
                            FurniCom
                        </div>
                    </div>

                    <div className="d-flex pr-2">
                        <div className=" d-flex align-items-center pr-5">
                            <i class="fa fa-phone" ></i>
                            <div className="pl-2">
                                0111234567
                        </div>
                        </div>

                        <div className=" d-flex align-items-center">
                            <i class="fa fas fa-map-marker-alt" width="20" ></i>
                            <div className="pl-2">
                                Colombo 08
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
