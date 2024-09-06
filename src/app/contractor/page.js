"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const contractors = [
  { 
    name: "AgroTech Solutions", 
    image: "https://example.com/company1.jpg", 
    fields: "25 Projects", 
    certified: true, 
    rating: 4.7, 
    specialization: "Advanced Agricultural Equipment", 
    experience: "10 Years", 
    services: ["Tractor Rentals", "Harvesting Equipment", "Soil Testing"] 
  },
  { 
    name: "Green Plate Bistro", 
    image: "https://example.com/restaurant1.jpg", 
    fields: "15 Projects", 
    certified: false, 
    rating: 4.5, 
    specialization: "Organic Produce Supply", 
    experience: "6 Years", 
    services: ["Farm-to-Table Produce", "Catering Services", "Seasonal Menus"] 
  },
  { 
    name: "Ravi's Agro Mart", 
    image: "https://example.com/shopkeeper1.jpg", 
    fields: "20 Projects", 
    certified: true, 
    rating: 4.2, 
    specialization: "Agricultural Supplies and Tools", 
    experience: "8 Years", 
    services: ["Seeds and Fertilizers", "Farm Tools", "Pesticides"] 
  },
  { 
    name: "Sunrise Fertilizers", 
    image: "https://example.com/company2.jpg", 
    fields: "30 Projects", 
    certified: true, 
    rating: 4.6, 
    specialization: "Organic and Chemical Fertilizers", 
    experience: "12 Years", 
    services: ["Custom Fertilizer Blends", "Consultation", "Bulk Orders"] 
  },
  { 
    name: "Harvest Cafe", 
    image: "https://example.com/restaurant2.jpg", 
    fields: "10 Projects", 
    certified: true, 
    rating: 4.3, 
    specialization: "Locally Sourced Ingredients", 
    experience: "5 Years", 
    services: ["Fresh Produce", "Specialty Dishes", "Event Catering"] 
  },
  { 
    name: "AgriHub Supplies", 
    image: "https://example.com/shopkeeper2.jpg", 
    fields: "22 Projects", 
    certified: false, 
    rating: 4.4, 
    specialization: "Farm Equipment and Tools", 
    experience: "7 Years", 
    services: ["Farm Machinery", "Irrigation Systems", "Pest Control"] 
  },
  { 
    name: "EcoGrow Solutions", 
    image: "https://example.com/company3.jpg", 
    fields: "18 Projects", 
    certified: true, 
    rating: 4.8, 
    specialization: "Sustainable Farming Technologies", 
    experience: "9 Years", 
    services: ["Soil Health Management", "Water Conservation", "Organic Farming"] 
  },
  { 
    name: "The Veggie Spot", 
    image: "https://example.com/restaurant3.jpg", 
    fields: "12 Projects", 
    certified: false, 
    rating: 4.1, 
    specialization: "Vegetable Supply Chain", 
    experience: "4 Years", 
    services: ["Fresh Vegetables", "Organic Options", "Local Delivery"] 
  },
  { 
    name: "Farmers' Choice Mart", 
    image: "https://example.com/shopkeeper3.jpg", 
    fields: "27 Projects", 
    certified: true, 
    rating: 4.5, 
    specialization: "Diverse Agricultural Products", 
    experience: "11 Years", 
    services: ["Seeds and Plants", "Fertilizers", "Pesticides"] 
  },
  { 
    name: "AgriInnovate", 
    image: "https://example.com/company4.jpg", 
    fields: "21 Projects", 
    certified: true, 
    rating: 4.7, 
    specialization: "Agricultural Innovation and Research", 
    experience: "13 Years", 
    services: ["Research and Development", "Innovative Solutions", "Consulting"] 
  },
  { 
    name: "Harvest Grill", 
    image: "https://example.com/restaurant4.jpg", 
    fields: "14 Projects", 
    certified: true, 
    rating: 4.6, 
    specialization: "Fresh Farm-to-Fork Meals", 
    experience: "7 Years", 
    services: ["Grill Specialties", "Farm Fresh Ingredients", "Event Catering"] 
  },
  { 
    name: "Agro Essentials", 
    image: "https://example.com/shopkeeper4.jpg", 
    fields: "19 Projects", 
    certified: true, 
    rating: 4.3, 
    specialization: "Agricultural Essentials", 
    experience: "6 Years", 
    services: ["Essential Supplies", "Tools and Equipment", "Consultation"] 
  }
];

export default function ContractorsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contractors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contractors.map((contractor, index) => (
          <motion.div 
            key={index}
            className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <image src={contractor.image} alt={contractor.name} width={500} height={300} className="w-full h-48 object-cover" />
            <div className="p-6 bg-white">
              <h2 className="text-2xl font-semibold mb-2 text-blue-800">{contractor.name}</h2>
              <p className="text-gray-700 mb-4"><span className="font-semibold">Specialization:</span> {contractor.specialization}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Experience:</span> {contractor.experience}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Rating:</span> {contractor.rating} ★</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Certified:</span> {contractor.certified ? "Yes" : "No"}</p>
              <p className="text-gray-700 mb-4"><span className="font-semibold">Projects Completed:</span> {contractor.fields}</p>
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Services Offered:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {contractor.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
