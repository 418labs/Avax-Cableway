'use client'

import React from 'react';
import DeployForm from '../../components/DeployForm';
import ConfirmationModal from '../../components/ConfirmationModal/intex';

const DeployPage = () => {
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [deploymentData, setDeploymentData] = React.useState({
    sourceRPC: '',
    destinationRPC: '',
    pollingFrequency: '',
  });

  const handleDeploy = (data: React.SetStateAction<{ sourceRPC: string; destinationRPC: string; pollingFrequency: string; }>) => {
    setDeploymentData(data);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    // Here you would typically call an API to deploy the relayer
    console.log('Deploying relayer with:', deploymentData);
    setShowConfirmation(false);
    // You might want to redirect to a success page or show a success message here
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-red-500">Deploy Your Relayer</h1>
      <DeployForm onDeploy={handleDeploy} />
      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirm}
        data={deploymentData}
      />
    </div>
  );
};

export default DeployPage;