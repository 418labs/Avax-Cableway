'use client';

import React, { useState } from 'react';
import { L1_CHAINS } from '../../constants';

interface DeployFormProps {
    setDeploymentData: (data: DeploymentData) => void;
}

export type DeploymentData = {
  sourceIds: string[];
  destinationIds: string[];
}

const DeployForm: React.FC<DeployFormProps> = ({ setDeploymentData }) => {
  const [sourceChain, setSourceChain] = useState<string>('');
  const [destinationChain, setDestinationChain] = useState<string>('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sourceChain && destinationChain) {
      const sourceChainData = L1_CHAINS[sourceChain];
      const destinationChainData = L1_CHAINS[destinationChain];
      setDeploymentData({
        sourceIds: [sourceChainData.id],
        destinationIds: [destinationChainData.id],
      });
    }
  };

  return (
      <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Configure Your Relayer</h2>
        <div>
          <label htmlFor="sourceChain" className="block text-sm font-medium text-gray-300">
            Source Chain:
          </label>
          <select
            id="sourceChain"
            value={sourceChain}
            onChange={(e) => setSourceChain(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
          >
            <option value="" disabled>Select Source Chain</option>
            {Object.entries(L1_CHAINS).map(([key, chain]) => (
              <option key={key} value={key}>
                {chain.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="destinationChain" className="block text-sm font-medium text-gray-300">
            Destination Chain:
          </label>
          <select
            id="destinationChain"
            value={destinationChain}
            onChange={(e) => setDestinationChain(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
          >
            <option value="" disabled>Select Destination Chain</option>
            {Object.entries(L1_CHAINS).map(([key, chain]) => (
              <option key={key} value={key}>
                {chain.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Deploy Relayer
          </button>
        </div>
      </form>
  );
};

export default DeployForm;
