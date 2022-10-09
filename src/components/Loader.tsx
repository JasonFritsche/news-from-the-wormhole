import React, { FunctionComponent } from 'react'

const Loader: FunctionComponent = () => {
  return (
    <div className="mb-[10px] flex flex-col items-center">
      <div className="z-10 flex flex-row items-baseline">
        <h1 className="animate-pulse font-titillium-web text-4xl text-indigo-700">
          Loading
        </h1>
        <div className="ml-1 h-5 w-5 animate-pulse rounded-full bg-indigo-500 animation-delay-100"></div>
        <div className="ml-1 h-5 w-5 animate-pulse rounded-full bg-indigo-500 animation-delay-300"></div>
        <div className="ml-1 h-5 w-5 animate-pulse rounded-full bg-indigo-500 animation-delay-500"></div>
      </div>
    </div>
  )
}

export default Loader
