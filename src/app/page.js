"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import image from "@/public/sih2.png";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-blue-500">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt="Farm Background"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
        </div>
        <motion.div
          className="relative text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Agri Marketplace
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Bridging Farmers and Contractors for a Better Tomorrow
          </p>
          <Link href="/marketplace">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-8 px-6 py-3 bg-yellow-500 rounded-full text-white text-lg"
            >
              Explore the Marketplace
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Why Choose Us?
          </motion.h2>
          <p className="mt-6 text-lg text-gray-600">
            We provide a platform where farmers and contractors can easily connect, negotiate contracts, and trade products in a seamless and transparent manner.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {/* Feature Card 1 - For Farmers */}
            <motion.div
              className="bg-blue-100 p-6 rounded-lg shadow-lg w-80 h-80 flex flex-col items-center justify-between"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9W15Hh_7mgF-oO3Dl_M32EWBjJUo_cA8Uw&s"
                alt="Farmer Icon"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold">For Farmers</h3>
              <p className="mt-2 text-gray-600 text-center">
                Get the best deals on your crops and negotiate contracts with contractors.
              </p>
            </motion.div>
            {/* Feature Card 2 - For Contractors */}
            <motion.div
              className="bg-blue-100 p-6 rounded-lg shadow-lg w-80 h-80 flex flex-col items-center justify-between"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="https://img.freepik.com/free-photo/lifestyle-people-learning-make-sushi_23-2149865357.jpg"
                alt="Contractor Icon"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold">For Contractors</h3>
              <p className="mt-2 text-gray-600 text-center">
                Access a wide range of agricultural products and secure long-term contracts with farmers.
              </p>
            </motion.div>
            {/* Feature Card 3 - Secure Transactions */}
            <motion.div
              className="bg-blue-100 p-6 rounded-lg shadow-lg w-80 h-80 flex flex-col items-center justify-between"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="https://img.freepik.com/premium-vector/secure-payment-credit-card-icon-with-shield-secure-transaction-vector-stock-illustration_100456-11325.jpg"
                alt="Security Icon"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold">Secure Transactions</h3>
              <p className="mt-2 text-gray-600 text-center">
                All deals and contracts are secure and transparent for both parties.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-green-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            How It Works
          </motion.h2>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* How It Works Step 1 */}
            <motion.div
              className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg h-80 flex flex-col items-center justify-between"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="https://help.sana-commerce.com/_sana_/handlers/getfile.ashx/da299559-e375-400a-a9f3-4d277c0762b2/01.png"
                alt="Contractors List Contracts"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold">Contractors List Contracts</h3>
              <p className="mt-4 text-gray-600 text-center">
                Contractors can list their available contracts for various crops and services. This allows farmers to find and negotiate contracts that fit their needs.
              </p>
            </motion.div>

            {/* How It Works Step 2 */}
            <motion.div
              className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg h-80 flex flex-col items-center justify-between"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmasGw1GyQ4lLQbjoyq78nTpNUbPreBb44w&s"
                alt="Farmers Receive Contracts"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold">Farmers Receive Contracts</h3>
              <p className="mt-4 text-gray-600 text-center">
                Farmers can browse through listed contracts and choose the ones that best suit their needs. This streamlined process ensures that farmers can quickly find and secure the best contracts.
              </p>
            </motion.div>

            {/* How It Works Step 3 */}
            <motion.div
              className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg h-80 flex flex-col items-center justify-between"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="https://img.freepik.com/premium-vector/secure-payment-credit-card-icon-with-shield-secure-transaction-vector-stock-illustration_100456-11325.jpg"
                alt="Secure Transactions"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold">Secure Transactions</h3>
              <p className="mt-4 text-gray-600 text-center">
                All transactions are secure, and both parties have clear and transparent terms, reducing the risk of disputes and ensuring a smooth process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Agri Marketplace. All rights reserved.</p>
          <p>Made with <span className="text-red-500">❤️</span> for farmers and contractors.</p>
        </div>
      </footer>
    </div>
  );
}
