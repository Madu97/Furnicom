
import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import customer from '../../Assets/Images/customer.jpg';
import { useHistory, useParams } from 'react-router-dom';
import EditSupplier from '../../Views/Pages/Admin/Edit-Supplier';



function Editsupplier() {

  const [Supplierdata, setSupplierdata] = useState([]);
  // const [Info, setInfo] = useState([]);
  const { id } = useParams(); console.log(id)


  const [Info, setInfo] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/getsupplierbyid', {
        params: {
          id: id
        }
      });

      setSupplierdata(response.data[0]);
      setInfo({
        fname: response.data[0].firstname,
        lname: response.data[0].lastname,
        email: response.data[0].email,
        phone: response.data[0].phone_no,
        address: response.data[0].address,
        ic_no:response.data[0].ic_no,
    
      });

    };
    fetchData();

    
  }, [id]);



  console.log(Info)

  const handleChange = event => {
    setInfo({
      ...Info,
      [event.target.name]: event.target.value
    });
  };

  function updateSupplier(id) {

    axios.get('http://localhost:3001/updatesupplier', {
      params: {
        fname: Info.fname,
        lname: Info.lname,
        email: Info.email,
        phone: Info.phone,
        address: Info.address,
        ic_no:Info.ic_no,
        address:Info.address,
        id: id
      }
    }).then((response) => {
      window.location.reload();

    })
  }


  console.log(window.location.origin)

  return (
    <div className="w-50 mx-auto shadow-lg p-5">
      <div className="row m-2 p-2 ">
        <h3>Supplier Edit</h3>
      </div>

      <div className="ui">
        <div className="col-lg-12 col-md-10 col-sm-12 col-xs-12 d-block">
          <label htmlFor="">First Name</label>
          <input type="text" className="form-control" name="fname" value={Info.fname} onChange={handleChange} />
          <br></br>

          <label htmlFor="">Last Name</label>
          <input type="text" className="form-control" name="lname" value={Info.lname} onChange={handleChange} />
          <br></br>

          <label htmlFor="">NIC Number</label>
          <input type="text" className="form-control" name="ic_no" value={Info.ic_no} onChange={handleChange} />
          <br></br>

          <label htmlFor="">Phone Number</label>
          <input type="text" className="form-control" name="phone" value={Info.phone} onChange={handleChange} />
          <br></br>

          <label htmlFor="">Email</label>
          <input type="text" className="form-control" name="email" value={Info.email} onChange={handleChange} />
          <br></br>

          <label htmlFor="">Address</label>
          <input type="text" className="form-control " name="address" value={Info.address} onChange={handleChange} />
          <br></br>

          <div className="row m-2 mt-5 justify-content-end">
            <button className="btn btn-primary" onClick={() => updateSupplier(id)}>Save Changes</button>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Editsupplier;










