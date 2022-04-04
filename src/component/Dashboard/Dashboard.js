import React from 'react';
import { Area, AreaChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 104010
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 180500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 480001
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 400405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 509000
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 610000
    }
]
const Dashboard = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-12 mt-4'>
                    <p className='text-center text-primary fw-bold'>MONTH WISE SELL</p>
                    <LineChart width={500} height={300} data={data}>
                        <Line dataKey={"revenue"}></Line>
                        <XAxis dataKey="month" />
                        <YAxis></YAxis>
                        <Tooltip />
                    </LineChart>
                </div>
                <div className='col-lg-6 col-sm-12 mt-4'>
                    <p className='text-center text-primary fw-bold'>Investment Vs Revenue</p>
                    <AreaChart width={500} height={300} data={data}>
                        <Area dataKey={"investment"}></Area>
                        <Area dataKey={"revenue"} stroke="#82ca9d" fill="#ffc658"></Area>
                        <XAxis dataKey="month" />
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;