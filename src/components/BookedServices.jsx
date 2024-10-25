import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';

const products = [
  {
    title: "Sofa Cleaning",
    image: "/diwali.webp",
    rating:"4.86(460k)",
    price:"549",
    isNew: true
  },
  {
    title: "Haircut for men",
    image: "/wall.webp"
  },
  {
    title: "Sofa & cushions cleaning ",
    image: "/purifier.webp"
  },
  {
    title: "Full automatic washing machine check-up(top load)",
    image: "/smartlock.webp"
  },
  {
    title: "TV repair",
    image: "/Fullhome.webp"
  },
  {
    title: "Swedish stress relief massage",
    image: "/spa.webp"
  },
  {
    title: "Rooms/walls painting",
    image: "/hairstudio.webp"
  },
  {
    title: "Drill & hang(wall decor)",
    image: "/acrepair.webp"
  },
];

export default function BookedService() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4; // Number of products visible at a time

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCount < products.length ? prevIndex + visibleCount : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - visibleCount >= 0 ? prevIndex - visibleCount : 0));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">New and noteworthy</h2>
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
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
              <p className="mt-2 text-lg font-semibold flex"><Star />{product.description}</p>
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
