
import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import customer from '../../Assets/Images/customer.jpg';
import { useHistory, useParams } from 'react-router-dom';
import EditProduct from '../../Views/Pages/Admin/Edit-product';



function Editproducts() {

  const [Productdata, setProductdata] = useState([]);
  // const [Info, setInfo] = useState([]);
  const { id } = useParams(); console.log(id)


  const [Info, setInfo] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/getproductbyid', {
        params: {
          id: id
        }
      });

      setProductdata(response.data[0]);
      setInfo({
        name: response.data[0].name,
        description: response.data[0].description,
        price: response.data[0].price,
        timbertype: response.data[0].timber_type,
        timberqua: response.data[0].timber_quality,
        quantity:response.data[0].available_quantity,
    
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

  function updateProduct(id) {

    axios.get('http://localhost:3001/updateproduct', {
      params: {
        name: Info.name,
        description: Info.description,
        price: Info.price,
        timbertype: Info.timbertype,
        timberqua: Info.timberqua,
        quantity:Info.quantity,
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
        <h3>Product Edit</h3>
      </div>

      <div className="ui">
        <div className="col-lg-12 col-md-10 col-sm-12 col-xs-12 d-block">
          <label htmlFor="">Name</label>
          <input type="text" className="form-control" name="name" value={Info.name} onChange={handleChange} />
          <br></br>

          <label htmlFor="">Description</label>
          <input type="text" className="form-control" name="description" value={Info.description} onChange={handleChange} />
          <br></br>

          <label htmlFor="">Timber Type</label>
          <input type="text" className="form-control" name="timbertype" value={Info.timbertype} onChange={handleChange} />
          <br></br>

          <label htmlFor="">Timber Quality</label>
          <input type="text" className="form-control" name="timberqua" value={Info.timberqua} onChange={handleChange} />
          <br></br>

          <label htmlFor="">Price</label>
          <input type="text" className="form-control" name="price" value={Info.price} onChange={handleChange} />
          <br></br>

          <label htmlFor="">Available Quantity</label>
          <input type="text" className="form-control " name="quantity" value={Info.quantity} onChange={handleChange} />
          <br></br>

          <div className="row m-2 mt-5 justify-content-end">
            <button className="btn btn-primary" onClick={() => updateProduct(id)}>Save Changes</button>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Editproducts;










