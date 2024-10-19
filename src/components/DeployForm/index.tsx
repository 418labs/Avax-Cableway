'use client';

import React, { useState } from 'react';

interface DeployFormProps {
  onDeploy: (data: {
    sourceRPC: string;
    destinationRPC: string;
    pollingFrequency: string;
    subnetId: string;
    blockchainId: string;
    vm: string;
    rewardAddress: string;
    accountPrivateKey: string;
  }) => void;
}

const DeployForm: React.FC<DeployFormProps> = ({ onDeploy }) => {
  const [sourceRPC, setSourceRPC] = useState('https://api.avax-test.network/ext/bc/C/rpc');
  const [destinationRPC, setDestinationRPC] = useState('https://subnets.avax.network/dispatch/testnet/rpc');
  const [pollingFrequency, setPollingFrequency] = useState('1000');
  const [subnetId, setSubnetId] = useState('11111111111111111111111111111111LpoYY');
  const [blockchainId, setBlockchainId] = useState('yH8D7ThNJkxmtkuv2jgBa4P1Rn3Qpr4pPr7QYNfcdoS6k6HWp');
  const [vm, setVm] = useState('evm');
  const [rewardAddress, setRewardAddress] = useState('0xF78469161c0C60a6DCa20DE3ce544011c34A2b9C');
  const [accountPrivateKey, setAccountPrivateKey] = useState('cac705d865c356ae8637e56ebf6ce44ad6b9a7118160c3560388d5995a4a9e3f');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDeploy({ sourceRPC, destinationRPC, pollingFrequency, subnetId, blockchainId, vm, rewardAddress, accountPrivateKey });
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
        <div>
          <label htmlFor="subnetId" className="block text-sm font-medium text-gray-300">
            Subnet ID:
          </label>
          <input
            type="text"
            id="subnetId"
            value={subnetId}
            onChange={(e) => setSubnetId(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="blockchainId" className="block text-sm font-medium text-gray-300">
            Blockchain ID:
          </label>
          <input
            type="text"
            id="blockchainId"
            value={blockchainId}
            onChange={(e) => setBlockchainId(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="vm" className="block text-sm font-medium text-gray-300">
            Virtual Machine (VM):
          </label>
          <input
            type="text"
            id="vm"
            value={vm}
            onChange={(e) => setVm(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="rewardAddress" className="block text-sm font-medium text-gray-300">
            Reward Address:
          </label>
          <input
            type="text"
            id="rewardAddress"
            value={rewardAddress}
            onChange={(e) => setRewardAddress(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="accountPrivateKey" className="block text-sm font-medium text-gray-300">
            Account Private Key:
          </label>
          <input
            type="text"
            id="accountPrivateKey"
            value={accountPrivateKey}
            onChange={(e) => setAccountPrivateKey(e.target.value)}
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
