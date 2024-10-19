'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Layers, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);

  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };

  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">Sleet</Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-1 hover:text-red-500 transition-colors">
            <Home size={18} />
            <span>Home</span>
          </Link>
          {isConnected ? (
            <>
              <Link href="/deployments" className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                <Layers size={18} />
                <span>Deployments</span>
              </Link>
              <Link href="/dashboard" className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </Link>
              <button
                onClick={toggleConnection}
                className="btn btn-primary"
              >
                Disconnect
              </button>
            </>
          ) : (
            <button
              onClick={toggleConnection}
              className="btn btn-primary"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;