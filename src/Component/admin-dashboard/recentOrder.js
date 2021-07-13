import React from 'react';
//import './main.css';

const RecentOrders = () => {
    return (
      
        <div className="col-12 justify-content-center align-items-center border ">
          <div className="d-flex justify-content-center"> <h3>Recent Orders</h3></div>
<table class="table table-striped text-left ">
  <thead className="fs-30">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Order</th>
      <th scope="col">Buyer</th>
      <th scope="col">Supplier</th>
      <th scope="col">Status</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">25</th>
      <td>Home Chair</td>
      <td>David</td>
      <td>John woodwrk</td>
      <td>Delivered</td>
      <td></td>
      <td> <i class="fa fa-eye" ></i></td>
    </tr>
    <tr>
      <th scope="row">26</th>
      <td>Round table</td>
      <td>Antony</td>
      <td>John Woodworks</td>
      <td>On the way</td>
      <td></td>
      <td><i class="fa fa-eye" ></i></td>
    </tr>
    <tr>
      <th scope="row">27</th>
      <td>Teak table</td>
      <td>Kamal</td>
      <td>Roy Woodworks</td>
      <td>Delivered</td>
      <td></td>
      <td><i class="fa fa-eye" ></i></td>
    </tr>
    <tr>
      <th scope="row">28</th>
      <td>School chair</td>
      <td>Nimal</td>
      <td>Karl Woodworks</td>
      <td>On the way</td>
      <td></td>
      <td><i class="fa fa-eye" ></i></td>
    </tr>
    <tr>
      <th scope="row">29</th>
      <td>Cuboard</td>
      <td>David</td>
      <td>John Woodworks</td>
      <td>Preparing</td>
      <td></td>
      <td><i class="fa fa-eye" ></i></td>
    </tr>
  </tbody>
</table>
        </div>
        
    )
}

export default RecentOrders;