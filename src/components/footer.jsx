import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-10">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white mb-2">Contract Farming Platform</h2>
          <p className="text-white text-sm">
            Empowering farmers and contractors through a seamless marketplace for agricultural products and contracts.
          </p>
        </div>

        {/* Center Section: Search */}
        <div className="flex flex-col items-center md:items-center space-y-4">
          <h3 className="text-lg font-semibold text-white mb-2">Search</h3>
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded border border-gray-600 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-white"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <SocialIcon url="https://facebook.com" bgColor="transparent" fgColor="#ffffff" className="transition-colors hover:fgColor-[#1877F2]" />
            <SocialIcon url="https://twitter.com" bgColor="transparent" fgColor="#ffffff" className="transition-colors hover:fgColor-[#1DA1F2]" />
            <SocialIcon url="https://instagram.com" bgColor="transparent" fgColor="#ffffff" className="transition-colors hover:fgColor-[#E1306C]" />
            <SocialIcon url="https://linkedin.com" bgColor="transparent" fgColor="#ffffff" className="transition-colors hover:fgColor-[#0077B5]" />
            <SocialIcon url="https://youtube.com" bgColor="transparent" fgColor="#ffffff" className="transition-colors hover:fgColor-[#FF0000]" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-300 text-sm mt-8">
        © 2024 Contract Farming Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
