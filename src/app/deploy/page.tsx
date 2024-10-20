'use client'

import { useState, useEffect } from 'react';
import DeployForm, { DeploymentData } from '@/components/DeployForm';
import ConfirmationModal from '@/components/ConfirmationModal/intex';
import { RefreshCw } from 'lucide-react';
import DeploymentSuccess from '@/components/DeploymentSuccess';

enum ViewState {
  INTIAL,
  LOADING,
  SUCCESS,
  ERROR
}

type DeploymentResponse = {
  address: string;
  privateKey: string;
  awsresult: object;
}


const DeployPage = () => {
  const [viewState, setViewState] = useState(ViewState.INTIAL);
  const [errorMessage, setErrorMessage] = useState('');
  const [deploymentData, setDeploymentData] = useState<DeploymentData | undefined>();
  const [deploymentResponse, setDeploymentResponse] = useState<DeploymentResponse | undefined>();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirm = () => {
    // Here you would typically call an API to deploy the relayer
    console.log('Deploying relayer with:', deploymentData);
    setShowConfirmation(false);
    setViewState(ViewState.LOADING);
    fetch('/api/deployRelayer', {
        method: 'POST',
        body: JSON.stringify({
            sourceChainIds: deploymentData!.sourceIds,
            destinationChainIds: deploymentData!.destinationIds,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => {
        if (response.ok) {
            const json = await response.json();
            setDeploymentResponse(json);
            setViewState(ViewState.SUCCESS);
        } else {
            console.error('Error deploying relayer:', response.status);
            try {
                const json = await response.json();
                console.error('Error deploying relayer:', json.message);
                setErrorMessage(json.message);
            } catch {
                setErrorMessage('Error deploying relayer');
            }
        }
    });
  };

  useEffect(() => {
      if (errorMessage) {
          setViewState(ViewState.ERROR);
      }
  }, [errorMessage]);

  useEffect(() => {
      if (ViewState.ERROR !== viewState) {
          setErrorMessage('');
      }
  }, [viewState]);

  useEffect(() => {
      if (!deploymentData) {
          return;
      }
      setShowConfirmation(true);
  }, [deploymentData]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-red-500">Deploy Your Relayer</h1>
    <div className="bg-gray-800 bg-opacity-50 p-6 items-center rounded-lg backdrop-filter backdrop-blur-lg max-w-2xl mx-auto">
      {viewState === ViewState.INTIAL
        && <DeployForm setDeploymentData={setDeploymentData} />}
      {viewState === ViewState.LOADING &&
        <div className="flex flex-col items-center justify-center">
            <RefreshCw className="w-20 h-20 text-red-500 animate-spin" />
            <p className="text-center">Deploying your relayer...</p>
        </div>
      }
      {viewState === ViewState.SUCCESS &&
        <DeploymentSuccess deploymentResponse={deploymentResponse!} />
      }
      {viewState === ViewState.ERROR && <div>{errorMessage}</div>}
      {deploymentData &&
        <ConfirmationModal
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          onConfirm={handleConfirm}
          data={deploymentData}
        />
      }
    </div>
    </div>
  );
};

export default DeployPage;
