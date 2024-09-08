"use client";

import { useEffect, useState } from "react";
import {
  FaIndustry,
  FaCalendarAlt,
  FaHandshake,
  FaTruck,
  FaArrowRight,
} from "react-icons/fa";

const ContractOverview = ({ searchParams }) => {
  const { id } = searchParams; // Get the contract ID from the URL
  const [contract, setContract] = useState(null);

  // Simulate fetching the contract data from an API or static data
  const contracts = [
    { id: 1, title: 'Wheat Export Contract', price: '500000', description: '500 tons of high-quality wheat required for international export.', company: 'GlobalGrains', image: 'https://cdn.britannica.com/80/157180-050-7B906E02/Heads-wheat-grains.jpg' },
    { id: 2, title: 'Corn Supply Contract', price: '300000', description: '300 tons of corn for animal feed supply.', company: 'FeedCorp', image: 'https://www.shutterstock.com/image-photo/single-ear-corn-isolated-on-260nw-793795156.jpg' },
    { id: 3, title: 'Soybean Oil Contract', price: '400000', description: '400 tons of soybeans for oil extraction.', company: 'OilMills', image: 'https://www.shutterstock.com/image-photo/soy-bean-mature-seeds-immature-260nw-1467898517.jpg' },
    { id: 4, title: 'Barley for Brewery', price: '200000', description: '200 tons of barley for brewery production.', company: 'BrewMasters', image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295268/barley-grains-in-a-wooden-bowl.jpg' },
    { id: 5, title: 'Oats for Cereal Production', price: '150000', description: '150 tons of oats required for cereal manufacturing.', company: 'OatFactory', image: 'https://media.istockphoto.com/id/185007888/photo/rolled-oats-in-a-bowl.jpg?s=612x612&w=0&k=20&c=VPCb7ESkEf9zUBh-9IhpmLWDk9_Dfvgwb-KUkhdtSj8=' },
    { id: 6, title: 'Millet for Food Manufacturing', price: '100000', description: '100 tons of millet for food processing.', company: 'GrainFoodCo', image: 'https://media.istockphoto.com/id/185007888/photo/rolled-oats-in-a-bowl.jpg?s=612x612&w=0&k=20&c=VPCb7ESkEf9zUBh-9IhpmLWDk9_Dfvgwb-KUkhdtSj8=' },
  ];

  useEffect(() => {
    if (id) {
      const selectedContract = contracts.find((c) => c.id === parseInt(id));
      setContract(selectedContract);
    }
  }, [id]);

  if (!contract) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        {/* Contract Details */}
        <div className="flex gap-6">
          <img
            src={contract.image}
            alt={contract.title}
            className="w-1/3 h-64 object-cover rounded-lg"
          />
          <div className="w-2/3 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {contract.title}
              </h1>
              <p className="text-lg mt-2 text-gray-600">
                Price: ₹{contract.price}
              </p>
              <p className="text-sm flex items-center mt-2 text-gray-600">
                <FaIndustry className="mr-2" /> {contract.company}
              </p>
            </div>

            {/* Negotiation Price */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Negotiation Price:
              </h2>
              <p className="text-lg text-gray-700">
                {contract.negotiationPrice}
              </p>
            </div>

            {/* Delivery Timing */}
            <div className="mt-4 flex items-center text-gray-600">
              <FaTruck className="mr-2" />
              <p>Delivery Date: {contract.deliveryDate}</p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300">
                Negotiate
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-all duration-300">
                Contract Now
              </button>
            </div>
          </div>
        </div>

        {/* Contract Overview Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Contract Overview</h2>
          <p className="mt-2 text-gray-600">{contract.description}</p>
        </div>

        {/* Additional Contract Options */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Contract Options</h2>
          <div className="flex flex-wrap gap-6 mt-4">
            {/* Option 1: Negotiation */}
            <div className="bg-gradient-to-br from-green-100 to-green-300 p-4 rounded-lg shadow-md w-full md:w-1/2">
              <FaHandshake className="text-green-600 text-2xl mb-2" />
              <h3 className="text-lg font-bold text-gray-700">Negotiation Terms</h3>
              <p className="text-gray-600">
                Finalize the terms with the company to reach an agreeable negotiation price.
              </p>
            </div>

            {/* Option 2: Delivery */}
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 p-4 rounded-lg shadow-md w-full md:w-1/2">
              <FaCalendarAlt className="text-yellow-600 text-2xl mb-2" />
              <h3 className="text-lg font-bold text-gray-700">Delivery Timing</h3>
              <p className="text-gray-600">
                Set up and agree on a delivery schedule that suits both parties.
              </p>
            </div>
          </div>
        </div>

        {/* Contract Carousel */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Other Available Contracts</h2>
          <div className="flex overflow-x-auto gap-6 mt-6 pb-6">
            {contracts
              .filter((c) => c.id !== parseInt(id)) // Exclude current contract from carousel
              .map((c) => (
                <div
                  key={c.id}
                  className="min-w-[250px] bg-white shadow-md rounded-lg p-4 flex-shrink-0"
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-32 w-full object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-600">Price: ₹{c.price}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Delivery Date: {c.deliveryDate}
                  </p>
                  <a
                    href={`/contract-overview?id=${c.id}`}
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View Details <FaArrowRight className="ml-2" />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractOverview;
