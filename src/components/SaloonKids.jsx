import React from "react";

const SaloonKids = () => {
  const cards = [
    { imageUrl: "/s-m-1.jpeg", title: "Hair & Beard grooming" },
    { imageUrl: "/s-m-2.jpeg", title: "Hair color & Hair Spa" },
    { imageUrl: "/s-m-3.jpeg", title: "Pedicure & Manicure" },
    { imageUrl: "/s-m-4.jpeg", title: "Facial & Cleanup" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-semibold text-4xl mb-9">Salon for kids & men</h1>
     
      <div className="md:flex md:flex-wrap grid grid-cols-2 ">
        {cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/5 p-2 ">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <div className="relative bg-white rounded-lg shadow-md  overflow-hidden">
              {/* Image */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 object-cover"
              />

        
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaloonKids;
