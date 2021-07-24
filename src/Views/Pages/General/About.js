import React, { Component } from 'react';
import '../../../Assets/CSS/main.css';
import Navbarr from '../../../Component/homepage/About/Navbar'
import Homepagepic from '../../../Component/homepage/About/Homepagepic';
import Content from '../../../Component/homepage/About/Content';

export default function About() {
  return (
        <div>
          <Navbarr />
          <Homepagepic/>
          <Content/>
        </div>
  );
}