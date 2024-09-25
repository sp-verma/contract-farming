"use client";
import React, { useState } from 'react';
import SoilTestForm from './SoilTestForm';
import FertilizerRecommendationForm from './FertilizerRecommendationForm';

const SoilTestPage = () => {
  const [soilData, setSoilData] = useState(null); // Store soil test data
  const [timeSlot, setTimeSlot] = useState(null); // Store soil test time slot
  const [fertilizerVisible, setFertilizerVisible] = useState(false); // Toggle fertilizer form

  const handleSoilTestSubmit = (data) => {
    setSoilData(data);

    // Set a dummy time slot for the soil test
    const testDate = new Date();
    const timeSlotGenerated = `${testDate.toLocaleDateString()} at ${testDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    setTimeSlot(timeSlotGenerated); // Set time slot after form submission
  };

  const handleFertilizerSubmit = (data) => {
    console.log('Fertilizer Recommendation Data:', data);
    setFertilizerVisible(false); // Close fertilizer form after submission
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Soil Test and Fertilizer Recommendation</h1>

      <div className="flex justify-center space-x-8 mb-6">
        {/* Show Soil Test Form */}
        <button
          onClick={() => setFertilizerVisible(false)} // Hide fertilizer form if open
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Start Soil Test
        </button>

        {/* Show Fertilizer Recommendation Form */}
        <button
          onClick={() => setFertilizerVisible(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Fertilizer Recommendation
        </button>
      </div>

      {/* Soil Test Form directly on the page */}
      {!fertilizerVisible && (
        <SoilTestForm onSubmit={handleSoilTestSubmit} />
      )}

      {/* Fertilizer Recommendation Form directly on the page */}
      {fertilizerVisible && (
        <FertilizerRecommendationForm onSubmit={handleFertilizerSubmit} />
      )}

      {/* Display soil test data and time slot after submission */}
      {soilData && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Soil Test Results:</h2>
          <p><strong>Name:</strong> {soilData.name}</p>
          <p><strong>Location:</strong> {soilData.location}</p>
          <p><strong>Crop Type:</strong> {soilData.cropType}</p>
          <p><strong>Soil Moisture:</strong> {soilData.soilMoisture}%</p>
          <p><strong>pH Level:</strong> {soilData.pHLevel}</p>
          <p><strong>Nutrient Levels (N-P-K):</strong> {soilData.nutrientLevels}</p>

          {/* Show the scheduled time slot for the soil test */}
          <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
            <h4 className="font-bold">Scheduled Soil Test Time:</h4>
            <p>{timeSlot}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SoilTestPage;
