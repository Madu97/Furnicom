import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:3001/getprod");
  
    setProducts(result.data.reverse());
  };

  const response5 = axios.get("http://localhost:3001/deleteproduct", {
      params: {
        id : products.id
      },
    });

    function deleteProduct(id) {
      axios
        .get("http://localhost:3001/deleteproduct", {
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
      <Link class="btn btn-primary" to={`/admin/addproduct/`}>Add Product</Link>
      <div className="py-4">
        
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>              
              <th scope="col">Timber Type</th>
              <th scope="col">Timber Quality</th>
              <th scope="col">Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((products) => (
              <tr>
                
                <th scope="row">{products.id}</th>
                <td>{products.image}</td>
                <td>{products.name}</td>
                <td>{products.timber_type}</td>
                <td>{products.timber_quality}</td>
                <td>{products.price}</td>
                <td>
                  
                  <Link class="btn btn-outline-primary mr-2" to={`/products/edit/${products.id}`}>Edit</Link>
                  <button class="btn btn-danger delete" onClick={() => deleteProduct(products.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;