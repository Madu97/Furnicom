import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import item1 from '../../Assets/Images/item1.jpg';
import item2 from '../../Assets/Images/item2.jpg';
import item3 from '../../Assets/Images/item3.png';
import { AiTwotoneStar } from 'react-icons/ai';


const stylenone = { color: "grey", margin: "2px" }
const stylegold = { color: "gold", margin: "2px" }


const CustomerRecentReview = () => {
    return (
        <div className=" pb-1 p-1 pt-2 border">
            <div className="d-flex justify-content-center">
                <h3>Recent Reviews</h3>
            </div>
            <div className="d-block  justify-content-center align-items-center ">
                <div className="m-2">
                    <div className="d-flex justify-content-start align-items-center">
                        <img src={item2} width="150px" height="150px" className="m-2 rounded border"></img>
                        <div className="d-block ml-5">
                            <p className="fs-15 fc-blue ">Home Chair</p>
                            <p className="">Karl Woodworks</p>
                            <div className=" d-flex justify-content-center justify-content-center align-items-center ">
                                <AiTwotoneStar size={45} style={stylegold} />
                                <AiTwotoneStar size={45} style={stylegold} />
                                <AiTwotoneStar size={45} style={stylegold} />
                                <AiTwotoneStar size={45} style={stylenone} />
                                <AiTwotoneStar size={45} style={stylenone} />

                                <div className="fs-30 ml-5 font-weight-bold align-items-center">
                                    3.0
                            </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="m-2">
                <div className="d-flex justify-content-start align-items-center">
                    <img src={item3} width="150px" height="150px" className="m-2 rounded border"></img>
                    <div className="d-block ml-5">
                        <p className="fs-15 fc-blue">Round Table</p>
                        <p className="">Alex Woodworks</p>
                        <div className=" d-flex justify-content-center align-items-center ">
                            <AiTwotoneStar size={45} style={stylegold}/>
                            <AiTwotoneStar size={45} style={stylegold}/>
                            <AiTwotoneStar size={45} style={stylegold}/>
                            <AiTwotoneStar size={45} style={stylegold}/>
                            <AiTwotoneStar size={45} style={stylenone}/>

                            <div className="fs-30 ml-5 font-weight-bold align-items-center">
                                4.0
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>

            </div>

        </div>
    );
};

export default CustomerRecentReview;
