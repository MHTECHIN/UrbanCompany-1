import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Star, IndianRupee } from "lucide-react";

export default function CardTitlePrice({ title, products }) {
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
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>
      <div className="relative">
        <div className="flex space-x-4 overflow-hidden">
          {visibleProducts.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-1/4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-48"
                />
                
              </div>
              <h3 className="mt-2 text-sm font-semibold">{product.title}</h3>
              <p className="flex items-center space-x-1 text-sm font-semibold">
                <Star size={15} />
                {product.rating}
              </p>
              <p className="flex items-center space-x-1 text-sm font-semibold">
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
            className="absolute left-0 p-2 transition-colors transform -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-gray-100"
            aria-label="Previous slide">
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {currentIndex + visibleCount < products.length && (
          <button
            onClick={nextSlide}
            className="absolute right-0 p-2 transition-colors transform -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-gray-100"
            aria-label="Next slide">
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
