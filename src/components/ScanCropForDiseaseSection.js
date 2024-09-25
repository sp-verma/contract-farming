"use client";
import React, { useState, useRef } from 'react';
import { FaCamera, FaCheckCircle } from 'react-icons/fa'; // Importing camera and check icons

const ScanCropForDiseaseSection = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [imageCaptured, setImageCaptured] = useState(false);
  const [diseaseDetected, setDiseaseDetected] = useState(null);
  const [imageSrc, setImageSrc] = useState(null); // Image src for captured image
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleOpenCamera = () => {
    if (!isCameraOn) {
      setIsCameraOn(true);
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Error accessing camera: ", err));
    }
  };

  const handleCaptureClick = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageDataUrl = canvas.toDataURL();
    setImageSrc(imageDataUrl); // Set the image for preview
    setImageCaptured(true);

    // Simulate a dummy disease result after image is captured
    setTimeout(() => {
      setDiseaseDetected("Dummy Disease Detected: Blight");
    }, 2000);
  };

  return (
    <div className="text-center p-8">
      <h2 className="text-4xl font-extrabold mb-6 text-green-700">Scan Crop for Disease</h2>

      {/* Section for Info about the Scan */}
      <div className="mb-8">
        <FaCamera className="text-7xl text-green-600 mx-auto mb-4 cursor-pointer" onClick={handleOpenCamera} /> {/* Camera Icon */}
        <p className="text-lg font-medium text-gray-700">
          Use our crop scanning feature to detect diseases early. Capture an image of your crop, and our system will analyze it for any visible signs of disease.
        </p>
        <p className="text-lg font-medium mt-2 text-gray-600">
          Receive instant feedback on the health of your crops along with recommendations for treatment.
        </p>
      </div>

      {/* Button for Capturing Image */}
      <div>
        {!imageCaptured ? (
          <div>
            <p className="mb-4 text-lg font-medium">Click below to open your camera:</p>
            {isCameraOn && (
              <button
                onClick={handleCaptureClick}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition duration-300"
              >
                <FaCamera className="text-2xl" /> Click Image
              </button>
            )}
          </div>
        ) : (
          <div className="mt-6">
            <p className="text-lg text-green-600">Image captured successfully!</p>
            {diseaseDetected ? (
              <div className="mt-4 p-4 bg-red-200 text-red-800 rounded-lg">
                <p>{diseaseDetected}</p>
              </div>
            ) : (
              <p>Scanning for disease...</p>
            )}
          </div>
        )}
      </div>

      {/* Camera Preview */}
      {isCameraOn && !imageCaptured && (
        <div className="mt-8">
          <video ref={videoRef} autoPlay className="border-2 border-gray-300 rounded-lg"></video>
        </div>
      )}

      {/* Display Captured Image */}
      {imageCaptured && imageSrc && (
        <div className="mt-8">
          <p className="text-lg text-gray-600 mb-4">Here is your captured image:</p>
          <img src={imageSrc} alt="Captured Crop" className="mx-auto border-2 border-gray-300 rounded-lg" />
        </div>
      )}

      {/* Hidden Canvas for Image Capture */}
      <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default ScanCropForDiseaseSection;
