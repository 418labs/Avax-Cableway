'use client';

import React, { useState } from 'react'

const DeployForm: React.FC = () => {
  const [sourceRPC, setSourceRPC] = useState('')
  const [destRPC, setDestRPC] = useState('')
  const [pollingFrequency, setPollingFrequency] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted', { sourceRPC, destRPC, pollingFrequency })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sourceRPC">
          Source L1 RPC Endpoint:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="sourceRPC"
          type="text"
          placeholder="https://rpc.example.com"
          value={sourceRPC}
          onChange={(e) => setSourceRPC(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destRPC">
          Destination L1 RPC Endpoint:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="destRPC"
          type="text"
          placeholder="https://rpc.example.com"
          value={destRPC}
          onChange={(e) => setDestRPC(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pollingFrequency">
          Polling Frequency (ms):
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="pollingFrequency"
          type="number"
          placeholder="1000"
          value={pollingFrequency}
          onChange={(e) => setPollingFrequency(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Deploy Relayer
        </button>
      </div>
    </form>
  )
}

export default DeployForm
