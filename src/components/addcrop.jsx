"use client";
import { useState } from "react";

export default function AddNewCropSection() {
  const [newCrop, setNewCrop] = useState({
    name: "",
    type: "",
    description: "",
    quantity: "",
    price: "",
    image: "",
  });

  const [uploadedCrops, setUploadedCrops] = useState([
    {
      id: 1,
      name: "Wheat",
      type: "Grain",
      description: "High-quality wheat from organic farming",
      quantity: "100 kg",
      price: "₹3000",
      image: "/images/wheat.jpg",
    },
    {
      id: 2,
      name: "Rice",
      type: "Grain",
      description: "Organic Basmati rice",
      quantity: "200 kg",
      price: "₹6000",
      image: "/images/rice.jpg",
    },
    // Add more crops as needed
  ]);

  // Handle input changes for the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCrop({ ...newCrop, [name]: value });
  };

  // Handle crop image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewCrop({ ...newCrop, image: URL.createObjectURL(file) });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new crop to the list of uploaded crops
    setUploadedCrops([...uploadedCrops, { ...newCrop, id: uploadedCrops.length + 1 }]);
    // Reset the form
    setNewCrop({
      name: "",
      type: "",
      description: "",
      quantity: "",
      price: "",
      image: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 text-gray-800 p-10">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Add New Crop to Marketplace</h2>

      {/* Crop Upload Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-10">
        <h3 className="text-2xl font-semibold text-green-600 mb-4">Add Crop Details</h3>

        {/* Crop Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Crop Name</label>
          <input
            type="text"
            name="name"
            value={newCrop.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter crop name"
            required
          />
        </div>

        {/* Crop Type */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Crop Type</label>
          <input
            type="text"
            name="type"
            value={newCrop.type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="E.g., Grain, Fruit, Vegetable"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={newCrop.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Describe the quality and other details of the crop"
            required
          />
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Quantity</label>
          <input
            type="text"
            name="quantity"
            value={newCrop.quantity}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter quantity (e.g., 100 kg)"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={newCrop.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter price in ₹"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Crop Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg"
            required
          />
          {newCrop.image && (
            <img
              src={newCrop.image}
              alt="Crop Preview"
              className="w-32 h-32 object-cover rounded-lg mt-4"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
        >
          Add Crop to Marketplace
        </button>
      </form>

      {/* Past Uploaded Products */}
      <section>
        <h3 className="text-2xl font-bold text-green-800 mb-6">Previously Uploaded Crops</h3>

        <div className="grid grid-cols-3 gap-6">
          {uploadedCrops.map((crop) => (
            <div
              key={crop.id}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-300"
            >
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-green-600 mb-2">{crop.name}</h4>
              <p className="text-gray-700">Type: {crop.type}</p>
              <p className="text-gray-700">Quantity: {crop.quantity}</p>
              <p className="text-gray-700 font-bold">Price: ₹{crop.price}</p>
              <p className="text-gray-600 mt-2">{crop.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
