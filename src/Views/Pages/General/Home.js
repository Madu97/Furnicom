import React, { Component } from 'react';
import '../../../Assets/CSS/main.css';
import Navbarr from '../../../Component/homepage/Home/Navbar';
import Homepagepic from '../../../Component/homepage/Home/Homepagepic';
import NewArrivalhead from '../../../Component/homepage/Home/NewArrivalhead';
import NewArrival from '../../../Component/homepage/Home/NewArrival';
import Popularproducts from '../../../Component/homepage/Home/Popularproduct'
import Popularproducthead from '../../../Component/homepage/Home/Popularproducthead';
import Cart from "../../../Component/Products/Cart"
import {CartProvider} from 'react-use-cart'


export default function Home() {
  return (
        <div>
          <CartProvider>
            <Navbarr />
            <Homepagepic/>
            <NewArrivalhead/>
            <NewArrival/>
            <Popularproducthead/>
            <Popularproducts/>
          </CartProvider>
        </div>
  );
}