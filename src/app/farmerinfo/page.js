"use client";
import { useState } from 'react';
import { FaSeedling, FaClipboardList, FaUpload, FaComments, FaChartBar, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Sidebar Links
const links = [
  { name: 'Contracts', icon: <FaClipboardList /> },
  { name: 'Crops', icon: <FaSeedling /> },
  { name: 'Upload Image', icon: <FaUpload /> },
  { name: 'Chat', icon: <FaComments /> },
  { name: 'Analytics', icon: <FaChartBar /> },
  { name: 'Profile', icon: <FaUser /> }
];

// Sample contracts and crops
const contracts = [
  { id: 1, name: 'Contract with AgriTech', status: 'Active', dueDate: '2024-12-15' },
  { id: 2, name: 'Contract with Green Plate', status: 'Pending', dueDate: '2024-10-05' }
];

const crops = [
  { name: 'Wheat', area: '5 acres', status: 'Growing', harvestDate: '2024-11-20' },
  { name: 'Rice', area: '10 acres', status: 'Harvesting', harvestDate: '2024-12-01' }
];

export default function FarmerDashboard() {
  const [selectedSection, setSelectedSection] = useState('Contracts');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.div
        className="w-64 bg-green-600 text-white"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6 text-2xl font-bold">Farmer Dashboard</div>
        <ul className="mt-6 space-y-4">
          {links.map((link) => (
            <li
              key={link.name}
              onClick={() => setSelectedSection(link.name)}
              className="flex items-center p-4 hover:bg-green-700 cursor-pointer"
            >
              {link.icon}
              <span className="ml-4">{link.name}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-4">{selectedSection}</h1>

        {/* Contracts Section */}
        {selectedSection === 'Contracts' && (
          <div>
            {contracts.map((contract) => (
              <div key={contract.id} className="bg-white p-4 rounded-lg shadow mb-4">
                <h2 className="text-2xl">{contract.name}</h2>
                <p>Status: {contract.status}</p>
                <p>Due Date: {contract.dueDate}</p>
              </div>
            ))}
          </div>
        )}

        {/* Crops Section */}
        {selectedSection === 'Crops' && (
          <div>
            {crops.map((crop) => (
              <div key={crop.name} className="bg-white p-4 rounded-lg shadow mb-4">
                <h2 className="text-2xl">{crop.name}</h2>
                <p>Area: {crop.area}</p>
                <p>Status: {crop.status}</p>
                <p>Harvest Date: {crop.harvestDate}</p>
              </div>
            ))}
          </div>
        )}

        {/* Image Upload Section */}
        {selectedSection === 'Upload Image' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <input type="file" className="mb-4" />
            <button className="bg-blue-500 text-white p-2 rounded">Upload Image</button>
          </div>
        )}

        {/* Chat Section */}
        {selectedSection === 'Chat' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl mb-4">Chat with Contractors</h2>
            {/* Chat Interface */}
            <div className="border p-4 rounded-lg">
              <p><strong>AgriTech:</strong> Please upload the crop images for inspection.</p>
              <p><strong>Farmer:</strong> Sure, I’ll send them shortly.</p>
            </div>
            <input type="text" className="border p-2 rounded w-full mt-4" placeholder="Type a message..." />
          </div>
        )}

        {/* Analytics Section */}
        {selectedSection === 'Analytics' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl mb-4">Financial Summary</h2>
            {/* Add Analytics Graph */}
          </div>
        )}

        {/* Profile Section */}
        {selectedSection === 'Profile' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl mb-4">Farmer Profile</h2>
            {/* Add Profile Info */}
          </div>
        )}
      </div>
    </div>
  );
}
