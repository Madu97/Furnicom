import React from 'react';
//import './main.css';

const CustomerList = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        
      
        <div className="col-12  fc-white justify-content-center align-items-center border rounded">
<table class="table table-striped text-left ">
  <thead className="fs-30">
    <tr>
      <th scope="col">Id Number</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">01</th>
      <td>Amal</td>
      <td>colombo</td>
      <td>amal123@gmail.com</td>
      <td>0112245789</td>
      <td>
        <input type="submit" value="Update" class="btn btn-primary btn-block btn-lg" />
      </td>
      <td>
        <input type="submit" value="Delete" class="btn btn-primary btn-block btn-lg" />
      </td>
      
    </tr>
    <tr>
      <th scope="row">02</th>
      <td>Kamal</td>
      <td>Gall</td>
      <td>kamal178@gmail.com</td>
      <td>0771245963</td>
      <td>
        <input type="submit" value="Update" class="btn btn-primary btn-block btn-lg" />
      </td>
      <td>
        <input type="submit" value="Delete" class="btn btn-primary btn-block btn-lg" />
      </td>
      
    </tr>
    <tr>
      <th scope="row">03</th>
      <td>Saman</td>
      <td>Kandy</td>
      <td>saman356@gmail.com</td>
      <td>0701542896</td>
      <td>
        <input type="submit" value="Update" class="btn btn-primary btn-block btn-lg" />
      </td>
      <td>
        <input type="submit" value="Delete" class="btn btn-primary btn-block btn-lg" />
      </td>
      
    </tr>
    <tr>
      <th scope="row">04</th>
      <td>Nuwan</td>
      <td>Gampaha</td>
      <td>nuwan890@gmail.com</td>
      <td>0716354912</td>
      <td>
        <input type="submit" value="Update" class="btn btn-primary btn-block btn-lg" />
      </td>
      <td>
        <input type="submit" value="Delete" class="btn btn-primary btn-block btn-lg" />
      </td>
      
    </tr>
    <tr>
      <th scope="row">05</th>
      <td>Nimal</td>
      <td>Mathara</td>
      <td>nimal984@gmail.com</td>
      <td>0724569852</td>
      <td>
        <input type="submit" value="Update" class="btn btn-primary btn-block btn-lg" />
      </td>
      <td>
        <input type="submit" value="Delete" class="btn btn-primary btn-block btn-lg" />
      </td>
        
    </tr>


    <tr>
      <th scope="row">06</th>
      <td>Amal</td>
      <td>colombo</td>
      <td>amal123@gmail.com</td>
      <td>0112245789</td>
      <td>
        <input type="submit" value="Update" class="btn btn-primary btn-block btn-lg" />
      </td>
      <td>
        <input type="submit" value="Delete" class="btn btn-primary btn-block btn-lg" />
      </td>
      
    </tr>
    <tr>
      <th scope="row">07</th>
      <td>Kamal</td>
      <td>Gall</td>
      <td>kamal178@gmail.com</td>
      <td>0771245963</td>
      <td>
        <input type="submit" value="Update" class="btn btn-primary btn-block btn-lg" />
      </td>
      <td>
        <input type="submit" value="Delete" class="btn btn-primary btn-block btn-lg" />
      </td>
      
    </tr>
    <tr>
      <th scope="row">08</th>
      <td>Saman</td>
      <td>Kandy</td>
      <td>saman356@gmail.com</td>
      <td>0701542896</td>
      <td>
        <input type="submit" value="Update" class="btn btn-primary btn-block btn-lg" />
      </td>
      <td>
        <input type="submit" value="Delete" class="btn btn-primary btn-block btn-lg" />
      </td>
      
    </tr>
    <tr>
      <th scope="row">09</th>
      <td>Nuwan</td>
      <td>Gampaha</td>
      <td>nuwan890@gmail.com</td>
      <td>0716354912</td>
      <td>
        <input type="submit" value="Update" class="btn btn-primary btn-block btn-lg" />
      </td>
      <td>
        <input type="submit" value="Delete" class="btn btn-primary btn-block btn-lg" />
      </td>
      
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Nimal</td>
      <td>Mathara</td>
      <td>nimal984@gmail.com</td>
      <td>0724569852</td>
      <td>
        <input type="submit" value="Update" class="btn btn-primary btn-block btn-lg" />
      </td>
      <td>
        <input type="submit" value="Delete" class="btn btn-primary btn-block btn-lg" />
      </td>
        
    </tr>
  </tbody>
</table>
        </div>
        
        
    )
}

export default CustomerList;