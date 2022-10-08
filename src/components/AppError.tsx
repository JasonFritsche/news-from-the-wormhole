import React from 'react'
import Card from '../components/Card'
import astronautimg from '../../assets/404-astronaut.png'

const AppError = () => {
  return (
    <React.Fragment>
      <div className='z-40 p-4 mt-5 text-center'>
          <h2 className="font-titillium-web text-lg text-white md:text-2xl lg:text-3xl leading-4">
          An error occurred, please try again later...
          </h2>
          <hr className='h-1 w-24 bg-white mt-5 inline-block rounded-sm'/>
      </div>
    </React.Fragment>
  )
}

export default AppError
