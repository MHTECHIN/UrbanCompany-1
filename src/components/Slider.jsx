import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/nativeRO.webp",
  },
  {
    id: 2,
    image: "/shine.webp",
  },
  {
    id: 3,
    image: "/saveonelectric.webp",
  },
  {
    id: 4,
    image: "/elevatewedding.webp",
  },
  {
    id: 5,
    image: "/relaxathome.webp",
  },
  {
    id: 6,
    image: "/experthaircut.webp",
  },
  {
    id: 7,
    image: "/homerepairs.webp",
  },
];

const ImageSlider = () => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const updateButtonVisibility = () => {
    const scrollElement = scrollRef.current;
    const isScrolledToLeft = scrollElement.scrollLeft === 0;
    const isScrolledToRight =
      scrollElement.scrollWidth - scrollElement.clientWidth ===
      scrollElement.scrollLeft;

    setShowLeftButton(!isScrolledToLeft);
    setShowRightButton(!isScrolledToRight);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    updateButtonVisibility();

    scrollElement.addEventListener("scroll", updateButtonVisibility);
    return () =>
      scrollElement.removeEventListener("scroll", updateButtonVisibility);
  }, []);

  return (
    <div className="relative w-11/12 max-sm:w-[98%] m-auto overflow-hidden max-w-7xl mt-28">
      {/* Left Scroll Button */}
      {showLeftButton && (
        <button
          className="absolute z-10 p-2 transform -translate-y-1/2 bg-white rounded-full shadow left-4 top-1/2 hover:bg-gray-100"
          onClick={scrollLeft}
          aria-label="Scroll Left">
          <ChevronLeft size={24} />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-scroll transition-transform duration-500 scrollbar-hide">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-[calc(100%/4)] h-fit flex-shrink-0 p-2">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-[14rem] max-lg:h-[12rem] max-sm:h-[10rem] object-cover rounded-lg hover:scale-105 transition-all"
            />
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      {showRightButton && (
        <button
          className="absolute z-10 p-2 transform -translate-y-1/2 bg-white rounded-full shadow right-4 top-1/2 hover:bg-gray-100"
          onClick={scrollRight}
          aria-label="Scroll Right">
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

export default ImageSlider;
