'use client';

import React, { useState } from 'react';

interface DeployFormProps {
  onDeploy: (data: {
    sourceRPC: string;
    destinationRPC: string;
    pollingFrequency: string;
  }) => void;
}

const DeployForm: React.FC<DeployFormProps> = ({ onDeploy }) => {
  const [sourceRPC, setSourceRPC] = useState('https://rpc.example.com');
  const [destinationRPC, setDestinationRPC] = useState('https://rpc.example.com');
  const [pollingFrequency, setPollingFrequency] = useState('1000');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDeploy({ sourceRPC, destinationRPC, pollingFrequency });
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Deploy Your Relayer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="sourceRPC" className="block text-sm font-medium text-gray-300">
            Source L1 RPC Endpoint:
          </label>
          <input
            type="text"
            id="sourceRPC"
            value={sourceRPC}
            onChange={(e) => setSourceRPC(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="destinationRPC" className="block text-sm font-medium text-gray-300">
            Destination L1 RPC Endpoint:
          </label>
          <input
            type="text"
            id="destinationRPC"
            value={destinationRPC}
            onChange={(e) => setDestinationRPC(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="pollingFrequency" className="block text-sm font-medium text-gray-300">
            Polling Frequency (ms):
          </label>
          <input
            type="number"
            id="pollingFrequency"
            value={pollingFrequency}
            onChange={(e) => setPollingFrequency(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Deploy Relayer
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeployForm;