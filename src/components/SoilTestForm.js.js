"use client "
import React, { useState } from 'react';

const SoilTestForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    cropType: '',
    soilMoisture: '',
    pHLevel: '',
    nutrientLevels: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass data to parent component
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h3 className="text-2xl font-bold mb-4">Soil Test Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
          />
        </div>
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
          <label className="block text-sm font-medium mb-2">Nutrient Levels (N-P-K):</label>
          <input
            type="text"
            name="nutrientLevels"
            value={formData.nutrientLevels}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit Soil Test
        </button>
      </form>
    </div>
  );
};

export default SoilTestForm;
