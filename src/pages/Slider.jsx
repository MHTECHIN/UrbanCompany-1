import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/nativeRO.webp',
  },
  {
    id: 2,
    image: '/shine.webp',
  },
  {
    id: 3,
    image: '/elevate.webp',
  },
  {
    id: 4,
    image: '/saveonelectric.webp',
  },
  {
    id: 5,
    image: '/elevatewedding.webp',
  },
  {
    id: 6,
    image: '/relaxathome.webp',
  },
  {
    id: 7,
    image: '/experthaircut.webp',
  },
  {
    id: 8,
    image: '/homerepairs.webp',
  },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3; // Show 3 cards at a time

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide + slidesToShow < slides.length ? prevSlide + slidesToShow : 0
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - slidesToShow : prevSlide - slidesToShow
    );
  };

  return (
    <div className="relative w-full max-w-6xl m-auto  overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${(currentSlide / slidesToShow) * 90}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-[calc(100%/4)]  h-64 sm:h-72 lg:h-96 flex-shrink-0 p-2"
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full  h-[14rem] object-cover rounded-lg hover:scale-105 transition-all"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        onClick={handlePrevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        onClick={handleNextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageSlider;
