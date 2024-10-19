'use client';

import React, { useState } from 'react';
import { L1_CHAINS } from '../../constants';

interface DeployFormProps {
  onDeploy: (data: {
    sourceRPC: string;
    destinationRPC: string;
    subnetId: string;
    blockchainId: string;
    vm: string;
    rewardAddress: string;
    accountPrivateKey: string;
  }) => void;
}

const DeployForm: React.FC<DeployFormProps> = ({ onDeploy }) => {
  const [sourceChain, setSourceChain] = useState<string>('');
  const [destinationChain, setDestinationChain] = useState<string>('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sourceChain && destinationChain) {
      const sourceChainData = L1_CHAINS[sourceChain];
      const destinationChainData = L1_CHAINS[destinationChain];

      onDeploy({
        sourceRPC: sourceChainData.id,
        destinationRPC: destinationChainData.id,
        subnetId: sourceChainData.id,
        blockchainId: sourceChainData.id,
        vm: 'evm',
        rewardAddress: '0xF78469161c0C60a6DCa20DE3ce544011c34A2b9C',
        accountPrivateKey: 'cac705d865c356ae8637e56ebf6ce44ad6b9a7118160c3560388d5995a4a9e3f',
      });
    }
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Deploy Your Relayer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
    </div>
  );
};

export default DeployForm;
