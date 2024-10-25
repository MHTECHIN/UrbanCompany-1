import React from 'react'


const services = [
  { name: "Women's Salon & Spa", icon: "/WomenSalon.webp" },
  { name: "Men's Salon & Massage", icon: "/mensaloon.webp" },
  { name: "AC & Appliance Repair", icon: "/acandappliances.webp" },
  { name: "Cleaning & Pest Control", icon: "/cleaning.webp" },
  { name: "Electrician, Plumber & Carpenter", icon: "/placeholder.webp" },
  { name: "Native Water Purifier", icon: "/placeholder.webp" },
  { name: "Painting & Waterproofing", icon: "/placeholder.webp" },
  { name: "Wall Panels", icon: "/placeholder.webp" },
]

const serviceimgs = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Woman receiving beauty treatment" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Person receiving massage" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Technician working on appliance" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Person cleaning air conditioning unit" },
]

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Home services at your doorstep</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What are you looking for?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center">
              <img src={service.icon} alt={service.name} width={64} height={64} className="mb-2" />
              <span className="text-sm">{service.name}</span>
            </div>
          ))}
        </div>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <img
            src={serviceimgs[0].src}
            alt={serviceimgs[0].alt}
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        {serviceimgs.slice(1).map((img, index) => (
          <div key={index}>
            <img
              src={img.src}
              alt={img.alt}
              width={300}
              height={200}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        ))}
      </section>
    </div>
  )
}