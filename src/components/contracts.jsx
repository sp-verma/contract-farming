"use client";
import { useState } from "react";

export default function ActiveContractsSection() {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      contractor: "Contractor 1",
      negotiationPrice: "₹50000",
      timeRemaining: "3 days 4 hours",
      nextImageUpload: "In 2 days",
      chatHistory: ["Message 1", "Message 2"],
      imageHistory: ["/images/crop1.jpg", "/images/crop2.jpg"],
      contractCertificate: "/certificates/contract1.pdf",
      importantDates: {
        completionDate: "2024-10-15",
        nextImageUpload: "2024-09-10",
        lastMessageFromContractor: "Please upload the next image by Sept 10.",
      },
    },
    // Additional contracts can be added here
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 text-gray-800 p-10">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Active Contracts</h2>

      <div className="grid grid-cols-1 gap-8">
        {contracts.map((contract) => (
          <div
            key={contract.id}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-300"
          >
            {/* Contract Details */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-green-600 mb-2">
                Contract with {contract.contractor}
              </h3>
              <p className="text-gray-600">
                Negotiated Price: <span className="font-bold">{contract.negotiationPrice}</span>
              </p>
              <p className="text-gray-600">Time Remaining: {contract.timeRemaining}</p>
            </div>

            {/* Contract Certificate */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-blue-600">Contract Certificate</h4>
              <a
                href={contract.contractCertificate}
                target="_blank"
                className="text-blue-500 underline"
                rel="noopener noreferrer"
              >
                View/Download Contract Certificate
              </a>
            </div>

            {/* Chat Section */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-blue-600 mb-2">Chat with {contract.contractor}</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="overflow-auto max-h-32 mb-4">
                  {contract.chatHistory.map((msg, idx) => (
                    <p key={idx} className="bg-gray-200 p-2 rounded mb-2">
                      {msg}
                    </p>
                  ))}
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
                  Open Chat
                </button>
              </div>
            </div>

            {/* Image Upload Section */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-blue-600 mb-2">Upload Crop Images</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow mb-4">
                  Upload New Image
                </button>
                <div className="grid grid-cols-2 gap-2">
                  {contract.imageHistory.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="Crop"
                      className="w-full h-24 object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Important Information Section */}
            <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-yellow-600 mb-2">Important Information</h4>
              <p className="text-gray-700">
                Completion Date: <span className="font-bold">{contract.importantDates.completionDate}</span>
              </p>
              <p className="text-gray-700">
                Next Image Upload Due: <span className="font-bold">{contract.importantDates.nextImageUpload}</span>
              </p>
              <p className="text-gray-700">
                Last Message from Contractor:{" "}
                <span className="font-bold">
                  {contract.importantDates.lastMessageFromContractor}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
