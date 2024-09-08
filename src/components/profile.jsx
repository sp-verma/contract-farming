"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProfileSection = () => {
  // Sample product and earnings data for graphs
  const productData = {
    labels: ['Wheat', 'Rice', 'Corn', 'Soybean', 'Cotton'],
    datasets: [
      {
        label: 'Products Sold',
        data: [50, 30, 45, 25, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const earningsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Earnings (₹)',
        data: [15000, 20000, 18000, 22000, 25000],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Placeholder data for order status
  const orderSummary = {
    totalProductsAdded: 100,
    totalProductsSold: 60,
    pendingOrders: 15,
    completedOrders: 45,
  };

  return (
    <motion.div
      className="p-6 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Farmer Information */}
      <div className="flex items-center mb-6">
        <img
          src="/images/farmer-profile.jpg"
          alt="Farmer"
          className="w-16 h-16 rounded-full border-4 border-green-500"
        />
        <div className="ml-4">
          <h2 className="text-2xl font-bold">Farmer Name</h2>
          <p className="text-gray-600">Total Products Added: {orderSummary.totalProductsAdded}</p>
          <p className="text-gray-600">Total Products Sold: {orderSummary.totalProductsSold}</p>
          <p className="text-gray-600">Pending Orders: {orderSummary.pendingOrders}</p>
          <p className="text-gray-600">Total Earnings: ₹75,000</p>
        </div>
      </div>

      {/* Activity Overview */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Marketplace Activity</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-blue-700">Products Added</h4>
            <p className="text-xl font-semibold">{orderSummary.totalProductsAdded}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-green-700">Products Sold</h4>
            <p className="text-xl font-semibold">{orderSummary.totalProductsSold}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-yellow-700">Pending Orders</h4>
            <p className="text-xl font-semibold">{orderSummary.pendingOrders}</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-purple-700">Completed Orders</h4>
            <p className="text-xl font-semibold">{orderSummary.completedOrders}</p>
          </div>
        </div>
      </div>

      {/* Graph: Products Sold */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Products Sold Over Time</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Bar
            data={productData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                tooltip: {
                  callbacks: {
                    label: (context) => `${context.dataset.label}: ${context.raw} units`,
                  },
                },
              },
              scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true },
              },
            }}
          />
        </div>
      </div>

      {/* Graph: Earnings Over Time */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Earnings Over Time</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Bar
            data={earningsData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                tooltip: {
                  callbacks: {
                    label: (context) => `${context.dataset.label}: ₹${context.raw}`,
                  },
                },
              },
              scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true },
              },
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSection;
