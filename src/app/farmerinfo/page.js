"use client"
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Components for sections
import AddNewCropSection from "@/components/addcrop"; // You need to create this component
import ContractsSection from "@/components/contracts"; // You need to create this component
import ProfileSection from "@/components/profile"; // You need to create this component


const Dashboard = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 text-gray-800 flex">
        
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-br from-purple-900 to-green-700 text-white p-6 shadow-lg">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold">Farmer Dashboard</h2>
          </div>

          <nav>
            <ul className="space-y-6">
              <li>
                <Link
                  to="/add-new-crop"
                  className="block p-4 bg-blue-500 hover:bg-blue-600 text-center rounded-lg transition duration-300"
                >
                  Add New Crop
                </Link>
              </li>
              <li>
                <Link
                  to="/contracts"
                  className="block p-4 bg-green-500 hover:bg-green-600 text-center rounded-lg transition duration-300"
                >
                  Contracts
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="block p-4 bg-purple-500 hover:bg-purple-600 text-center rounded-lg transition duration-300"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="block p-4 bg-indigo-500 hover:bg-indigo-600 text-center rounded-lg transition duration-300"
                >
                  Marketplace
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <motion.main
          className="flex-1 p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/add-new-crop" element={<AddNewCropSection />} />
            <Route path="/contracts" element={<ContractsSection />} />
            <Route path="/profile" element={<ProfileSection />} />
          
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
};

export default Dashboard;
