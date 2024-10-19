'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Layers, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);

  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };

  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg h-20 p-0">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={80}
            className="h-full w-auto object-cover"
          />
        </Link>
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
