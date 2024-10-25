import React from "react";

const MasageForMen = () => {
  const cards = [
    { imageUrl: "/m-s-1.jpeg", title: "Pain relief" },
    { imageUrl: "/m-s-2.jpeg", title: "Stress relief" },
    { imageUrl: "/m-s-3.jpeg", title: "Post workout" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-semibold text-4xl mb-9">Massage for men</h1>
      <p>Curated massages by top therapists.</p>
      <div className="flex flex-wrap ">
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

              {/* Label on Image */}
              {/* <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
                {card.label}
              </div> */}

              {/* Card Title */}
              {/* <div className="p-4">
                <h2 className="text-lg font-semibold">{card.title}</h2>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasageForMen;
