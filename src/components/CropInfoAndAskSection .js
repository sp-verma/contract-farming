"use client"
import React, { useState } from "react";

// Components for crop information and asking crop questions
import AskAboutCropSection from "@/components/AskAboutCropSection";
import CropInfoSection from "@/components/CropInfoSection";

const CropInfoAndAskSection = () => {
  const [activeSection, setActiveSection] = useState("cropInfo"); // State to toggle between sections

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-6">
        {/* Buttons to toggle sections */}
        <button
          className={`px-4 py-2 mr-2 rounded-lg ${activeSection === "cropInfo" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveSection("cropInfo")}
        >
          View Crop Info
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeSection === "askCrop" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveSection("askCrop")}
        >
          Ask About Crop
        </button>
      </div>

      {/* Conditionally render the Crop Info or Ask section */}
      {activeSection === "cropInfo" ? (
        <CropInfoSection />  
      ) : (
        <AskAboutCropSection />  
      )}
    </div>
  );
};

export default CropInfoAndAskSection;
