import React from 'react'

const SpaforWomen = () => {
  const cards = [
    { imageUrl: '/stressrelief.webp', title: 'Stress Relief', label: 'New' },
    { imageUrl: '/painrelief.webp', title: 'Pain Relief', label: 'Exclusive' },
    { imageUrl: '/naturalskin.webp', title: 'Natural Skincare', label: 'Sale' },
  
  ]

  return (
    <div className="container mx-auto px-4 py-12">
        <h1 className='font-semibold text-4xl mb-9'>Spa for women</h1>
        <p>Refresh. Rewind. Rejuvenate.</p>
      <div className="md:flex md:flex-wrap grid grid-cols-2 ">
        {cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/5 p-2 ">
             <h2 className="text-lg font-semibold">{card.title}</h2>
            <div className="relative bg-white rounded-lg shadow-md  overflow-hidden">
              {/* Image */}
              <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
              
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
  )
}

export default SpaforWomen
