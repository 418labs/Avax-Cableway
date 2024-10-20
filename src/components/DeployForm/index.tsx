'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { L1_CHAINS, L1Data } from '@/constants';

interface DeployFormProps {
  setDeploymentData: (data: DeploymentData) => void;
}

export type DeploymentData = {
  sourceIds: string[];
  destinationIds: string[];
}

const CustomSelect = ({ value, onChange, options, placeholder }: {
  value: string;
  onChange: (value: string) => void;
  options: Record<string, L1Data>;
  placeholder: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-gray-700 rounded-md flex items-center justify-between"
      >
        {value ? (
          <div className="flex items-center">
            <Image src={options[value].logoUri} alt={options[value].name} width={24} height={24} className="mr-2" />
            <span>{options[value].name}</span>
          </div>
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
          {Object.entries(options).map(([key, chain]) => (
            <li
              key={key}
              onClick={() => {
                onChange(key);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer flex items-center"
            >
              <Image src={chain.logoUri} alt={chain.name} width={24} height={24} className="mr-2" />
              <span>{chain.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

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
        <label htmlFor="sourceChain" className="block text-sm font-medium text-gray-300 mb-1">
          Source Chain:
        </label>
        <CustomSelect
          id="sourceChain"
          value={sourceChain}
          onChange={setSourceChain}
          options={L1_CHAINS}
          placeholder="Select Source Chain"
        />
      </div>
      <div>
        <label htmlFor="destinationChain" className="block text-sm font-medium text-gray-300 mb-1">
          Destination Chain:
        </label>
        <CustomSelect
          id="destinationChain"
          value={destinationChain}
          onChange={setDestinationChain}
          options={L1_CHAINS}
          placeholder="Select Destination Chain"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Deploy Relayer
        </button>
      </div>
    </form>
  );
};

export default DeployForm;
