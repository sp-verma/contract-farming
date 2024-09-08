"use client";
import React, { useState } from 'react';
import { FaIndustry, FaWeightHanging, FaMoneyBillWave, FaSearch, FaTag, FaFilter } from 'react-icons/fa';

const Marketplace = () => {
  const [activeSection, setActiveSection] = useState('products');
  const [productFilter, setProductFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [contractFilter, setContractFilter] = useState('');

  const products = [
    { id: 1, name: 'Wheat', price: '100', unit: 'kg', quality: 'High', company: 'AgriCorp', image: 'https://cdn.britannica.com/80/157180-050-7B906E02/Heads-wheat-grains.jpg' },
    { id: 2, name: 'Rice', price: '80', unit: 'kg', quality: 'Medium', company: 'RiceWorld', image: 'https://media.istockphoto.com/id/1014182360/photo/texture-with-of-barley-malt-for-beer-pale-ale-pilsen.jpg?s=612x612&w=0&k=20&c=2xTAPcwgHXJym1CmsPMCaj7smxaSrvX3shTULlEhTCM=' },
    { id: 3, name: 'Corn', price: '60', unit: 'kg', quality: 'Low', company: 'GrainFarm', image: 'https://www.shutterstock.com/image-photo/single-ear-corn-isolated-on-260nw-793795156.jpg' },
    { id: 4, name: 'Barley', price: '90', unit: 'kg', quality: 'Medium', company: 'BarleyPros', image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295268/barley-grains-in-a-wooden-bowl.jpg' },
    { id: 5, name: 'Soybeans', price: '150', unit: 'kg', quality: 'High', company: 'SoyBest', image: 'https://www.shutterstock.com/image-photo/soy-bean-mature-seeds-immature-260nw-1467898517.jpg' },
    { id: 6, name: 'Oats', price: '70', unit: 'kg', quality: 'Medium', company: 'OatHarvest', image: 'https://media.istockphoto.com/id/185007888/photo/rolled-oats-in-a-bowl.jpg?s=612x612&w=0&k=20&c=VPCb7ESkEf9zUBh-9IhpmLWDk9_Dfvgwb-KUkhdtSj8=' },
  ];

  const contracts = [
    { id: 1, title: 'Wheat Export Contract', price: '500000', description: '500 tons of high-quality wheat required for international export.', company: 'GlobalGrains', image: 'https://cdn.britannica.com/80/157180-050-7B906E02/Heads-wheat-grains.jpg' },
    { id: 2, title: 'Corn Supply Contract', price: '300000', description: '300 tons of corn for animal feed supply.', company: 'FeedCorp', image: 'https://www.shutterstock.com/image-photo/single-ear-corn-isolated-on-260nw-793795156.jpg' },
    { id: 3, title: 'Soybean Oil Contract', price: '400000', description: '400 tons of soybeans for oil extraction.', company: 'OilMills', image: 'https://www.shutterstock.com/image-photo/soy-bean-mature-seeds-immature-260nw-1467898517.jpg' },
    { id: 4, title: 'Barley for Brewery', price: '200000', description: '200 tons of barley for brewery production.', company: 'BrewMasters', image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295268/barley-grains-in-a-wooden-bowl.jpg' },
    { id: 5, title: 'Oats for Cereal Production', price: '150000', description: '150 tons of oats required for cereal manufacturing.', company: 'OatFactory', image: 'https://media.istockphoto.com/id/185007888/photo/rolled-oats-in-a-bowl.jpg?s=612x612&w=0&k=20&c=VPCb7ESkEf9zUBh-9IhpmLWDk9_Dfvgwb-KUkhdtSj8=' },
    { id: 6, title: 'Millet for Food Manufacturing', price: '100000', description: '100 tons of millet for food processing.', company: 'GrainFoodCo', image: 'https://media.istockphoto.com/id/185007888/photo/rolled-oats-in-a-bowl.jpg?s=612x612&w=0&k=20&c=VPCb7ESkEf9zUBh-9IhpmLWDk9_Dfvgwb-KUkhdtSj8=' },
  ];

  const handleProductFilterChange = (e) => setProductFilter(e.target.value);
  const handlePriceFilterChange = (e) => setPriceFilter(e.target.value);
  const handleContractFilterChange = (e) => setContractFilter(e.target.value);

  const filteredProducts = products.filter(product => {
    const matchesName = product.name.toLowerCase().includes(productFilter.toLowerCase());
    const matchesPrice = priceFilter ? parseInt(product.price) <= parseInt(priceFilter) : true;
    return matchesName && matchesPrice;
  });

  const filteredContracts = contracts.filter(contract =>
    contract.title.toLowerCase().includes(contractFilter.toLowerCase())
  );

  return (
    <div className="p-6 bg-blue-400 font-sans">
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-6 py-2 rounded-lg transition-colors ${
            activeSection === 'products' ? 'bg-black text-white' : 'bg-blue-200 text-black'
          }`}
          onClick={() => setActiveSection('products')}
        >
          Agri Products
        </button>
        <button
          className={`px-6 py-2 rounded-lg transition-colors ${
            activeSection === 'contracts' ? 'bg-black text-white' : 'bg-blue-200 text-black'
          }`}
          onClick={() => setActiveSection('contracts')}
        >
          Contracts
        </button>
      </div>

      {activeSection === 'products' && (
        <div>
          <div className="mb-4 flex gap-4">
            <input
              type="text"
              placeholder="Search by crop name..."
              value={productFilter}
              onChange={handleProductFilterChange}
              className="border border-gray-300 rounded-lg p-3 w-full"
            />
            <input
              type="number"
              placeholder="Max price (₹)..."
              value={priceFilter}
              onChange={handlePriceFilterChange}
              className="border border-gray-300 rounded-lg p-3 w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="border border-gray-700 rounded-lg shadow-lg bg-white text-black flex overflow-hidden cursor-pointer"
                onClick={() => window.location.href = `/productoverview?id=${product.id}`}
              >
                <div className="w-1/2">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex flex-col justify-between w-1/2">
                  <div>
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p className="text-sm mt-2">Price: ₹{product.price}/{product.unit}</p>
                    <p className="text-sm">Quality: {product.quality}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <FaIndustry className="mr-2" />
                    <p className="text-sm">{product.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'contracts' && (
        <div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by contract title or crop name..."
              value={contractFilter}
              onChange={handleContractFilterChange}
              className="border border-gray-300 rounded-lg p-3 w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredContracts.map(contract => (
              <div
                key={contract.id}
                className="border border-gray-700 rounded-lg shadow-lg p-4 transition-transform hover:scale-105 bg-white text-black"
                onClick={() => window.location.href = `/contractoverview?id=${contract.id}`}
              >
                <div className="flex items-center mb-4">
                  <img src={contract.image} alt={contract.title} className="w-16 h-16 object-cover rounded-full mr-4" />
                  <div>
                    <h2 className="text-lg font-bold">{contract.title}</h2>
                    <p className="text-sm">{contract.company}</p>
                  </div>
                </div>
                <p>{contract.description}</p>
                <p className="mt-2 font-bold">Price: ₹{contract.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
