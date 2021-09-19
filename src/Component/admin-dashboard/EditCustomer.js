
import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import customer from '../../Assets/Images/customer.jpg';
import { useHistory, useParams } from 'react-router-dom';



function EditCustomer() {

  const [Customerdata, setCustomerdata] = useState([]);
  // const [Info, setInfo] = useState([]);
  const { id } = useParams(); console.log(id)


  const [Info, setInfo] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/getcustomer', {
        params: {
          id: id
        }
      });

      setCustomerdata(response.data[0]);
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

  function updateCustomer(id) {

    axios.get('http://localhost:3001/updatecustomer', {
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
        <h3>Customer Edit</h3>
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
            <button className="btn btn-primary" onClick={() => updateCustomer(id)}>Save Changes</button>
          </div>
        </div>
      </div>



    </div>
  );
};

export default EditCustomer;







//import "./App.css";
//import { useState } from "react";
//import Axios from "axios";
/*import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import customer from '../../Assets/Images/customer.jpg';
import { useHistory, useParams } from 'react-router-dom';

function EditCustomer() {
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [ic_no, setIc_no] = useState("");
  const [phone_no, setPhone_no] = useState(0);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const [newPhone_no, setNewPhone_no] = useState(0);

  const [customerList, setCustomerList] = useState([]);


  const getCustomers = () => {
    axios.get("http://localhost:3001/getit").then((response) => {
      setCustomerList(response.data);
    });
  };

  const updateCustomer = (id) => {
    axios.put("http://localhost:3001/updatecustomer", {phone_no: newPhone_no, id: id }).then(
      (response) => {
        setCustomerList(
          customerList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  firstname: val.firstname,
                  lastname: val.lastname,
                  ic_no: val.ic_no,
                  phone_no: newPhone_no,
                  email: val.email,
                  username: val.username,
                  password: val.password,
                  address: val.address,
                }
              : val;
          })
        );
      }
    );
  };


  return (
    <div className="App">
      <div className="information">
        <label>First Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setFName(event.target.value);
          }}
        />

        <label>Last Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setLName(event.target.value);
          }}
        />

        <label>Ic No:</label>
        <input
          type="text"
          onChange={(event) => {
            setIc_no(event.target.value);
          }}
        />

        <label>Phone No:</label>
        <input
          type="number"
          onChange={(event) => {
            setPhone_no(event.target.value);
          }}
        />

        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label>Username:</label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <label>Password:</label>
        <input
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <label>Address:</label>
        <input
          type="text"
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />

      </div>
      <div className="employees">


        {customerList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>First Name: {val.firstname}</h3>
                <h3>Last Name: {val.lastname}</h3>
                <h3>Ic No: {val.ic_no}</h3>
                <h3>Phone No: {val.phone_no}</h3>
                <h3>Email: {val.email}</h3>
                <h3>Username: {val.username}</h3>
                <h3>Password: {val.password}</h3>
                <h3>Address: {val.address}</h3>
              </div>
              <div>
              <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewPhone_no(event.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    updateCustomer(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EditCustomer;*/







/*import React, { Component, useState } from 'react';
import Axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../../Assets/CSS/signup.css';



const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    ic: yup.string().max(10, "Must be 10 Characters.").min(10, "Must be 10 Characters."),
    phone: yup.string().max(10, "Must be 10 Digits.").min(10, "Must be 10 Digits."),

    password: yup.string().required().min(8).max(15),

})

function EditCustomer() {

    const [LoginStatus, setLoginStatus] = useState();

    const [usernamemsg, setusernamemsg] = useState();

    const { register, handleChange, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    const registerform = (data) => {

        Axios.get('http://localhost:3001/checkusername', {
            params: {
                username: data.username,
            }
        }).then((response1) => {
            if (response1.data[0]) {
                setusernamemsg("Username Already taken...");
            }
            else {
                setusernamemsg("");
                Axios.get('http://localhost:3001/updatecustomer', {
                    username: data.username,
                    password: data.password,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    address: data.address,
                    ic: data.ic,
                    phone: data.phone,
                    email: data.email,

                }).then((response) => {
                    if (response.data.message) {
                        setLoginStatus(response.data.message)
                        document.getElementById("custmer-signup").reset();
                    }
                })
                //console.log(data)

            }
        })



    }



    return (
        <div className=" container">
            <div className="form-group">
                <div className="w-75 mx-auto shadow-lg p-5 ">
                    <div className="ui">
                        <form id="custmer-signup" className="form-group fs-15" onChange={handleChange}>
                            <div className=" container">
                                <h2 className="text-center mb-4">Edit a Customer</h2>
                            </div>
                            <h5 className="d-flex bg-success fc-white  justify-content-center">{LoginStatus}</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>FirstName<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control"  name="firstname" onChange={handleChange} /><br />


                                </div>
                                <div className="col-lg-6">
                                    <label>LastName :</label> <input type="text" className="form-control"  name="lastname" onChange={handleChange} /><br />

                                </div>
                            </div>

                            <label>Address<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" name="address" onChange={handleChange} /><br />


                            <label>Id Number<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control"  name="ic"  onChange={handleChange} /><br />


                            <label>Phone No<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control"  name="phone" onChange={handleChange} o /><br />


                            <label>Email<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" name="email"  onChange={handleChange} /><br />


                            <label>Username<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" name="username"  onChange={handleChange} /><br />

                            {(usernamemsg) ? (<p className="errormessage">{usernamemsg}</p>) : ('')}

                            <div className="row">
                                <div className="col-lg-6">
                                    <label>Password<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="password" className="form-control" name="password" onChange={handleChange}  /><br />

                                </div>

                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" class="btn btn-lg btn-primary">Edit Customer</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>

    )

}

export default EditCustomer*/




/*import React, {useState,useEffect} from "react";
//import styles from '../../css/customer/customer_edit_profile.css';
import '../../Assets/CSS/signup.css';
import Axios from "axios";

export default function EditCustomer (){

    const [id, setId] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [ic_no, setIc_no] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");

    const [newfirstname,SetNewFirstname] = useState("");
    const [newlastname,SetNewLastname] = useState("");
    const [newic_no,SetNewIc_no] = useState("");
    const [newphone_no,SetNewPhone_no] = useState("");
    const [newemail,SetNewEmail] = useState("");
    const [newusername,SetNewUsername] = useState("");
    const [newpassword,SetNewPassword] = useState("");
    const [newaddress,SetNewAddress] = useState("");

    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get("http://localhost:3001/updatecustomer").then((response) => {
        if (response.data.loggedIn == true) {
          setId(response.data.user[0].id);
          setFirstname(response.data.user[0].firstname);
          setLastname(response.data.user[0].lastname);
          setIc_no(response.data.user[0].ic_no);
          setPhone_no(response.data.user[0].phone_no);
          setEmail(response.data.user[0].email);
          setUsername(response.data.user[0].username);
          setPassword(response.data.user[0].password);
          setAddress(response.data.user[0].address);
        }
      });
    }, []);

        return (


<div className="Edit">
<form>
<div className="container">
    <center><h1>Edit Profile Details</h1></center>
    <p>You can edit your profile details.</p>
    <hr></hr>

    <label htmlFor="firstname"><h6>First Name</h6></label>
    <input type="text" placeholder={firstname} name="firstname" id="" required></input>

    <label htmlFor="lastname"><h6>Last Name</h6></label>
    <input type="text" placeholder={lastname} name="lastname" id="" required></input>

    <label htmlFor="ic_no"><h6>Ic No</h6></label>
    <input type="text" placeholder={ic_no} name="ic_no" id="" required></input>

    <label htmlFor="phone_no"><h6>Phone No</h6></label>
    <input type="text" placeholder={phone_no} name="phone_no" id="" required></input>

    <label htmlFor="email"><h6>Email</h6></label>
    <input type="email" placeholder={email} name="email" id="" required></input>

    <label htmlFor="username"><h6>Username</h6></label>
    <input type="text" placeholder={username} name="username" id="" required></input>

    <label htmlFor="password"><h6>Password</h6></label>
    <input type="text" placeholder={password} name="password" id="" required></input>

    <label htmlFor="address"><h6>Email</h6></label>
    <input type="text" placeholder={address} name="address" id="" required></input>

    <hr></hr>


    <button type="submit" className="registerbtn">Submit</button>
  </div>

</form>
</div>


        );


}*/


