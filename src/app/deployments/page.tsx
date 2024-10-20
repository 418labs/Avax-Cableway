'use client'

import React from 'react';
import {  Trash2, Settings } from 'lucide-react';

const mockDeployments = [
  { id: 1, name: 'Relay Alpha', status: 'active', performance: '99.9%' },
  { id: 2, name: 'Relay Beta', status: 'inactive', performance: '95.5%' },
  { id: 3, name: 'Relay Gamma', status: 'active', performance: '98.7%' },
];

const Deployments = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-red-500">Your Deployments</h1>
      <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Performance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {mockDeployments.map((deployment) => (
              <tr key={deployment.id}>
                <td className="px-6 py-4 whitespace-nowrap">{deployment.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    deployment.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {deployment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{deployment.performance}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                    <Settings size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Deployments;