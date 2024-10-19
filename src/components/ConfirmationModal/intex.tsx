'use client';
import React from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  data: {
    sourceRPC: string;
    destinationRPC: string;
    pollingFrequency: string;
  };
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Confirm Deployment</h2>
        <p className="mb-4">Are you sure you want to deploy a relayer with the following settings?</p>
        <ul className="list-disc list-inside mb-4">
          <li>Source RPC: {data.sourceRPC}</li>
          <li>Destination RPC: {data.destinationRPC}</li>
          <li>Polling Frequency: {data.pollingFrequency} ms</li>
        </ul>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn btn-primary">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;