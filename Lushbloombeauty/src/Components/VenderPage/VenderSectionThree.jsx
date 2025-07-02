import React from 'react'

const VenderSectionThree = ({title, description}) => {
  return (
    <div className='text-center mt-2 w-4/5 mx-auto rounded '>
      <h1 className='text-3xl text-gray-800'>{title}</h1>
      <p className='text-gray-800'>{description}</p>
    </div>
  )
}

export default VenderSectionThree
