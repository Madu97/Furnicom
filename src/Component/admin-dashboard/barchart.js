import React from 'react';

import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";

const Barchart = () => {
    const data = [
      { name: "Jan", users : 175000 },
      { name: "Feb", users : 185000 },
      { name: "Mar", users : 95000 },
      { name: "Apr", users : 110000 },
      { name: "May", users : 140000 },
      { name: "Jun", users : 80000 },
      { name: "Jul", users : 110000 },
      { name: "Aug", users : 180000 },
      { name: "Sep", users : 70000 },
      { name: "Oct", users : 110000 },
      { name: "Nov", users : 80000 },
      { name: "Dec", users : 160000 },
    ];
  
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Sales Satistics</h1>
        <div className="App">
          
          <BarChart
            width={1000}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 50,
              left: 50,
              bottom: 5,
            }}
            barSize={40}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 20, right: 20 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </div>
      </div>
    );
  };

  export default Barchart;