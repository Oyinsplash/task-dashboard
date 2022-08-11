import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../../../data/data.json';
import './chart.css';

const chartData = data.data;
function Chart() {
    return (
      <div className="chart_wrapper">
        <ResponsiveContainer minWidth="550px" minHeight="300px">
          <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 5,
              left: -25,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="transpa" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#F8B400"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
}

export default Chart;