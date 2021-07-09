import React, { Component } from 'react';
import '../../../Assets/CSS/main.css';
import Navbarr from '../../../Component/homepage/Home/Navbar';
import Homepagepic from '../../../Component/homepage/Home/Homepagepic';
import NewArrivalhead from '../../../Component/homepage/Home/NewArrivalhead';
import NewArrival from '../../../Component/homepage/Home/NewArrival';
import Popularproducthead from '../../../Component/homepage/Home/Popularproducthead';


export default function Home() {
  return (
        <div>
          <Navbarr />
          <Homepagepic/>
          <NewArrivalhead/>
          <NewArrival/>
          <Popularproducthead/>
          <NewArrival/>

        </div>
  );
}