import React, { Children } from 'react'
import sellchicken1 from '/src/assets/makeup2.jpeg'
import sellchicken2 from '/src/assets/makeup.jpeg'
import sellchicken3 from '/src/assets/makeup1.jpeg'
import LandingWholeSalares from './LandingWholeSalares'

const LandingSales = ({Title, Description}) => {
  return (
    <div className='bg-orange-500 w-full p-4 md:p-10'>
      <div>
        <h1 className='text-white text-3xl md:text-5xl py-2 md:py-5 font-bold'>The one beauty behind it all</h1>
        <h3 className='text-gray-900 py-4 md:py-3 text-xl md:text-4xl'>Sell online and in person.frozen in time.<span className='cursor-pointer hover:text-gray-700'>sell locally and nationwide.</span> <br/> <span className='cursor-pointer hover:text-gray-700'>Sell direct or wholesale.</span><span className='cursor-pointer hover:text-gray-600'> Sell on mobile or desktop.</span></h3>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 object-cover'>
        <div className='w-full md:w-2/5 max-w-[500px] h-[300px] md:h-[400px]'>
          <img src={sellchicken1} alt='chicken dish'  className='w-full h-full rounded-lg object-cover shadow-lg'/>
        </div>
        <div className='w-4/5 md:w-2/5 max-w-[300px] h-[300px] md:h-[400px]'>
          <img  src={sellchicken2}  alt='chicken biryani'  className='w-full h-full rounded-lg object-cover shadow-lg'/>
        </div>
        
        <div className='w-full md:w-2/5 max-w-[500px] h-[300px] md:h-[400px]'>
          <img  src={sellchicken3}  alt='chicken wings'  className='w-full h-full rounded-lg object-cover shadow-lg' />
        </div>
      </div>
      {/* <LandingWholeSalares Title = "Direct & WholeSales" Description = "Win Loyal Chicken Customers." /> */}
    </div>
  )
}

export default LandingSales;
