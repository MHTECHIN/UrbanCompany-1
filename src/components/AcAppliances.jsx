import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Star, IndianRupee } from "lucide-react";

const products = [
  {
    title: "",
    image: "",
    rating: "",
    price: "",
    isNew: true,
  },
  {
    title: "",
    image: "",
    rating: "",
    price: "",
  },
  {
    title: " ",
    image: "",
    rating: "",
    price: "",
  },
  {
    title: "",
    image: "",
    rating: "",
    price: "",
  },
  {
    title: "",
    image: "",
    rating: "",
    price: "",
  },
  {
    title: "",
    image: "",
    rating: "",
    price: "",
  },
 
];

export default function AcAppliances() {
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
      <h2 className="text-3xl font-bold mb-6">AC & Appliances</h2>
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
