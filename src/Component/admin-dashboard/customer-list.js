import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const CustomerList = () => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const result = await axios.get("http://localhost:3001/getit");
  
    setCustomer(result.data.reverse());
  };

  const deleteCustomer = async id => {
    await axios.delete(`http://localhost:3001/customer/${id}`);
    loadCustomer();
  };

  return (
    
    <div className="container">
      <Link class="btn btn-primary" to={`/admin/addcustomer/`}>Add Customer</Link>
      <div className="py-4">
        
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">IC</th>
              <th scope="col">Phone No</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((customer) => (
              <tr>
              
                <th scope="row">{customer.id}</th>
                <td>{customer.firstname}</td>
                <td>{customer.lastname}</td>
                <td>{customer.ic_no}</td>
                <td>{customer.phone_no}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                
                <td>
                  <Link class="btn btn-outline-primary mr-2" to={`/admin/editcustomer/${customer.id}`}>Edit</Link>
                  <Link class="btn btn-danger" onClick={() => deleteCustomer(customer.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;