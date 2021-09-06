import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';

const CustomerCustomizedOrder = () => {

    return(
        <div className="col-12 m-2 p-2 d-block border">
            <div className="row m-2 mt-1 p-2 mb-5 d-flex">
                <h3>Upload Your Customized Order</h3>
            </div>

            <div className="col-lg-6 m-2 mt-4 col-md-10 col-sm-12 col-xs-12 d-block">
                <label htmlFor="">Select Timber type:</label>
                <select className="browser-default custom-select">
                    <option></option>
                    <option value="2">Teak</option>
                    <option value="3">Jak</option>
                </select>
            </div>

            <div className="col-lg-6 m-2 mt-4 col-md-10 col-sm-12 col-xs-12">
                <label htmlFor="">Select Timber quality:</label>
                <select className=" custom-select">
                    <option></option>
                    <option value="1">Number-1</option>
                    <option value="2">Number-2</option>
                </select>
            </div>

            <div className="col-lg-6 col-md-10 col-sm-12 col-xs-12 m-2 mt-4 d-block">
                <label className="mb-3" htmlFor="">Upload your design<span>&nbsp;</span>:<span>&nbsp;&nbsp;</span></label>
                <input type="file" />
            </div>

            <div className="col-lg-6 col-md-10 col-sm-12 m-2 mt-4 col-xs-12">
                <label htmlFor="">Mention the features.</label>
                <textarea cols="66" rows="5"></textarea>
            </div>

            <div className="row m-2 mt-5 justify-content-end">
                <button className="btn btn-lg btn-primary">Send</button>
            </div>


        </div>
    )

};

export default CustomerCustomizedOrder;
/*

const [imgdetails, setimgdetails] = useState([]);
    const [imgFile, setImgFile] = useState('');

    function uploadHandler(event) {


        const data = new FormData();
        data.append('file', event.target.files[0]);

        axios.post('http://localhost:3001/uploadpp', data)
            .then((res) => {

                setImgFile('http://localhost:3001/upl/' + res.data.filename)
                setimgdetails(res.data);
            });

    }

    console.log(imgdetails);

    return (
        <div>
            <input type="file" name="file" onChange={e => uploadHandler(e)} />
            <img src={imgFile} alt="img" />
        </div>
    );

    */

/*

*/