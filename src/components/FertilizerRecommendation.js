"use client";
import React, { useState } from 'react';

const FertilizerRecommendationForm = () => {
  const [formData, setFormData] = useState({
    cropType: '',
    soilMoisture: '',
    pHLevel: '',
    season: '',
  });

  const [recommendation, setRecommendation] = useState(''); // State to store the recommendation
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy recommendation logic based on pH level and crop type
    let fertilizerRecommendation = '';
    if (formData.pHLevel < 6) {
      fertilizerRecommendation = 'Use Lime to raise the soil pH and apply NPK (10-26-26).';
    } else if (formData.pHLevel > 7) {
      fertilizerRecommendation = 'Use Sulfur to lower soil pH and apply NPK (24-0-15).';
    } else {
      fertilizerRecommendation = 'Apply balanced NPK fertilizer (20-20-20).';
    }

    // Set the recommendation and mark form as submitted
    setRecommendation(`Fertilizer Recommendation for ${formData.cropType}: ${fertilizerRecommendation}`);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4 text-center">Fertilizer Recommendation</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Crop Type:</label>
            <input
              type="text"
              name="cropType"
              value={formData.cropType}
              onChange={handleChange}
              required
              className="border rounded-lg w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Soil Moisture (%):</label>
            <input
              type="number"
              name="soilMoisture"
              value={formData.soilMoisture}
              onChange={handleChange}
              required
              className="border rounded-lg w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">pH Level:</label>
            <input
              type="number"
              name="pHLevel"
              value={formData.pHLevel}
              onChange={handleChange}
              required
              className="border rounded-lg w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Season:</label>
            <input
              type="text"
              name="season"
              value={formData.season}
              onChange={handleChange}
              required
              className="border rounded-lg w-full p-2"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Get Recommendation
            </button>
          </div>
        </form>

        {/* Display recommendation if the form is submitted */}
        {submitted && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg">
            <h4 className="font-bold">Recommendation:</h4>
            <p>{recommendation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FertilizerRecommendationForm;
