'use client';

import React from 'react';
import { DeploymentData } from '@/components/DeployForm';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  data: DeploymentData;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">Confirm Deployment</h2>
        <p className="mb-4 text-gray-300">Are you sure you want to deploy a relayer with the following settings?</p>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li className="mb-2">
            <span className="font-semibold">Source Chains:</span>
            <div className="pl-4 break-all">{data.sourceIds.join(', ')}</div>
          </li>
          <li className="mb-2">
            <span className="font-semibold">Destination Chains:</span>
            <div className="pl-4 break-all">{data.destinationIds.join(', ')}</div>
          </li>
        </ul>
        <div className="flex justify-end space-x-4">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
