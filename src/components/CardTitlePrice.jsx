import React, { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Star, IndianRupee } from "lucide-react";

export default function CardTitlePrice({ title, products }) {
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
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    updateButtonVisibility();

    scrollElement.addEventListener("scroll", updateButtonVisibility);
    return () =>
      scrollElement.removeEventListener("scroll", updateButtonVisibility);
  }, []);

  return (
    <div className="container w-11/12 px-4 py-12 mx-auto overflow-hidden max-sm:w-full">
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>
      <div className="relative">
        {/* Previous Button */}
        {showLeftButton && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 transition-colors transform -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-gray-100"
            aria-label="Previous slide">
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex py-4 space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-[235px] max-md:w-[190px] max-md:min-w-[190px] w-[235px]">
              <div className="relative overflow-hidden rounded-lg max-md:h-[190px] h-[230px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full"
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

        {/* Next Button */}
        {showRightButton && (
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 transition-colors transform -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-gray-100"
            aria-label="Next slide">
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
