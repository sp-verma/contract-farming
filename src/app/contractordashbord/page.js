"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ContractorDashboard = () => {
  const [currentSection, setCurrentSection] = useState("dashboard");
  const [newContract, setNewContract] = useState({ farmerName: "", imageUrl: "", status: "Pending" });

  // Sample data for financial stats
  const financialData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Contracts (Units)",
        data: [500, 600, 700, 800, 750, 780],
        backgroundColor: "#6dbd6b",
        borderColor: "#468e46",
        borderWidth: 1,
      },
    ],
  };

  // Sample contracts data
  const contracts = [
    { id: 1, imageUrl: "contract-image-url-1", farmerName: "Farmer A", status: "Active" },
    { id: 2, imageUrl: "contract-image-url-2", farmerName: "Farmer B", status: "Pending" },
    { id: 3, imageUrl: "contract-image-url-3", farmerName: "Farmer C", status: "Completed" },
    { id: 4, imageUrl: "contract-image-url-4", farmerName: "Farmer D", status: "Active" },
    { id: 5, imageUrl: "contract-image-url-5", farmerName: "Farmer E", status: "Pending" },
  ];

  // Sample data for Bids & Negotiations
  const bidsData = [
    { id: 1, farmerName: "Farmer A", bidAmount: "₹50,000", status: "Negotiation" },
    { id: 2, farmerName: "Farmer B", bidAmount: "₹70,000", status: "Accepted" },
    { id: 3, farmerName: "Farmer C", bidAmount: "₹30,000", status: "Rejected" },
    { id: 4, farmerName: "Farmer D", bidAmount: "₹90,000", status: "Pending" },
    { id: 5, farmerName: "Farmer E", bidAmount: "₹40,000", status: "Negotiation" },
  ];

  // Sample data for Payments & Financials
  const paymentData = [
    { id: 1, farmerName: "Farmer A", amount: "₹1,00,000", date: "12/08/2024", status: "Paid" },
    { id: 2, farmerName: "Farmer B", amount: "₹75,000", date: "05/09/2024", status: "Pending" },
    { id: 3, farmerName: "Farmer C", amount: "₹90,000", date: "28/08/2024", status: "Failed" },
    { id: 4, farmerName: "Farmer D", amount: "₹65,000", date: "15/07/2024", status: "Paid" },
    { id: 5, farmerName: "Farmer E", amount: "₹1,20,000", date: "02/09/2024", status: "Pending" },
  ];

  // Handle form input changes for new contract
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContract({ ...newContract, [name]: value });
  };

  // Handle form submission for new contract
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to add the new contract
    console.log("New contract added:", newContract);
    setNewContract({ farmerName: "", imageUrl: "", status: "Pending" });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gradient-to-r from-green-500 to-green-700 text-white p-6 shadow-lg">
        <div className="flex items-center mb-6">
          <img
            src="contractor-image-url"
            alt="Contractor Profile"
            className="w-16 h-16 rounded-full border-4 border-white"
          />
          <div className="ml-4">
            <h2 className="text-lg font-bold">John Doe</h2>
            <p>Contractor</p>
          </div>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="#dashboard"
                className={`text-lg hover:text-gray-300 cursor-pointer ${
                  currentSection === "dashboard" ? "text-yellow-300 font-semibold" : ""
                }`}
                onClick={() => setCurrentSection("dashboard")}
              >
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#bids"
                className={`text-lg hover:text-gray-300 cursor-pointer ${
                  currentSection === "bids" ? "text-yellow-300 font-semibold" : ""
                }`}
                onClick={() => setCurrentSection("bids")}
              >
                Bids & Negotiations
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#payments"
                className={`text-lg hover:text-gray-300 cursor-pointer ${
                  currentSection === "payments" ? "text-yellow-300 font-semibold" : ""
                }`}
                onClick={() => setCurrentSection("payments")}
              >
                Payments & Financials
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#monitor"
                className={`text-lg hover:text-gray-300 cursor-pointer ${
                  currentSection === "monitor" ? "text-yellow-300 font-semibold" : ""
                }`}
                onClick={() => setCurrentSection("monitor")}
              >
                Monitor Your Contracts
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        {currentSection === "dashboard" && (
          <section id="dashboard">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold">Green Valley Contract</h2>
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                + Add Contract
              </button>
            </div>

            {/* New Contract Form */}
            <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Add New Contract</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Farmer Name</label>
                <input
                  type="text"
                  name="farmerName"
                  value={newContract.farmerName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Farmer Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Contract Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={newContract.imageUrl}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Image URL"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  name="status"
                  value={newContract.status}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="Pending">Pending</option>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Add Contract
              </button>
            </form>
          </section>
        )}

        {/* Monitor Your Contracts */}
        {currentSection === "monitor" && (
          <section id="monitor">
            <h2 className="text-2xl font-semibold mb-6">Monitor Your Contracts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contracts.map((contract) => (
                <div key={contract.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <img
                    src={contract.imageUrl}
                    alt="Contract"
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-lg font-semibold">{contract.farmerName}</h3>
                  <p className="text-sm text-gray-600">Status: {contract.status}</p>
                  <div className="mt-4">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mr-2">
                      Chat with Farmer
                    </button>
                    <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                      View Image
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bids & Negotiations */}
        {currentSection === "bids" && (
          <section id="bids">
            <h2 className="text-2xl font-semibold mb-6">Bids & Negotiations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bidsData.map((bid) => (
                <div key={bid.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold">{bid.farmerName}</h3>
                  <p className="text-sm text-gray-600">Bid Amount: {bid.bidAmount}</p>
                  <p className="text-sm text-gray-600">Status: {bid.status}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Payments & Financials */}
        {currentSection === "payments" && (
          <section id="payments">
            <h2 className="text-2xl font-semibold mb-6">Payments & Financials</h2>
            <Bar data={financialData} />
          </section>
        )}
      </main>
    </div>
  );
};

export default ContractorDashboard;
