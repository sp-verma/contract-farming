// CropInfoSection.js
import React from "react";

const crops = [
  {
    name: "Wheat",
    image: 'https://cdn.britannica.com/80/157180-050-7B906E02/Heads-wheat-grains.jpg',
    description: "Wheat is a staple food crop, commonly used for making bread and flour.",
  },
  {
    name: "Rice",
    image:'https://media.istockphoto.com/id/1014182360/photo/texture-with-of-barley-malt-for-beer-pale-ale-pilsen.jpg?s=612x612&w=0&k=20&c=2xTAPcwgHXJym1CmsPMCaj7smxaSrvX3shTULlEhTCM=',
    description: "Rice is a primar food source for many countries, grown in paddy fields.",
  },
  {
    name: "Maize",
    image:'https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295268/barley-grains-in-a-wooden-bowl.jpg',
    description: "Maize, or corn, is a versatile crop used for food, fodder, and biofuel.",
  },
 
];

const CropInfoSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {crops.map((crop, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <img src={crop.image} alt={crop.name} className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">{crop.name}</h3>
          <p className="text-gray-600">{crop.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CropInfoSection;
