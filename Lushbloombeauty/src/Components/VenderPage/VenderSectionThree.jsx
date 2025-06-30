import React from 'react'

const VenderSectionThree = ({title, description}) => {
  return (
    <div className='text-center mt-5 w-2/3 mx-auto rounded  py-5'>
      <h1 className='text-3xl text-gray-800'>{title}</h1>
      <p className='text-gray-800'>{description}</p>
    </div>
  )
}

export default VenderSectionThree
