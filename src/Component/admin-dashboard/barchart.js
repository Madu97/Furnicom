import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
} from "recharts";

export default function Barchart() {
    const [monthlyReport, setMonthlyReport] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "http://localhost:3001/salesReport"
            );

            setMonthlyReport(response.data.data);
        };
        fetchData();
    }, []);

    return (
        <div className="col-12 justify-content-center align-items-center border mt-4 mx-3">
            <div className="d-flex justify-content-center py-2">
                <h3>Sales Statistics</h3>
            </div>
            <div className="App">
                <BarChart
                    width={900}
                    height={300}
                    data={monthlyReport}
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
                    <Bar
                        dataKey="income"
                        fill="#8884d8"
                        background={{ fill: "#eee" }}
                    />
                </BarChart>
            </div>
        </div>
    );
}