import React from 'react'

const CleaningPest = () => {
  const cards = [
    { imageUrl: '/batroomandkitchen.jpeg', title: 'Bathroom & Kitchen cleaning' },
    { imageUrl: '/cleaning2.jpeg', title: 'Full Home Cleaning' },
    { imageUrl: '/cleaning3.jpeg', title: 'Sofa & Carpet Cleaning' },
    { imageUrl: '/cleaning4.jpeg', title: 'Cockroach Ant & General Pest Control' },
    
  ]

  return (
    <div className="container mx-auto px-4 py-12">
        <h1 className='font-semibold text-4xl mb-9'>Cleaning & pest control</h1>
      <div className="flex flex-wrap justify-between">
        {cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/5 p-2">
             <h2 className="text-lg font-semibold">{card.title}</h2>
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
              {/* Image */}
              <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
              
          
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CleaningPest
