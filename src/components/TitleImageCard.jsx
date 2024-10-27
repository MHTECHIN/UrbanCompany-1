import React from "react";

const TitleImageCard = ({ title, products }) => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-semibold mb-9">{title}</h1>
      <div className="grid grid-cols-2 md:flex md:flex-wrap">
        {products.map((card, index) => (
          <div key={index} className="w-full p-2 md:w-1/5">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <div className="relative overflow-hidden bg-white rounded-lg shadow-md">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="object-cover w-full h-48"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleImageCard;
