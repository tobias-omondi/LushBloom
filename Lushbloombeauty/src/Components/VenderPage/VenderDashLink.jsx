import React from 'react'

const VenderDashLink = ({title, description}) => {
  return (
    <div className='text-center mt-5 w-4/5 mx-auto rounded  py-5'>
        
      <h1 className='text-3xl text-gray-800'>{title}</h1>
      <p className='text-gray-800'>{description}</p>

      <button type='submit' className='mt-10 bg-blue-500 py-2 px-3 rounded text-white hover:bg-blue-700 cursor-pointer'>
        DASHBOARD
      </button>
  </div>
  )
}

export default VenderDashLink
