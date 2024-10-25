import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Star, IndianRupee } from "lucide-react";

const products = [
  {
    title: "Plumber visit",
    image: "/q-h-1.jpeg",
    rating: "4.79 (62K)",
    price: "49",
    isNew: true,
  },
  {
    title: "Tap repair",
    image: "/q-h-2.jpeg",
    rating: "4.84 (73K)",
    price: "49",
  },
  {
    title: "Carpenter visit",
    image: "/q-h-3.jpeg",
    rating: "4.71 (46K)",
    price: "49",
  },
  {
    title: "Electrician visit",
    image: "/q-h-4.jpeg",
    rating: "4.80 (53K)",
    price: "49",
  },
  {
    title: "Fan repair (celing/wall/exhaust)",
    image: "/q-h-5.jpeg",
    rating: "4.81 (52K)",
    price: "119",
  },
  
 
];

export default function QuickHome() {
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
      <h2 className="text-3xl font-bold mb-6">Quick home repairs</h2>
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
