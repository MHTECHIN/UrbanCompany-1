import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Star, IndianRupee } from "lucide-react";

const products = [
  {
    title: "Sofa Cleaning",
    image: "/sofacleaning.webp",
    rating: "4.86(460k)",
    price: "549",
    isNew: true,
  },
  {
    title: "Haircut for men",
    image: "/menhaircut.webp",
    rating: "4.89(499k)",
    price: "259",
  },
  {
    title: "Sofa & cushions cleaning ",
    image: "/sofacushion.webp",
    rating: "4.83(10k)",
    price: "639",
  },
  {
    title: "Full automatic washing machine check-up(top load)",
    image: "/fullauto.webp",
    rating: "4.82(270k)",
    price: "160",
  },
  {
    title: "TV repair",
    image: "/tvrepair.webp",
    rating: "4.81(144k)",
    price: "249",
  },
  {
    title: "Swedish stress relief massage",
    image: "/stress.webp",
    rating: "4.84(150k)",
    price: "1,299",
  },
  {
    title: "Rooms/walls painting",
    image: "/roomswall.webp",
    rating: "4.82(21k)",
    price: "49",
  },
  {
    title: "Drill & hang(wall decor)",
    image: "/drill.webp",
    rating: "4.87(90k)",
    price: "129",
  },
];

export default function BookedService() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4; // Number of products visible at a time

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCount < products.length
        ? prevIndex + visibleCount
        : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - visibleCount >= 0 ? prevIndex - visibleCount : 0
    );
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Most booked services</h2>
      <div className="relative">
        <div className="flex space-x-4 overflow-hidden">
          {visibleProducts.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-1/4">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                {/* {product.isNew && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )} */}
              </div>
              <h3 className="mt-2 text-sm font-semibold">{product.title}</h3>
              <p className="text-sm font-semibold flex items-center space-x-1">
                <Star size={15} />
                {product.rating}
              </p>
              <p className="text-sm font-semibold flex items-center space-x-1">
                <IndianRupee size={15} />
                {product.price}
              </p>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {currentIndex + visibleCount < products.length && (
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
