import React from 'react'
import skincare1 from '/src/assets/skincare1.jpeg'
import skincare2 from '/src/assets/skincare2.jpeg'
import skincare3 from '/src/assets/skincare3.jpeg'

const LandingScroll = () => {
  return (
    <div className='mt-16 flex justify-evenly items-center '>
      <img src={skincare1} alt='skincare' className='w-[350px] h-[400px] object-cover rounded-3xl'/>
      <img src={skincare2} alt='skincare' className='w-[350px] h-[400px] object-cover rounded-3xl'/>
      <img src={skincare3} alt='skincare' className='w-[350px] h-[400px] object-cover rounded-3xl'/>
    </div>
  )
}

export default LandingScroll
