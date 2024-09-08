"use client";

import { useEffect, useState } from "react";
import {
  FaIndustry,
  FaCalendarAlt,
  FaTruck,
  FaShoppingCart,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ProductOverview = ({ searchParams }) => {
  const { id } = searchParams; // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0); // For custom carousel navigation

  // Simulate fetching product data from an API or static data
  const products = [
    { id: 1, name: 'Wheat', price: '100', unit: 'kg', quality: 'High', company: 'AgriCorp', image: 'https://cdn.britannica.com/80/157180-050-7B906E02/Heads-wheat-grains.jpg' },
    { id: 2, name: 'Rice', price: '80', unit: 'kg', quality: 'Medium', company: 'RiceWorld', image: 'https://media.istockphoto.com/id/1014182360/photo/texture-with-of-barley-malt-for-beer-pale-ale-pilsen.jpg?s=612x612&w=0&k=20&c=2xTAPcwgHXJym1CmsPMCaj7smxaSrvX3shTULlEhTCM=' },
    { id: 3, name: 'Corn', price: '60', unit: 'kg', quality: 'Low', company: 'GrainFarm', image: 'https://www.shutterstock.com/image-photo/single-ear-corn-isolated-on-260nw-793795156.jpg' },
    { id: 4, name: 'Barley', price: '90', unit: 'kg', quality: 'Medium', company: 'BarleyPros', image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295268/barley-grains-in-a-wooden-bowl.jpg' },
    { id: 5, name: 'Soybeans', price: '150', unit: 'kg', quality: 'High', company: 'SoyBest', image: 'https://www.shutterstock.com/image-photo/soy-bean-mature-seeds-immature-260nw-1467898517.jpg' },
    { id: 6, name: 'Oats', price: '70', unit: 'kg', quality: 'Medium', company: 'OatHarvest', image: 'https://media.istockphoto.com/id/185007888/photo/rolled-oats-in-a-bowl.jpg?s=612x612&w=0&k=20&c=VPCb7ESkEf9zUBh-9IhpmLWDk9_Dfvgwb-KUkhdtSj8=' },
  ];

  useEffect(() => {
    if (id) {
      const selectedProduct = products.find((p) => p.id === parseInt(id));
      setProduct(selectedProduct);
    }
  }, [id]);

  // Function to navigate slides in the carousel
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === products.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? products.length - 1 : prevSlide - 1
    );
  };

  if (!product) return <div className="text-center py-20 text-xl">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Product Overview</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-6">
        <div className="w-full max-w-6xl bg-white p-8 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold text-blue-800 mb-4">
                  {product.name}
                </h1>
                <p className="text-lg mt-2 text-gray-700">
                  Price: <span className="font-semibold text-blue-600">₹{product.price}</span> per {product.unit}
                </p>
                <p className="text-sm flex items-center mt-2 text-gray-600">
                  <FaIndustry className="mr-2 text-blue-600" /> {product.company}
                </p>
                <div className="mt-2 flex items-center text-gray-700">
                  <FaStar className="mr-2 text-yellow-500" />
                  <p>Rating: 4.5 / 5</p>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Quality: {product.quality}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <FaMapMarkerAlt className="mr-2 text-red-600" />
                  Address: {product.address}
                </p>
              </div>

              {/* Available Date and Delivery Date */}
              <div className="mt-4 flex flex-col space-y-2 text-gray-700">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-green-600" />
                  <p>Available Date: {product.availableDate}</p>
                </div>
                <div className="flex items-center">
                  <FaTruck className="mr-2 text-yellow-600" />
                  <p>Expected Delivery: {product.deliveryDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Overview Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Product Overview</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg flex items-center shadow-lg transition duration-300">
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg flex items-center shadow-lg transition duration-300">
              <FaShoppingCart className="mr-2" /> Buy Now
            </button>
          </div>

          {/* Custom Product Carousel */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Related Products</h2>
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 flex items-center justify-center cursor-pointer bg-gray-300 p-2 rounded-full"
                onClick={prevSlide}
                style={{ left: '10px' }}
              >
                &#8592;
              </div>
              <div
                className="absolute inset-y-0 right-0 flex items-center justify-center cursor-pointer bg-gray-300 p-2 rounded-full"
                onClick={nextSlide}
                style={{ right: '10px' }}
              >
                &#8594;
              </div>

              <div
                className="flex overflow-x-auto snap-x snap-mandatory"
                style={{
                  width: '100%',
                }}
              >
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-1/3 p-4 snap-start"
                    style={{ width: '200px' }}
                  >
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        ₹{item.price} per {item.unit}
                      </p>
                      <p className="text-sm text-gray-600">Quality: {item.quality}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Motihari College of Engineering</p>
      </footer>
    </div>
  );
};

export default ProductOverview;
