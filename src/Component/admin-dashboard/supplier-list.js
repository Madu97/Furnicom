import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const SupplierList = () => {
  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    loadSupplier();
  }, []);

  const loadSupplier = async () => {
    const result = await axios.get("http://localhost:3001/getsup");
    setSupplier(result.data.reverse());
  };

  const response5 = axios.get("http://localhost:3001/deletesupplier", {
      params: {
        id : supplier.id
      },
    });

    function deleteSupplier(id) {
      axios
        .get("http://localhost:3001/deletesupplier", {
          params: {
            id: id,
            
          },
        })
        .then((response) => {
          window.location.reload();
        });
    }

  return (
    <div className="container">
      <Link class="btn btn-primary" to={`/admin/addsupplier/`}>Add Supplier</Link>           
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
            {supplier.map((supplier) => (
              <tr>
                <th scope="row">{supplier.id}</th>
                <td>{supplier.firstname}</td>
                <td>{supplier.lastname}</td>
                <td>{supplier.ic_no}</td>
                <td>{supplier.phone_no}</td>
                <td>{supplier.email}</td>
                <td>{supplier.address}</td>
                <td>
                  
                  <Link class="btn btn-outline-primary mr-2" to={`/admin/editsupplier/${supplier.id}`}>Edit</Link>
                  <button class="btn btn-danger delete" onClick={() => deleteSupplier(supplier.id)}>Delete</button>  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierList;