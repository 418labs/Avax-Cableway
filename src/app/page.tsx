'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Network, Code, Smartphone } from 'lucide-react';
import DeployForm from '../components/DeployForm';
import ConfirmationModal from '../components/ConfirmationModal/intex';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deploymentData, setDeploymentData] = useState({
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
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-4 text-white">
          Avax-Cableway: <span className="text-red-500">Relayer as a Service</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Deploy your personalized Avalanche Warp Messaging (AWM) relayer with
          just one click!
        </p>
        <Link href="/deploy" className="btn btn-primary inline-flex items-center">
          Deploy Your Relayer
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>

      {showForm && <DeployForm onDeploy={handleDeploy} />}

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirm}
        data={deploymentData}
      />

      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Future Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Network,
              title: 'Sponsored Public Relayer Network',
              description:
                'Access a public network of sponsored relay nodes to enhance communication between subnets on Avalanche.',
            },
            {
              icon: Code,
              title: 'SDK-Integrated Relayer for Developers',
              description:
                'Easily integrate relayers into your applications using an SDK tailored for Avalanche Warp Messaging.',
            },
            {
              icon: Smartphone,
              title: 'Mobile Relayer App for Decentralized Participation',
              description:
                'Participate in the AWM network from anywhere with our mobile app for decentralized relayers.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center backdrop-filter backdrop-blur-lg"
            >
              <feature.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
