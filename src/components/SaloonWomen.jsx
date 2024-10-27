import React from 'react'

const SaloonWomen = () => {
  const cards = [
    { imageUrl: '/waxing.webp', title: 'waxing', label: 'New' },
    { imageUrl: '/cleaning.webp', title: 'cleanup', label: 'Exclusive' },
    { imageUrl: '/manicure.webp', title: 'Manicure', label: 'Sale' },
    { imageUrl: '/haircare.webp', title: 'Hair Care', label: 'Popular' },
    { imageUrl: '/facewaxing.webp', title: 'Threading & Face Waxing', label: 'Trending' }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
        <h1 className='font-semibold text-4xl mb-9'>Saloon for Women</h1>
      <div className="md:flex md:flex-wrap grid grid-cols-2 justify-between">
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

export default SaloonWomen
