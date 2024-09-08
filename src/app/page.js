"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import image from "@/public/sih2.png"

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
          <div className="mt-12 flex flex-wrap justify-center gap-10">
            {/* Feature Card 1 */}
            <motion.div
              className="bg-blue-100 p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/farmer-icon.png"
                alt="Farmer Icon"
                width={80}
                height={80}
                className="mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold">For Farmers</h3>
              <p className="mt-2 text-gray-600">
                Get the best deals on your crops and negotiate contracts with contractors.
              </p>
            </motion.div>
            {/* Feature Card 2 */}
            <motion.div
              className="bg-blue-100 p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/contractor-icon.png"
                alt="Contractor Icon"
                width={80}
                height={80}
                className="mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold">For Contractors</h3>
              <p className="mt-2 text-gray-600">
                Access a wide range of agricultural products and secure long-term contracts with farmers.
              </p>
            </motion.div>
            {/* Feature Card 3 */}
            <motion.div
              className="bg-blue-100 p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/security-icon.png"
                alt="Security Icon"
                width={80}
                height={80}
                className="mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold">Secure Transactions</h3>
              <p className="mt-2 text-gray-600">
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
              className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/contract-listing.png"
                alt="Contract Listing"
                width={80}
                height={80}
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold">Contractors List Contracts</h3>
              <p className="mt-4 text-gray-600">
                Contractors can list their available contracts for various crops and services. This allows farmers to find and negotiate contracts that fit their needs.
              </p>
            </motion.div>

            {/* How It Works Step 2 */}
            <motion.div
              className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/farmer-receives.png"
                alt="Farmer Receives Contracts"
                width={80}
                height={80}
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold">Farmers Receive Contracts</h3>
              <p className="mt-4 text-gray-600">
                Farmers can view available contracts and choose the ones that best suit their requirements. This ensures that they get the best deals and opportunities.
              </p>
            </motion.div>

            {/* How It Works Step 3 */}
            <motion.div
              className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/buy-products.png"
                alt="Buy Products"
                width={80}
                height={80}
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold">Buy Products from Marketplace</h3>
              <p className="mt-4 text-gray-600">
                Buyers can browse the marketplace, view various agricultural products listed by farmers, and make purchases directly through the platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-green-500 text-white text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ready to Start Trading?
        </motion.h2>
        <p className="mt-4 text-lg">
          Join our platform today and connect with trusted farmers and contractors.
        </p>
        <motion.div
          className="mt-8"
          whileHover={{ scale: 1.1 }}
        >
          <Link href="/signup">
            <button className="px-8 py-3 bg-black rounded-full text-white text-lg">
              Sign Up Now
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
