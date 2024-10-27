import React, { useRef, useState, useEffect } from "react";
import ForwardButtonIcon from "../assets/forward_arrow.svg";
import BackwordButtonIcon from "../assets/backword_arrow.svg";

const TitleImageCard = ({ title, products }) => {
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
    <div className="container relative w-11/12 px-4 py-12 mx-auto overflow-hidden">
      <h1 className="text-4xl font-semibold mb-9">{title}</h1>

      {/* Left Scroll Button */}
      {showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 flex items-center justify-center z-10 h-10 p-2 transform -translate-y-1/2 bg-white border rounded-[100%] aspect-square shadow-md top-1/2 hover:bg-gray-300">
          <img src={BackwordButtonIcon} alt="Scroll Left" />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex w-full gap-5 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth">
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[235px] max-md:w-[190px] max-md:min-w-[190px] max-md:h-[230px] w-[235px] h-[270px] flex flex-col justify-between border border-solid rounded-lg overflow-hidden">
            <div>
              <h1 className="m-5 text-lg font-semibold max-md:text-base">{product.title}</h1>
            </div>
            <div className="w-full h-[150px] overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="object-cover w-full h-full rounded-b-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      {showRightButton && (
        <button
          onClick={scrollRight}
          className="absolute right-0 flex items-center justify-center z-10 h-10 p-2 transform -translate-y-1/2 bg-white border rounded-[100%] aspect-square shadow-md top-1/2 hover:bg-gray-300">
          <img src={ForwardButtonIcon} alt="Scroll Right" />
        </button>
      )}
    </div>
  );
};

export default TitleImageCard;
