"use client";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Components for sections
import AddNewCropSection from "@/components/addcrop";
import ContractsSection from "@/components/contracts";
import ProfileSection from "@/components/profile";
import WeatherSection from "@/components/weatherSection"; 
import CropInfoAndAskSection from "@/components/CropInfoAndAskSection ";
import ScanCropForDiseaseSection from "@/components/ScanCropForDiseaseSection";
import SoilTestPage from "@/components/SoilTestForm.js"; // Import Soil Test component
import FertilizerRecommendation from "@/components/FertilizerRecommendation"; // Import Fertilizer Recommendation component

const Dashboard = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

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
                  to="/weather"
                  className="block p-4 bg-indigo-500 hover:bg-indigo-600 text-center rounded-lg transition duration-300"
                >
                  Weather Info
                </Link>
              </li>
              <li>
                <Link
                  to="/crop-info-ask"
                  className="block p-4 bg-yellow-500 hover:bg-yellow-600 text-center rounded-lg transition duration-300"
                >
                  Crop Info & Ask Crop
                </Link>
              </li>
              <li>
                <Link
                  to="/scan-crop"
                  className="block p-4 bg-teal-500 hover:bg-teal-600 text-center rounded-lg transition duration-300"
                >
                  Scan Crop for Disease
                </Link>
              </li>
              {/* Separate options for Soil Test and Fertilizer Recommendation */}
              <li>
                <Link
                  to="/soil-test"
                  className="block p-4 bg-red-500 hover:bg-red-600 text-center rounded-lg transition duration-300"
                >
                  Soil Test
                </Link>
              </li>
              <li>
                <Link
                  to="/fertilizer-recommendation"
                  className="block p-4 bg-orange-500 hover:bg-orange-600 text-center rounded-lg transition duration-300"
                >
                  Fertilizer Recommendation
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
            <Route path="/weather" element={<WeatherSection />} />
            <Route path="/crop-info-ask" element={<CropInfoAndAskSection />} />
            <Route path="/scan-crop" element={<ScanCropForDiseaseSection />} />
            {/* New Routes */}
            <Route path="/soil-test" element={<SoilTestPage />} />
            <Route path="/fertilizer-recommendation" element={<FertilizerRecommendation />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
};

export default Dashboard;
