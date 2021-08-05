import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import '../../Assets/CSS/signup.css';


export default function SignUpAsComponent() {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-6 h-70 d-flex justify-content-center align-items-center  rounded">
                <div className="col-12 d-block m-5 p-5 text-center align-items-center justify-content-center">
                    <div className="fc-white">
                        <h2>Sign Up As....</h2>
                    </div>
                    <Link to="/signup"><div className="row m-5 p-5 fs-30 font-weight-bold btn btn-lg btn-success d-block">
                        <h2>Customer</h2>
                    </div></Link>

                    <Link to="/suppliersignup"><div className="row m-5 fs-30 p-5 font-weight-bold btn btn-lg btn-primary d-block">
                        <h2>Supplier</h2>
                    </div></Link>
                </div>
            </div>

        </div>
    );
}
