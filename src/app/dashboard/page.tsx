'use client'

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity, Cpu, Database, DollarSign, AlertTriangle } from 'lucide-react';

const data = [
  { name: 'Jan', Transactions: 4000, Rewards: 2400 },
  { name: 'Feb', Transactions: 3000, Rewards: 1398 },
  { name: 'Mar', Transactions: 2000, Rewards: 9800 },
  { name: 'Apr', Transactions: 2780, Rewards: 3908 },
  { name: 'May', Transactions: 1890, Rewards: 4800 },
  { name: 'Jun', Transactions: 2390, Rewards: 3800 },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-red-500">Relayer Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Activity, title: 'Uptime', value: '99.9%', color: 'bg-green-500' },
          { icon: Cpu, title: 'CPU Usage', value: '45%', color: 'bg-blue-500' },
          { icon: Database, title: 'Storage', value: '2.1 TB', color: 'bg-purple-500' },
          { icon: DollarSign, title: 'Rewards', value: '1,234 AVAX', color: 'bg-yellow-500' },
        ].map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 flex items-center">
            <div className={`${stat.color} p-3 rounded-full mr-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400">{stat.title}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Performance Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Transactions" fill="#8884d8" />
            <Bar dataKey="Rewards" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Alerts</h2>
        <div className="space-y-4">
          {[
            { message: 'High latency detected', time: '2 hours ago' },
            { message: 'Storage space running low', time: '1 day ago' },
            { message: 'Successful system update', time: '3 days ago' },
          ].map((alert, index) => (
            <div key={index} className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
              <div>
                <p className="font-medium">{alert.message}</p>
                <p className="text-sm text-gray-400">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;