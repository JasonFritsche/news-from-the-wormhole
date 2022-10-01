import React, { FunctionComponent } from 'react'

const Loader: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex z-10 flex-row items-baseline">
        <h1 className="pt-3 text-4xl text-indigo-700 font-titillium-web animate-pulse">Loading</h1>
        <div className='w-5 h-5 bg-indigo-500 animation-delay-100 rounded-full animate-pulse ml-1'></div>
        <div className='w-5 h-5 bg-indigo-500 animation-delay-300 rounded-full animate-pulse ml-1'></div>
        <div className='w-5 h-5 bg-indigo-500 animation-delay-500 rounded-full animate-pulse ml-1'></div>
      </div>
    </div>
  )
}

export default Loader
