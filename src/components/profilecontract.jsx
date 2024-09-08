import React from 'react';

const Profile = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Contractor Profile</h2>
      <div className="flex items-center mb-6">
        <img
          src="/images/contractor-profile.jpg"
          alt="Contractor"
          className="w-20 h-20 rounded-full border-4 border-blue-500"
        />
        <div className="ml-4">
          <h3 className="text-2xl font-bold">Contractor Name</h3>
          <p className="text-gray-600">Total Contracts: 30</p>
          <p className="text-gray-600">Total Products Purchased: 2000 kg</p>
          <p className="text-gray-600">Total Earnings: ₹2,00,000</p>
        </div>
      </div>

      <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-2xl font-semibold mb-4">Purchase History</h3>
        <ul>
          <li className="mb-2">Wheat - 500 kg - Purchased on 01/03/2024</li>
          <li className="mb-2">Rice - 300 kg - Purchased on 15/03/2024</li>
          <li className="mb-2">Corn - 400 kg - Purchased on 05/04/2024</li>
          <li className="mb-2">Soybean - 300 kg - Purchased on 20/04/2024</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
