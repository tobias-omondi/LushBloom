import React from 'react'
import PaymentCard from './PaymentCard'

const Cards = () => {

    const cardComponets = [
            { id: 1, Title: "Skincare Products", description: "Nourish, protect, and revitalize your skin with our curated collection of skincare essentials. From cleansers to serums, achieve a radiant and healthy complexion every day." },
            { id: 2, Title: "Makeup Products", description: "Discover vibrant colors and flawless coverage with our premium makeup products. Whether it’s bold or natural, we have everything to enhance your beauty routine." },
            { id: 3, Title: "Nail Products & Services", description: "Treat your nails to luxury with our polish, care kits, and salon-quality tools. Shine, shape, and strengthen with ease at home or in the salon." },
            { id: 4, Title: "Haircare Products", description: "From root to tip, our haircare collection keeps your hair strong, shiny, and manageable. Find shampoos, conditioners, oils, and treatments for every hair type." },
            { id: 5, Title: "Fragrance Products", description: "Make a lasting impression with our range of fragrances. Whether light and floral or bold and musky, find the perfect scent that speaks to you." }
          ]
  return (
    <>
        <div className='flex flex-wrap justify-evenly mt-10 px-10 gap-2'>
            {cardComponets.map(card =>(
                <div key={card.id} className='p-5 shadow rounded-2xl text-center md:w-2/5 mt-10'>
                    <h1 className='text-2xl py-2 text-gray-900'>{card.Title}</h1>
                    <p className='py-1 text-gray-700 font-light'>{card.description}</p>
                </div>
            ))}
        </div>
        {/* <PaymentCard /> */}
    </>
  )
}

export default Cards
