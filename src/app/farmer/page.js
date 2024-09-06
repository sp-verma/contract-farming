"use client";

import { motion } from "framer-motion";

// Farmer data with Indian names and star ratings
const farmers = [
  { name: "Rajesh Kumar", image: "https://thumbs.dreamstime.com/b/indian-farmer-holding-barley-showing-his-strong-healthy-crop-wheat-174019332.jpg", fields: "10 Acres", certified: true, rating: 4.5, specialization: "Organic Crops", plants: ["Tomato", "Cucumber", "Lettuce"] },
  { name: "Aarti Patel", image: "https://media.istockphoto.com/id/1205325344/photo/farmer-in-agricultural-field.jpg?s=612x612&w=0&k=20&c=krsRk4T2MsmMy6PmrpPDR0i_1ja3_jQaNl80fBejWck=", fields: "20 Acres", certified: false, rating: 4.2, specialization: "Vegetable Farming", plants: ["Potato", "Carrot", "Beetroot"] },
  { name: "Anil Sharma", image: "https://plus.unsplash.com/premium_photo-1682092016074-b136e1acb26e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZmFybWVyfGVufDB8fDB8fHww", fields: "15 Acres", certified: true, rating: 4.7, specialization: "Fruit Farming", plants: ["Apple", "Peach", "Plum"] },
  { name: "Meera Gupta", image: "https://t4.ftcdn.net/jpg/04/43/65/85/240_F_443658521_oZgdN7yZCXWYEDCgL4zBmhms4WjMFRgA.jpg", fields: "30 Acres", certified: true, rating: 4.0, specialization: "Grain Crops", plants: ["Wheat", "Corn", "Barley"] },
  { name: "Vikram Singh", image: "https://t3.ftcdn.net/jpg/05/68/75/36/240_F_568753669_T3ddusst5w1VY2uvX7EAaZYGKAMslsBk.jpg", fields: "25 Acres", certified: false, rating: 4.3, specialization: "Herbs", plants: ["Basil", "Mint", "Rosemary"] },
  { name: "Sunita Rao", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScv1OPBCiuSyxuW2nQLLofmwmqPhZp_TS1hA&s", fields: "12 Acres", certified: true, rating: 4.6, specialization: "Vegetable Farming", plants: ["Bell Pepper", "Spinach", "Onion"] },
  { name: "Ravi Desai", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_qkSvCxagO4S9H7ygbdY-R_qafanxTA06w&s", fields: "8 Acres", certified: true, rating: 4.8, specialization: "Berry Farming", plants: ["Strawberry", "Blueberry", "Raspberry"] },
  { name: "Geeta Agarwal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dok9pkE51_yPia5GHYbrHJ2l70bwc0Tyuw&s", fields: "18 Acres", certified: false, rating: 4.1, specialization: "Root Crops", plants: ["Carrot", "Beet", "Turnip"] },
  { name: "Arjun Patel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqYhcfjamEJm1kPOLkq7X8OQpx1uO0hcxOA&s", fields: "22 Acres", certified: true, rating: 4.4, specialization: "Organic Herbs", plants: ["Thyme", "Oregano", "Parsley"] },
  { name: "Neelam Yadav", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDPTSyiXa1aPoppZZ_El3Dn_GvE6dLE1keQ&s", fields: "14 Acres", certified: true, rating: 4.9, specialization: "Specialty Crops", plants: ["Avocado", "Quinoa", "Chia Seeds"] },
];

// FarmerCard Component
const FarmerCard = ({ farmer }) => (
  <motion.div
    className="bg-blue-100 p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative w-full h-48 mb-4">
    <img src={farmer.image} alt={farmer.name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-semibold text-blue-800">{farmer.name}</h3>
    <p className="text-gray-700">Fields: {farmer.fields}</p>
    <p className="text-gray-700">Certified: {farmer.certified ? "Yes" : "No"}</p>
    <p className="text-gray-700">
      Rating: {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < farmer.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
      ))}
    </p>
    <p className="mt-2 text-gray-700">Specialization: {farmer.specialization}</p>
    <ul className="mt-4 list-disc list-inside text-gray-700">
      {farmer.plants.map((plant, index) => (
        <li key={index}>{plant}</li>
      ))}
    </ul>
  </motion.div>
);

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      {/* ...existing Hero Section code... */}

      {/* About Section */}
      {/* ...existing About Section code... */}

      {/* How It Works Section */}
      {/* ...existing How It Works Section code... */}

      {/* Farmers Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-blue-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Meet Our Farmers
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the skilled farmers on our platform and learn about their expertise and offerings.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-10">
            {farmers.map((farmer, index) => (
              <FarmerCard key={index} farmer={farmer} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* ...existing Call to Action Section code... */}
    </div>
  );
}
