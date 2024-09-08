import React from 'react';

const AddContract = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Add New Contract</h2>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <form>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Product Name</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter product name" />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Quantity (kg)</label>
            <input type="number" className="w-full p-2 border rounded-md" placeholder="Enter quantity" />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Contract Deadline</label>
            <input type="date" className="w-full p-2 border rounded-md" />
          </div>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg">Add Contract</button>
        </form>
      </div>
    </div>
  );
};

export default AddContract;
