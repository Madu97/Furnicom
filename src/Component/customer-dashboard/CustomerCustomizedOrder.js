import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';

const CustomerCustomizedOrder = (userData) => {

    const userid = userData.userData.id;
    const [Suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response3 = await axios.get('http://localhost:3001/getallsuppliers');

            setSuppliers(response3.data);
        };

        fetchData();
    }, []);

    const [Info, setInfo] = useState({
        timber: '',
        quality: '',
        img: '',
        feature: '',
        suppliers: '',
        name: '',

    });

    const handleChange = event => {
        setInfo({
            ...Info,
            [event.target.name]: event.target.value
        });
    };

    const [imgdetails, setimgdetails] = useState('');
    const [imgFile, setImgFile] = useState('');

    function uploadHandler(event) {


        const data = new FormData();
        data.append('file', event.target.files[0]);

        axios.post('http://localhost:3001/uploadpp', data)
            .then((res) => {

                //setImgFile('http://localhost:3001/upl/' + res.data.filename)
                setimgdetails(res.data.filename);
            });

    }

    function insertcust_ord() {
        axios
            .get("http://localhost:3001/insertcust_order", {
                params: {
                    img: imgdetails,
                    timber: Info.timber,
                    quality: Info.quality,
                    feature: Info.feature,
                    suppliers: Info.suppliers,
                    name: Info.name,
                    c_id: userid
                },
            })
            .then((response) => {
                window.location.reload();
            });
    }


    return (
        <div className="col-12 m-2 p-2 d-block border">
            <div className="row m-2 mt-1 p-2 mb-5 d-flex">
                <h3>Upload Your Customized Order</h3>
            </div>

            <div className="col-lg-6 col-md-10 col-sm-12 m-2 mt-4 col-xs-12 d-block">
                <label htmlFor=""> Furniture Name:</label>
                <input name="name" className="form-control" onChange={handleChange} />
            </div>

            <div className="col-lg-6 m-2 mt-4 col-md-10 col-sm-12 col-xs-12 d-block">
                <label htmlFor="">Select Timber type:</label>
                <select className="browser-default custom-select" name="timber" onChange={handleChange}>
                    <option></option>
                    <option value="Teak">Teak</option>
                    <option value="Jak">Jak</option>
                </select>
            </div>

            <div className="col-lg-6 m-2 mt-4 col-md-10 col-sm-12 col-xs-12">
                <label htmlFor="">Select Timber quality:</label>
                <select className=" custom-select" name="quality" onChange={handleChange}>
                    <option></option>
                    <option value="Number-1">Number-1</option>
                    <option value="Number-22">Number-2</option>
                </select>
            </div>

            <div className="col-lg-6 col-md-10 col-sm-12 col-xs-12 m-2 mt-4 d-block">
                <label className="mb-3" htmlFor="">Upload your design<span>&nbsp;</span>:<span>&nbsp;&nbsp;</span></label>
                <input type="file" name="img" onChange={e => uploadHandler(e)} />
            </div>

            <div className="col-lg-6 col-md-10 col-sm-12 m-2 mt-4 col-xs-12">
                <label htmlFor="">Mention the features.</label>
                <textarea cols="66" rows="5" name="feature" onChange={handleChange}></textarea>
            </div>
           
            <div className="col-lg-6 col-md-10 col-sm-12 m-2 mt-4 col-xs-12">
                <label htmlFor="">Select Supplier:</label>
                <select className=" custom-select mr-2" name="suppliers" onChange={handleChange}>
                    <option></option>
                    {Suppliers.map((dperson, index) => <option value={dperson.id} >{dperson.username}-{dperson.id}</option>)}
                </select>
            </div>

            <div className="row m-2 mt-5 justify-content-end">
                <button className="btn btn-lg btn-primary" onClick={() => insertcust_ord()}>Send</button>
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