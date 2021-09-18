import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const DeliverList = () => {
  const [delivery_person, setDelivery_person] = useState([]);

  useEffect(() => {
    loadDelivery_person();
  }, []);

  const loadDelivery_person = async () => {
    const result = await axios.get("http://localhost:3001/getdeli");
    setDelivery_person(result.data.reverse());
  };

  const response5 = axios.get("http://localhost:3001/deletedeliver", {
      params: {
        id : delivery_person.id
      },
    });

    function deleteDeliver(id) {
      axios
        .get("http://localhost:3001/deletedeliver", {
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
      <Link class="btn btn-primary" to={`/admin/adddeliver/`}>Add Deliver</Link>           
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {delivery_person.map((delivery_person) => (
              <tr>
                <th scope="row">{delivery_person.id}</th>
                <td>{delivery_person.firstname}</td>
                <td>{delivery_person.lastname}</td>
                <td>{delivery_person.ic_no}</td>
                <td>{delivery_person.phone_no}</td>
                <td>{delivery_person.email}</td>
                <td>
                  
                  <Link class="btn btn-outline-primary mr-2" to={`/deliver/edit/${delivery_person.id}`}>Edit</Link>
                  <button class="btn btn-danger delete" onClick={() => deleteDeliver(delivery_person.id)}>Delete</button> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliverList;