'use client';

import { useState } from 'react';
import { CircleCheck, Copy, Eye, EyeOff } from 'lucide-react';

interface DeploymentResponse {
  address: string;
  privateKey: string;
}

interface Props {
  deploymentResponse: DeploymentResponse;
}

const DeploymentSuccess = ({ deploymentResponse }: Props) => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <CircleCheck className="w-20 h-20 text-green-500" />
      <h2 className="text-2xl font-bold mb-4 text-center">Success!</h2>
      <div className="w-full max-w-md">
        <p className="mb-4">Your relayer has been deployed successfully!</p>
        
        <div className="mb-4">
          <p className="font-semibold mb-2">Relayer Address:</p>
          <div className="flex items-center">
            <input
              type="text"
              readOnly
              value={deploymentResponse.address}
              className="flex-grow p-2 rounded-l bg-gray-700"
            />
            <button
              onClick={() => copyToClipboard(deploymentResponse.address)}
              className="p-2 bg-red-500 text-white rounded-r hover:bg-red-600"
            >
              <Copy size={20} />
            </button>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-semibold mb-2">Private Key:</p>
          <div className="flex items-center">
            <input
              type={showPrivateKey ? 'text' : 'password'}
              readOnly
              value={deploymentResponse.privateKey}
              className="flex-grow p-2 rounded-l bg-gray-700"
            />
            <button
              onClick={() => copyToClipboard(deploymentResponse.privateKey)}
              className="p-2 bg-red-500 text-white hover:bg-red-600"
            >
              <Copy size={20} />
            </button>
            <button
              onClick={() => setShowPrivateKey(!showPrivateKey)}
              className="p-2 bg-gray-500 text-white rounded-r hover:bg-gray-600"
            >
              {showPrivateKey ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentSuccess;
